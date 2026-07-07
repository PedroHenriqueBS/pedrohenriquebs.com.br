import { useCallback, useEffect, useRef, useState } from 'react'
import {
  createDonation,
  fetchDonationStatus,
  DonationApiError,
  type DonationCharge,
} from '../lib/donations'

const POLL_INTERVAL_MS = 4000

export type DonationState =
  | { step: 'idle' }
  | { step: 'creating' }
  | { step: 'awaiting_payment'; charge: DonationCharge; secondsLeft: number }
  | { step: 'paid'; charge: DonationCharge }
  | { step: 'expired'; charge: DonationCharge }
  | { step: 'error'; unavailable: boolean }

interface UseDonationResult {
  state: DonationState
  donate: (amountCents: number, message?: string) => Promise<void>
  reset: () => void
}

function secondsUntil(isoDate: string): number {
  return Math.max(0, Math.floor((new Date(isoDate).getTime() - Date.now()) / 1000))
}

/**
 * Donation flow state machine:
 * idle → creating → awaiting_payment → paid | expired, with error as a
 * recoverable branch. While awaiting payment it polls the charge status and
 * ticks a local expiration countdown.
 */
export function useDonation(): UseDonationResult {
  const [state, setState] = useState<DonationState>({ step: 'idle' })
  const chargeId = state.step === 'awaiting_payment' ? state.charge.id : null
  const pollBusy = useRef(false)

  const donate = useCallback(async (amountCents: number, message?: string) => {
    setState({ step: 'creating' })
    try {
      const charge = await createDonation(amountCents, message)
      setState({
        step: 'awaiting_payment',
        charge,
        secondsLeft: secondsUntil(charge.expiresAt),
      })
    } catch (error) {
      setState({
        step: 'error',
        unavailable: error instanceof DonationApiError && error.unavailable,
      })
    }
  }, [])

  const reset = useCallback(() => setState({ step: 'idle' }), [])

  // Countdown tick + local expiration.
  useEffect(() => {
    if (!chargeId) return
    const timer = setInterval(() => {
      setState((current) => {
        if (current.step !== 'awaiting_payment') return current
        const secondsLeft = secondsUntil(current.charge.expiresAt)
        if (secondsLeft <= 0) return { step: 'expired', charge: current.charge }
        return { ...current, secondsLeft }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [chargeId])

  // Status polling while a charge is pending.
  useEffect(() => {
    if (!chargeId) return
    const poll = async () => {
      if (pollBusy.current) return
      pollBusy.current = true
      try {
        const status = await fetchDonationStatus(chargeId)
        setState((current) => {
          if (current.step !== 'awaiting_payment' || current.charge.id !== chargeId) {
            return current
          }
          if (status === 'PAID') return { step: 'paid', charge: current.charge }
          if (status === 'EXPIRED' || status === 'CANCELLED') {
            return { step: 'expired', charge: current.charge }
          }
          return current
        })
      } catch {
        // transient polling failure — next tick retries
      } finally {
        pollBusy.current = false
      }
    }
    const timer = setInterval(() => void poll(), POLL_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [chargeId])

  return { state, donate, reset }
}
