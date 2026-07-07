import { useState } from 'react'
import { useLanguage } from '../../i18n'
import { CloseIcon, MenuIcon } from '../ui/icons'

export function Navbar() {
  const { t, lang, toggle } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#sobre', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projetos', label: t.nav.projects },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#apoie', label: t.nav.support },
    { href: '#contato', label: t.nav.contact },
  ]

  const langButton = (
    <button
      onClick={toggle}
      className="cursor-pointer rounded-md border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-xs font-semibold tracking-wider text-accent transition-colors hover:bg-accent hover:text-bg"
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para português'}
    >
      {lang === 'pt' ? 'EN' : 'PT'}
    </button>
  )

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-accent/10 bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[62px] max-w-[1140px] items-center justify-between gap-4 px-6">
        <a href="#hero" className="flex items-center gap-2 font-mono text-sm font-semibold text-accent">
          <span className="opacity-55">~/</span>pedro.dev
          <span className="inline-block h-4 w-2 animate-blink bg-accent" aria-hidden="true" />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 text-[13.5px] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-muted transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
          {langButton}
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          {langButton}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="cursor-pointer p-1 text-muted transition-colors hover:text-accent"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col border-t border-accent/10 bg-bg/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-accent/5 py-3 text-[15px] text-muted transition-colors last:border-none hover:text-accent"
            >
              <span className="mr-2 font-mono text-accent" aria-hidden="true">
                &gt;
              </span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
