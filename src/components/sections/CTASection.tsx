import { useLanguage } from '../../i18n'

export default function CTASection() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section className="py-10 md:py-24 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary to-[#1d262d] border border-white/10 rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,255,0,0.08),transparent)] pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          {en ? 'Ready for a big change?' : 'Gotowy na wielkie zmiany?'}
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
          {en
            ? 'Join the golfers who are already improving their game with GolfStats today.'
            : 'Dołącz do golfistów, którzy już dzisiaj poprawiają swoją grę z GolfStats.'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* App Store */}
          <div className="flex flex-col items-center gap-1.5">
            <a href="#" className="flex items-center gap-3 bg-black border border-white/20 hover:border-white/40 transition-colors rounded-xl px-5 py-3 min-w-[160px]">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-white/60 leading-none">Download on the</div>
                <div className="text-base font-bold text-white leading-tight">App Store</div>
              </div>
            </a>
            <span className="text-[11px] text-accent/70 font-medium tracking-wide">
              {en ? 'Coming soon' : 'Aplikacja wkrótce'}
            </span>
          </div>
          {/* Google Play */}
          <div className="flex flex-col items-center gap-1.5">
            <a href="#" className="flex items-center gap-3 bg-black border border-white/20 hover:border-white/40 transition-colors rounded-xl px-5 py-3 min-w-[160px]">
              <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.18 23.76c.3.16.64.2.98.12L15.27 12 11.6 8.34 3.18 23.76z" fill="#EA4335"/>
                <path d="M20.93 10.4l-2.8-1.6-3.86 3.2 3.86 3.8 2.8-1.6c.8-.46.8-1.34 0-1.8z" fill="#FBBC04"/>
                <path d="M3.18.24C2.88.4 2.67.7 2.67 1.1v21.8c0 .4.21.7.51.86L15.27 12 3.18.24z" fill="#34A853"/>
                <path d="M3.18.24l8.42 11.1 3.67-3.67L4.16.12C3.82.04 3.48.08 3.18.24z" fill="#4285F4"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-white/60 leading-none">Get it on</div>
                <div className="text-base font-bold text-white leading-tight">Google Play</div>
              </div>
            </a>
            <span className="text-[11px] text-accent/70 font-medium tracking-wide">
              {en ? 'Coming soon' : 'Aplikacja wkrótce'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
