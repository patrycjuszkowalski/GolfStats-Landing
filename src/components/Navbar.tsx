import { useState } from 'react'
import Logo from './Logo'
import { APP_LOGIN, APP_REGISTER } from '../constants'
import { useLanguage } from '../i18n'

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const en = lang === 'en'

  const navLinks = en
    ? [
        { label: 'About', href: '#o-aplikacji' },
        { label: 'For whom', href: '#dla-kogo' },
        { label: 'Pricing', href: '#cennik' },
      ]
    : [
        { label: 'O aplikacji', href: '#o-aplikacji' },
        { label: 'Dla kogo',    href: '#dla-kogo' },
        { label: 'Cennik',      href: '#cennik' },
      ]

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#1d262d]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(en ? 'pl' : 'en')}
            className="px-3 py-1.5 text-xs font-bold rounded-lg border border-white/20 text-slate-300 hover:text-accent hover:border-accent/40 transition-colors tracking-widest"
            aria-label="Switch language"
          >
            {en ? 'PL' : 'EN'}
          </button>
          <a href={APP_LOGIN} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-sm font-bold text-white hover:text-accent transition-colors">
            {en ? 'Log in' : 'Logowanie'}
          </a>
          <a
            href={APP_REGISTER} target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm font-black bg-accent text-dark rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(43,255,0,0.3)]"
          >
            {en ? 'JOIN NOW' : 'DOŁĄCZ TERAZ'}
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-300 hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? (en ? 'Close menu' : 'Zamknij menu') : (en ? 'Open menu' : 'Otwórz menu')}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-dark px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 text-sm font-medium text-slate-300 hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => setLang(en ? 'pl' : 'en')}
              className="py-2 text-center text-xs font-bold text-slate-400 hover:text-accent transition-colors tracking-widest border border-white/10 rounded-lg"
            >
              {en ? '🇵🇱 Polski' : '🇬🇧 English'}
            </button>
            <a href={APP_LOGIN} target="_blank" rel="noopener noreferrer" className="py-2 text-center text-sm font-bold text-white">
              {en ? 'Log in' : 'Logowanie'}
            </a>
            <a href={APP_REGISTER} target="_blank" rel="noopener noreferrer" className="py-2.5 text-center text-sm font-black bg-accent text-dark rounded-full">
              {en ? 'JOIN NOW' : 'DOŁĄCZ TERAZ'}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
