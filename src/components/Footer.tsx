import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <Logo small />
          <span className="text-sm text-slate-500">© 2025 GolfStats. Wszelkie prawa zastrzeżone.</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-500">
          <a href="#/polityka-prywatnosci" className="hover:text-accent transition-colors">Polityka prywatności</a>
          <a href="#/regulamin" className="hover:text-accent transition-colors">Regulamin</a>
          <a href="#/kontakt" className="hover:text-accent transition-colors">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}
