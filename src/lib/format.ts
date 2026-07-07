const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

/** Formats an amount in cents as Brazilian Real, e.g. 1050 → "R$ 10,50". */
export function formatBRL(cents: number): string {
  return brl.format(cents / 100)
}

/**
 * Parses a user-typed amount ("15", "15,50", "15.50") into cents.
 * Returns null when the input is not a valid positive amount.
 */
export function parseAmountToCents(input: string): number | null {
  const normalized = input.trim().replace(/\./g, '').replace(',', '.')
  if (!/^\d+(\.\d{1,2})?$/.test(normalized)) return null
  const cents = Math.round(Number(normalized) * 100)
  return cents > 0 ? cents : null
}

/** Formats remaining seconds as "mm:ss". */
export function formatCountdown(totalSeconds: number): string {
  const clamped = Math.max(0, totalSeconds)
  const minutes = Math.floor(clamped / 60)
  const seconds = clamped % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
