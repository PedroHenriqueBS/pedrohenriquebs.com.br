import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
}

const variants = {
  primary:
    'bg-accent text-bg font-semibold shadow-[0_0_24px_--alpha(var(--color-accent)/25%)] hover:-translate-y-0.5 hover:shadow-[0_0_38px_--alpha(var(--color-accent)/45%)]',
  outline:
    'border border-accent/35 text-ink font-medium hover:border-accent hover:bg-accent/10',
} as const

export function Button({ variant = 'primary', className = '', ...rest }: ButtonProps) {
  return (
    <button
      className={`cursor-pointer rounded-lg px-6 py-3 text-[15px] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...rest}
    />
  )
}
