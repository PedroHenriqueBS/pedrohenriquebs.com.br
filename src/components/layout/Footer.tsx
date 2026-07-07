import { useLanguage } from '../../i18n'
import { profile } from '../../data/profile'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="relative z-1 border-t border-accent/10 px-6 py-7 text-center font-mono text-[12.5px] text-faint">
      <span className="text-accent">&lt;/&gt;</span> © {new Date().getFullYear()} {profile.name} —{' '}
      {t.footer}
    </footer>
  )
}
