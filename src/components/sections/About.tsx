import { useLanguage } from '../../i18n'
import { profile } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'
import { TerminalWindow } from '../ui/TerminalWindow'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="relative z-1 mx-auto max-w-[1140px] scroll-mt-16 px-6 py-16 md:py-[90px]">
      <SectionHeading number="01" title={t.about.title} />
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div data-reveal className="flex flex-col gap-4.5 text-[16.5px] leading-[1.75] text-muted">
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
          <p>{t.about.paragraph3}</p>
        </div>
        <div data-reveal>
          <TerminalWindow title="pedro.config.ts">
            <div>
              <span className="text-[#6a8a72]">const</span> <span className="text-accent">dev</span> ={' '}
              {'{'}
            </div>
            <div className="pl-4.5">
              location: <span className="text-[#c9e4b4]">"{profile.location}"</span>,
            </div>
            <div className="pl-4.5">
              role: <span className="text-[#c9e4b4]">"{t.about.factRole}"</span>,
            </div>
            <div className="pl-4.5">
              company: <span className="text-[#c9e4b4]">"{profile.company}"</span>,
            </div>
            <div className="pl-4.5">
              degree: <span className="text-[#c9e4b4]">"{t.about.factDegree}"</span>,
            </div>
            <div className="pl-4.5">
              coffee: <span className="text-accent">true</span>,
            </div>
            <div>{'};'}</div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  )
}
