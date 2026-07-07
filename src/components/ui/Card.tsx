import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Adds lift + glow on hover. */
  interactive?: boolean
}

export function Card({ interactive = false, className = '', ...rest }: CardProps) {
  const base = 'rounded-2xl border border-accent/15 bg-surface'
  const hover = interactive
    ? ' transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_12px_34px_rgba(0,0,0,0.45)]'
    : ''
  return <div className={`${base}${hover} ${className}`} {...rest} />
}
