const ABACATEPAY_API_BASE = 'https://api.abacatepay.com/v1'

export class AbacatePayError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'AbacatePayError'
    this.status = status
  }
}

export interface PixQrCode {
  id: string
  amount: number
  status: 'PENDING' | 'PAID' | 'EXPIRED' | 'CANCELLED' | 'REFUNDED'
  brCode: string
  brCodeBase64: string
  expiresAt: string
  devMode: boolean
}

interface AbacatePayEnvelope<T> {
  data?: T
  error?: string | null
}

export function isConfigured(): boolean {
  return Boolean(process.env.ABACATEPAY_API_KEY)
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const apiKey = process.env.ABACATEPAY_API_KEY
  if (!apiKey) {
    throw new AbacatePayError('ABACATEPAY_API_KEY is not configured', 503)
  }

  const response = await fetch(`${ABACATEPAY_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  })

  const body = (await response.json().catch(() => ({}))) as AbacatePayEnvelope<T>
  if (!response.ok || body.error) {
    throw new AbacatePayError(
      body.error || `AbacatePay responded with HTTP ${response.status}`,
      response.status,
    )
  }
  return (body.data ?? body) as T
}

export function createPixQrCode(params: {
  amount: number
  description?: string
  expiresIn: number
}): Promise<PixQrCode> {
  return request<PixQrCode>('/pixQrCode/create', {
    method: 'POST',
    body: JSON.stringify(params),
  })
}

export function checkPixQrCode(id: string): Promise<Pick<PixQrCode, 'status' | 'expiresAt'>> {
  return request<Pick<PixQrCode, 'status' | 'expiresAt'>>(
    `/pixQrCode/check?id=${encodeURIComponent(id)}`,
  )
}
