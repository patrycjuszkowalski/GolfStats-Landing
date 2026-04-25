import Logo from './Logo'
import { useLanguage } from '../i18n'

export default function Footer() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <footer className="py-12 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <Logo small />
          <span className="text-sm text-slate-500">© 2025 GolfStats. {en ? 'All rights reserved.' : 'Wszelkie prawa zastrzeżone.'}</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-500">
          <a href={en ? '#/privacy-policy' : '#/polityka-prywatnosci'} className="hover:text-accent transition-colors">
            {en ? 'Privacy Policy' : 'Polityka prywatności'}
          </a>
          <a href={en ? '#/terms-of-service' : '#/regulamin'} className="hover:text-accent transition-colors">
            {en ? 'Terms of Service' : 'Regulamin'}
          </a>
          <a href={en ? '#/contact' : '#/kontakt'} className="hover:text-accent transition-colors">
            {en ? 'Contact' : 'Kontakt'}
          </a>
        </div>
      </div>
    </footer>
  )
}
