import { useLanguage } from '../../i18n'
import { education } from '../../data/education'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  const { t, resolve } = useLanguage()

  return (
    <section id="formacao" className="relative z-1 mx-auto max-w-[1140px] scroll-mt-16 px-6 py-16 md:py-[90px]">
      <SectionHeading number="05" title={t.education.title} />
      <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((item) => (
          <Card key={item.school} interactive data-reveal className="p-6.5">
            <div className="mb-3 font-mono text-xs text-accent">{item.period}</div>
            <h3 className="mb-1.5 text-[17.5px] leading-snug font-semibold">{resolve(item.course)}</h3>
            <div className="mb-3.5 text-[14.5px] text-muted">{item.school}</div>
            <span className="rounded-[5px] bg-accent/10 px-2.5 py-1 font-mono text-[11.5px] text-tag">
              {item.completed ? t.education.completed : t.education.ongoing}
            </span>
          </Card>
        ))}
      </div>
    </section>
  )
}
