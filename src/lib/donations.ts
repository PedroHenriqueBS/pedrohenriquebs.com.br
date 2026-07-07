export const DONATION_LIMITS = {
  /** R$ 1,00 */
  minCents: 100,
  /** R$ 500,00 */
  maxCents: 50_000,
  /** AbacatePay truncates PIX descriptions beyond 37 characters. */
  maxMessageLength: 37,
} as const

export type DonationStatus = 'PENDING' | 'PAID' | 'EXPIRED' | 'CANCELLED' | 'REFUNDED'

export interface DonationCharge {
  id: string
  amount: number
  status: DonationStatus
  /** PIX copy-and-paste code. */
  brCode: string
  /** QR Code image as a base64 data URL. */
  brCodeBase64: string
  /** ISO 8601 expiration timestamp. */
  expiresAt: string
}

export class DonationApiError extends Error {
  readonly unavailable: boolean

  constructor(message: string, unavailable = false) {
    super(message)
    this.name = 'DonationApiError'
    this.unavailable = unavailable
  }
}

async function parseError(response: Response): Promise<DonationApiError> {
  const unavailable = response.status === 503
  try {
    const body = (await response.json()) as { error?: string }
    return new DonationApiError(body.error ?? `HTTP ${response.status}`, unavailable)
  } catch {
    return new DonationApiError(`HTTP ${response.status}`, unavailable)
  }
}

export async function createDonation(
  amountCents: number,
  message?: string,
): Promise<DonationCharge> {
  const response = await fetch('/api/donations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: amountCents, message: message || undefined }),
  })
  if (!response.ok) throw await parseError(response)
  return (await response.json()) as DonationCharge
}

export async function fetchDonationStatus(id: string): Promise<DonationStatus> {
  const response = await fetch(`/api/donations?id=${encodeURIComponent(id)}`)
  if (!response.ok) throw await parseError(response)
  const body = (await response.json()) as { status: DonationStatus }
  return body.status
}
