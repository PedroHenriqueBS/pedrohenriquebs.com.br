import type { Localized } from '../i18n'

export interface Education {
  course: Localized
  school: string
  period: string
  completed: boolean
}

export const education: readonly Education[] = [
  {
    course: { pt: 'Bacharelado em Engenharia de Software', en: 'B.Sc. in Software Engineering' },
    school: 'UNINTER',
    period: '2026 — 2030',
    completed: false,
  },
  {
    course: {
      pt: 'Análise e Desenvolvimento de Sistemas',
      en: 'Systems Analysis and Development',
    },
    school: 'UniDomBosco',
    period: '2022 — 2024',
    completed: true,
  },
  {
    course: { pt: 'Técnico em Informática', en: 'IT Technical Degree' },
    school: 'Senac RS',
    period: '2016 — 2018',
    completed: true,
  },
]
