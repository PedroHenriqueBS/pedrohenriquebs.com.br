import { useLanguage } from '../../i18n'
import { profile } from '../../data/profile'
import { useTypewriter } from '../../hooks/useTypewriter'
import { useGitHubProfile } from '../../hooks/useGitHubProfile'
import { GitHubIcon } from '../ui/icons'

function CoffeeIllustration() {
  return (
    <svg width="190" height="190" viewBox="0 0 200 200" aria-hidden="true">
      <ellipse cx="100" cy="176" rx="58" ry="9" fill="rgba(0,0,0,.45)" />
      <path d="M74 52 C74 40 86 40 86 30" stroke="#9db3a0" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".8" />
      <path d="M100 52 C100 40 112 40 112 30" stroke="#9db3a0" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".55" />
      <path d="M52 78 L134 78 L126 158 C125.2 166 118 172 110 172 L76 172 C68 172 60.8 166 60 158 Z" fill="#e8f0e8" />
      <path d="M58.5 94 L127.5 94 L123 138 L63 138 Z" fill="#6f4e37" />
      <path d="M62 100 C78 94 108 96 120 104" stroke="#8a6248" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".7" />
      <path d="M134 88 C154 88 160 102 154 113 C149.5 121.5 139 124.5 131 123 L132.8 112 C138 113.5 143.5 111.8 145 106.5 C146.5 101.2 142 100 134 100 Z" fill="#e8f0e8" />
    </svg>
  )
}

export function Hero() {
  const { t } = useLanguage()
  const typedRole = useTypewriter(profile.typewriterRoles)
  const github = useGitHubProfile()

  const stats = [
    { value: profile.yearsInTech, label: t.hero.statYears },
    { value: String(github.publicRepos), label: t.hero.statRepos },
    { value: String(github.followers), label: t.hero.statFollowers },
  ]

  return (
    <header
      id="hero"
      className="relative z-1 mx-auto grid max-w-[1140px] items-center gap-12 px-6 pt-28 pb-16 md:grid-cols-[1.4fr_1fr] md:pt-[150px] md:pb-[90px]"
    >
      <div className="flex flex-col gap-5">
        <p className="flex items-center gap-2.5 font-mono text-sm text-accent">
          <span className="opacity-50" aria-hidden="true">
            $
          </span>
          {t.hero.hello}
        </p>
        <h1 className="text-[clamp(44px,10vw,72px)] leading-[1.02] font-bold tracking-[-2px]">
          Pedro
          <br />
          Henrique<span className="text-accent">.</span>
        </h1>
        <p className="flex min-h-[30px] items-center font-mono text-[clamp(16px,2vw,21px)] text-muted">
          <span className="mr-2 text-accent" aria-hidden="true">
            &gt;
          </span>
          <span>{typedRole}</span>
          <span className="ml-0.5 inline-block h-[22px] w-2.5 animate-blink bg-accent" aria-hidden="true" />
        </p>
        <p className="max-w-[480px] text-[16.5px] leading-[1.65] text-muted">{t.hero.description}</p>

        <div className="mt-2 flex flex-wrap gap-3.5">
          <a
            href="#projetos"
            className="rounded-lg bg-accent px-6.5 py-3 text-[15px] font-semibold text-bg shadow-[0_0_24px_--alpha(var(--color-accent)/25%)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_38px_--alpha(var(--color-accent)/45%)]"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/35 px-6.5 py-3 text-[15px] font-medium text-ink transition-all duration-200 hover:border-accent hover:bg-accent/10"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>

        <dl className="mt-5 flex gap-9 font-mono">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-[26px] font-semibold text-accent">{stat.value}</dd>
              <dd className="text-xs text-faint">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hidden justify-center md:flex">
        <div className="relative animate-floaty">
          <div className="absolute -inset-3.5 rotate-[4deg] rounded-[26px] border border-accent/30" aria-hidden="true" />
          <div className="flex size-[280px] animate-pulse-ring items-center justify-center overflow-hidden rounded-[22px] border border-accent/45 [background:radial-gradient(circle_at_50%_65%,--alpha(var(--color-accent)/14%),#0b110b_70%)]">
            <CoffeeIllustration />
          </div>
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-accent/30 bg-surface-alt px-4.5 py-2 font-mono text-xs whitespace-nowrap text-accent">
            <span className="inline-block size-2 rounded-full bg-accent" aria-hidden="true" />
            {t.hero.coffeeBadge}
          </div>
        </div>
      </div>
    </header>
  )
}
