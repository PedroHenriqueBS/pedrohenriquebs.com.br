import type { Localized } from '../i18n'

export interface Experience {
  role: Localized
  company: string
  period: Localized
  place: string
  current: boolean
  description: Localized
}

export const experiences: readonly Experience[] = [
  {
    role: { pt: 'Desenvolvedor de Software Júnior', en: 'Junior Software Developer' },
    company: 'Hortti',
    period: { pt: 'nov 2025 — presente', en: 'Nov 2025 — present' },
    place: 'Porto Alegre, RS',
    current: true,
    description: {
      pt: 'Desenvolvimento full stack de plataforma web com React, TypeScript, NestJS e PostgreSQL, incluindo testes de unidade e boas práticas de arquitetura.',
      en: 'Full stack development of a web platform with React, TypeScript, NestJS and PostgreSQL, including unit testing and architecture best practices.',
    },
  },
  {
    role: { pt: 'Técnico de TI', en: 'IT Technician' },
    company: 'Raio Som Diagnósticos por Imagem',
    period: { pt: 'mar 2025 — out 2025', en: 'Mar 2025 — Oct 2025' },
    place: 'Gravataí, RS',
    current: false,
    description: {
      pt: 'Suporte à infraestrutura, instalação e configuração de hardware e atendimento aos usuários.',
      en: 'Infrastructure support, hardware installation and configuration, and user support.',
    },
  },
  {
    role: { pt: 'Desenvolvedor Front-end', en: 'Front-end Developer' },
    company: 'Hapvida SL91',
    period: { pt: 'jun 2024 — dez 2024', en: 'Jun 2024 — Dec 2024' },
    place: 'Salvador, BA',
    current: false,
    description: {
      pt: 'Desenvolvimento e implementação de websites responsivos, garantindo uma experiência otimizada em diferentes dispositivos.',
      en: 'Development and implementation of responsive websites, ensuring an optimized experience across devices.',
    },
  },
  {
    role: { pt: 'Técnico de TI', en: 'IT Technician' },
    company: 'Raio Som Diagnósticos por Imagem',
    period: { pt: 'dez 2022 — jun 2023', en: 'Dec 2022 — Jun 2023' },
    place: 'Gravataí, RS',
    current: false,
    description: {
      pt: 'Auxílio na instalação e configuração de hardware, rotinas do setor de TI e suporte aos usuários.',
      en: 'Assisted with hardware installation and configuration, IT department routines and user support.',
    },
  },
]
