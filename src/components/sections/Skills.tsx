import { useLanguage } from '../../i18n'
import { skillGroups } from '../../data/skills'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'

export function Skills() {
  const { t, resolve } = useLanguage()

  return (
    <section id="skills" className="relative z-1 mx-auto max-w-[1140px] scroll-mt-16 px-6 py-16 md:py-[90px]">
      <SectionHeading number="02" title={t.skills.title} />
      <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.tag} interactive data-reveal className="p-6.5">
            <div className="mb-1.5 font-mono text-[13px] text-accent">{group.tag}</div>
            <h3 className="mb-4.5 text-[19px] font-semibold">{resolve(group.title)}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item.pt}>{resolve(item)}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
