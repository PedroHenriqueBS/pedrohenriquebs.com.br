interface SectionHeadingProps {
  number: string
  title: string
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div data-reveal className="mb-9 flex items-baseline gap-3.5">
      <span className="font-mono text-[15px] text-accent">{`// ${number}.`}</span>
      <h2 className="text-2xl font-bold tracking-tight sm:text-[34px]">{title}</h2>
      <div className="h-px flex-1 bg-accent/15" aria-hidden="true" />
    </div>
  )
}
