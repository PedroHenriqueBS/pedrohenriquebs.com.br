import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  /** Smaller, accent-tinted variant used inside project cards. */
  compact?: boolean
}

export function Tag({ children, compact = false }: TagProps) {
  if (compact) {
    return (
      <span className="rounded-[5px] bg-accent/10 px-2 py-1 font-mono text-[11.5px] text-accent">
        {children}
      </span>
    )
  }
  return (
    <span className="cursor-default rounded-md border border-accent/15 bg-accent/5 px-2.5 py-1.5 font-mono text-[12.5px] text-tag transition-colors hover:border-accent hover:bg-accent/15 hover:text-accent">
      {children}
    </span>
  )
}
