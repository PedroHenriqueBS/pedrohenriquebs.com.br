import { useLanguage } from '../../i18n'
import { experiences } from '../../data/experience'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  const { t, resolve } = useLanguage()

  return (
    <section id="experiencia" className="relative z-1 mx-auto max-w-[1140px] scroll-mt-16 px-6 py-16 md:py-[90px]">
      <SectionHeading number="04" title={t.experience.title} />
      <div className="mx-auto flex max-w-[780px] flex-col">
        {experiences.map((experience, index) => (
          <div key={`${experience.company}-${index}`} data-reveal className="grid grid-cols-[24px_1fr] gap-5.5">
            <div className="flex flex-col items-center" aria-hidden="true">
              {experience.current ? (
                <span className="mt-1.5 size-3.5 flex-none rounded-full bg-accent shadow-[0_0_14px_--alpha(var(--color-accent)/60%)]" />
              ) : (
                <span className="mt-1.5 box-border size-3.5 flex-none rounded-full border-2 border-accent/45" />
              )}
              <span className="mt-1.5 w-px flex-1 bg-accent/20" />
            </div>
            <div className="pb-9.5">
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <h3 className="text-[19px] font-semibold">{resolve(experience.role)}</h3>
                {experience.current && (
                  <span className="rounded-full border border-accent/35 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                    {t.experience.current}
                  </span>
                )}
              </div>
              <div className="mb-1 text-[15px] text-accent">{experience.company}</div>
              <div className="mb-2.5 font-mono text-[12.5px] text-faint">
                {resolve(experience.period)} · {experience.place}
              </div>
              <p className="max-w-[620px] text-[15px] leading-[1.65] text-muted">
                {resolve(experience.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
