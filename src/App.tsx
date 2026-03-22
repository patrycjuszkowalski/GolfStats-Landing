import { useState, useEffect, Fragment, type ReactNode } from 'react'

// ─── Stałe ────────────────────────────────────────────────────────────────────

const HERO_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEgiWxHz6MFM7wA33LI0oOqKBSnCUYTwFyCAsmsJPoJ7HRMR6Q5Mb5ykyGjve9FUdJPOxOOH_PBMXW_-56kQDRIWnWe7104Lq1GqH6RBH6Yvj_a1rsog96OQyX-0LuLWDMlx9rYJlnFZfUk8fkN0Q7k2u_jzuZBfYYc44NkQSpNFBTEt4gld30ruItMPOIbvIrALqwQ3QoGwXqvz0W43EBrDKogaOCMtGaQUsSaPrjQ0LrUkFJrdeZIypXpKVpbpptzi7Eeuu-yYaN'
const APPSTORE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfVcvRKPLQI6xb34Afl9yg260RUoc23JsItK9TyLsjRlLPLROdGcOd9-fhU4KC4XYz_5aLbk1LSOIXzqU0k2TxjANMMyAUdMSi-VFmZvGR2pHdsFmq8vhhQIRKMy0UgmKRn3ahmUbR9-6rc0eRLSYI7UK062TeBI3C7bAaqrgo0fS2R_srCM7xwNdEf-OxhAd7hp5fpTu-UOrTMkz-0IiIg3W_0JwnARP2DGZkMcbuMh5PcAPVuvBdyESM98vtZIDiR8__0zxMleY8'
const GOOGLEPLAY_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa5ktsBFjCxE9g8BsHiZ82fwJC8AQZZr00omePdbP5LKODyggeAnSYRC66Iet0XMQudNnXCRnXrT16_a6eMihcaAvP8tscUtjErSvyoQa5lFHTxGzlcKF7PIZA_g1tYMsfwywE7ZA-dOGiyvHdx5Pldsg_UglAtIacV0YEmGYG8WdeidGFF39crLRJgnw9c506WHqrDeOhGaj2FjQlYl5JRunSfb96d6j_nR42euXMz4D8z49M1Z4TQycFovAUa4bRy8EKbWYng8iQ'

const glass = 'bg-white/[0.03] backdrop-blur-md border border-white/10'

// URL aplikacji – zmień na produkcyjny przed wdrożeniem
const APP_URL = 'https://app.golfstats.pl'
const APP_REGISTER = `${APP_URL}/register`
const APP_LOGIN = `${APP_URL}/login`


// ─── ObfuscatedEmail ──────────────────────────────────────────────────────────

function ObfuscatedEmail() {
  const u = 'kontakt', d = 'golfstats', t = 'pl'
  return <span className="text-accent">{u}{'@'}{d}{'.'}{t}</span>
}

// ─── CookieBanner ─────────────────────────────────────────────────────────────

function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookie-consent'))

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#1a2830] border border-white/10 rounded-2xl shadow-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-slate-300 flex-1">
          Używamy wyłącznie niezbędnych plików cookies i localStorage do obsługi sesji i zapamiętania preferencji.
          Nie stosujemy cookies reklamowych ani śledzących.{' '}
          <a href="#/polityka-prywatnosci" className="text-accent hover:underline whitespace-nowrap">Polityka prywatności</a>
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 px-5 py-2 bg-accent text-black font-bold rounded-xl hover:brightness-110 transition-all text-sm"
        >
          Rozumiem, akceptuję
        </button>
      </div>
    </div>
  )
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo({ small = false }: { small?: boolean }) {
  return (
    <img
      src="/logo_golfstats.png"
      alt="GolfStats"
      className={small ? 'h-8 w-auto rounded-lg' : 'h-12 w-auto rounded-xl'}
    />
  )
}

// ─── Ikony ────────────────────────────────────────────────────────────────────

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

function CheckIcon() {
  return <span className="text-accent flex-shrink-0 text-lg leading-none">✓</span>
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'O aplikacji', href: '#o-aplikacji' },
    { label: 'Dla kogo',    href: '#dla-kogo' },
    { label: 'Cennik',      href: '#cennik' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#1d262d]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Logo />
        </a>

        {/* Desktop nav */}
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

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a href={APP_LOGIN} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-sm font-bold text-white hover:text-accent transition-colors">
            Logowanie
          </a>
          <a
            href={APP_REGISTER} target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm font-black bg-accent text-dark rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(43,255,0,0.3)]"
          >
            DOŁĄCZ TERAZ
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
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
            <a href={APP_LOGIN} target="_blank" rel="noopener noreferrer" className="py-2 text-center text-sm font-bold text-white">Logowanie</a>
            <a href={APP_REGISTER} target="_blank" rel="noopener noreferrer" className="py-2.5 text-center text-sm font-black bg-accent text-dark rounded-full">
              DOŁĄCZ TERAZ
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

// ─── Helper: strzałka przepływu ───────────────────────────────────────────────

function FlowArrow({ dir }: { dir: 'right' | 'left' }) {
  const isRight = dir === 'right'
  // symetryczny: x=10 (start) → x=90 (tip) — po 10 jednostek pustego miejsca z każdej strony
  const from = isRight ? '10;90' : '90;10'
  const arrowPath = isRight ? 'M76,6 L92,14 L76,22' : 'M24,6 L8,14 L24,22'
  const lineX = isRight ? { x1: 10, x2: 80 } : { x1: 90, x2: 20 }
  return (
    <div className="h-6 md:h-28 flex items-center justify-center w-7 md:w-12 flex-shrink-0 rotate-90 md:rotate-0">
      <svg viewBox="0 0 100 28" className="w-full text-accent" fill="none">
        {[0, 0.43, 0.86].map((begin) => (
          <circle key={begin} r="3.5" cy="14" fill="currentColor">
            <animate attributeName="cx" values={from} dur="1.4s" begin={`${begin}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;1;0" dur="1.4s" begin={`${begin}s`} repeatCount="indefinite"/>
          </circle>
        ))}
        <line {...lineX} y1="14" y2="14" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" opacity="0.5"/>
        <path d={arrowPath} stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

// ─── Helper: miniaturka wykresu ───────────────────────────────────────────────

function ChartMockup() {
  return (
    <svg viewBox="0 0 96 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" fill="#0d1f1a"/>
      {/* Siatka */}
      {[20, 36, 52, 68].map(y => (
        <line key={y} x1="10" y1={y} x2="86" y2={y} stroke="#2bff00" strokeWidth="0.3" opacity="0.15"/>
      ))}
      {/* Słupki */}
      {[
        { x: 14, h: 28, o: '0.5' },
        { x: 28, h: 42, o: '0.7' },
        { x: 42, h: 32, o: '0.6' },
        { x: 56, h: 52, o: '0.85' },
        { x: 70, h: 46, o: '0.75' },
      ].map(({ x, h, o }) => (
        <rect key={x} x={x} y={80 - h} width="10" height={h} rx="2" fill="#2bff00" opacity={o}/>
      ))}
      {/* Linia trendu */}
      <polyline
        points="19,52 33,38 47,48 61,28 75,34"
        stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round" opacity="0.7"
      />
      {[19,52, 33,38, 47,48, 61,28, 75,34].reduce<number[][]>((acc, _, i, arr) =>
        i % 2 === 0 ? [...acc, [arr[i], arr[i+1]]] : acc, []
      ).map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="white" opacity="0.85"/>
      ))}
      {/* Etykieta */}
      <text x="48" y="11" textAnchor="middle" fill="#2bff00" fontSize="7" fontWeight="bold" opacity="0.9">STATYSTYKI</text>
    </svg>
  )
}

// ─── Helper: miniaturka plannera ─────────────────────────────────────────────

function PlannerMockup() {
  const tasks = [
    { label: 'Analiza drivera', done: true },
    { label: 'Putting 15m', done: true },
    { label: 'Gra z rough', done: false },
    { label: 'Video swing', done: false },
  ]
  return (
    <svg viewBox="0 0 96 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" fill="#0d1f1a"/>
      <text x="48" y="11" textAnchor="middle" fill="#2bff00" fontSize="7" fontWeight="bold" opacity="0.9">PLAN TRENINGU</text>
      {/* Zadania */}
      {tasks.map((t, i) => {
        const y = 32 + i * 16
        return (
          <g key={t.label}>
            {/* checkbox */}
            <rect x="10" y={y - 6} width="10" height="10" rx="2"
              fill={t.done ? '#2bff00' : 'none'}
              stroke={t.done ? '#2bff00' : '#4ade80'}
              strokeWidth="1.2"
              opacity={t.done ? 1 : 0.5}
            />
            {t.done && (
              <path d={`M12,${y-1} L15,${y+2} L20,${y-5}`}
                stroke="#0d1f1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
              />
            )}
            {/* tekst */}
            <text x="25" y={y+2} fill={t.done ? 'white' : '#64748b'} fontSize="6.5" opacity={t.done ? 0.9 : 0.6}>
              {t.label}
            </text>
          </g>
        )
      })}
      {/* Postęp */}
      <rect x="10" y="80" width="76" height="5" rx="2.5" fill="white" opacity="0.1"/>
      <rect x="10" y="80" width="38" height="5" rx="2.5" fill="#2bff00" opacity="0.7"/>
      <text x="48" y="93" textAnchor="middle" fill="#2bff00" fontSize="6" opacity="0.7">50% ukończone</text>
    </svg>
  )
}

// ─── CyclingQuestions ─────────────────────────────────────────────────────────

const QUESTIONS = [
  'Kochasz grać w golfa?',
  'Cieszysz się każdą chwilą spędzoną na polu?',
  'Zależy Ci na poprawie wyników?',
  'Chcesz grać nie martwiąc się o kontuzje?',
]

function CyclingQuestions() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % QUESTIONS.length)
        setVisible(true)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mb-8 flex flex-col items-center gap-4">
      {/* pytanie */}
      <div className="min-h-[4rem] md:min-h-[5rem] flex items-center justify-center px-6 w-full">
        <p
          className="text-lg md:text-3xl font-black text-white text-center leading-tight"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {QUESTIONS[idx]}
        </p>
      </div>
      {/* progress dots */}
      <div className="flex gap-2">
        {QUESTIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setVisible(false); setTimeout(() => { setIdx(i); setVisible(true) }, 400) }}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === idx ? 24 : 8,
              height: 8,
              background: i === idx ? '#2bff00' : 'rgba(255,255,255,0.2)',
              boxShadow: i === idx ? '0 0 8px #2bff00' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Tło */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d262d]/60 via-[#1d262d]/80 to-[#1d262d] z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
        />
      </div>

      {/* Treść */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-6">

        {/* Główny panel — półprzezroczysty kafelek okalający cały flow */}
        <div className="mb-8 mt-4 md:mt-6 bg-white/[0.05] backdrop-blur-md border border-white/[0.1] rounded-3xl px-5 py-7 md:px-10 md:py-10 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">

          {/* Flow — 3 elementy */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">

            {/* 1. Wyniki Rund (zawodnik) */}
            <div className="flex md:flex-col items-center gap-3 md:gap-2 md:w-40 flex-shrink-0 w-full bg-white/[0.04] md:bg-transparent rounded-2xl md:rounded-none px-3 py-2 md:p-0 border border-white/10 md:border-0">
              <span className="hidden md:inline-flex text-xs font-bold tracking-widest uppercase text-accent/80 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 whitespace-nowrap">ZAWODNIK</span>
              <div className="w-14 h-14 md:w-32 md:h-32 rounded-2xl overflow-hidden ring-2 ring-accent/20 shadow-2xl flex-shrink-0">
                <ChartMockup />
              </div>
              <div className="flex flex-col gap-0.5 flex-1 md:items-center">
                <span className="md:hidden text-[9px] font-bold tracking-widest uppercase text-accent/70">ZAWODNIK</span>
                <span className="text-base md:text-3xl font-black text-white tracking-tight uppercase leading-tight md:text-center">WYNIKI RUND</span>
                <span className="text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-slate-400 whitespace-nowrap">Dane z gry</span>
              </div>
            </div>

            {/* → */}
            <FlowArrow dir="right" />

            {/* 2. CIĄGŁY ROZWÓJ — centrum */}
            <div className="w-full md:flex-shrink-0 md:w-auto bg-white/[0.07] backdrop-blur rounded-3xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-3 md:p-4">
              <div className="flex justify-center mb-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/30 border border-accent/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-accent">Analityka Pro-Data</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-2.5">
                {[
                  { src: '/poprawa.png', alt: 'Poprawa wyników' },
                  { src: '/radosc.png',  alt: 'Radość z gry' },
                  { src: '/dbanie.png',  alt: 'Dbanie o zdrowie' },
                  { src: '/cele.png',    alt: 'Cele sportowe' },
                ].map(({ src, alt }) => (
                  <div key={src} className="aspect-[4/3] md:w-44 md:h-36 rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                    <img src={src} alt={alt} className="w-full h-full object-cover"/>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-2">
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-accent/80 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 whitespace-nowrap">CIĄGŁY ROZWÓJ</span>
              </div>
            </div>

            {/* ← */}
            <FlowArrow dir="left" />

            {/* 3. Twój Trener */}
            <div className="flex md:flex-col items-center gap-3 md:gap-2 md:w-40 flex-shrink-0 w-full bg-white/[0.04] md:bg-transparent rounded-2xl md:rounded-none px-3 py-2 md:p-0 border border-white/10 md:border-0">
              <span className="hidden md:inline-flex text-xs font-bold tracking-widest uppercase text-accent/80 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 whitespace-nowrap">TWÓJ TRENER</span>
              <div className="w-14 h-14 md:w-32 md:h-32 rounded-xl overflow-hidden ring-1 ring-accent/20 shadow-2xl flex-shrink-0">
                <PlannerMockup />
              </div>
              <div className="flex flex-col gap-0.5 flex-1 md:items-center">
                <span className="md:hidden text-[9px] font-bold tracking-widest uppercase text-accent/70">TWÓJ TRENER</span>
                <span className="text-base md:text-3xl font-black text-white tracking-tight uppercase leading-tight md:text-center">ANALIZA GRY</span>
                <span className="text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-slate-400 whitespace-nowrap">Plan Treningu</span>
              </div>
            </div>

          </div>
        </div>{/* koniec panelu */}

        <CyclingQuestions />
        <p className="mb-10 max-w-2xl mx-auto text-center">
          <span className="block text-white font-semibold text-xl md:text-2xl mb-1">Zmień sposób, w jaki trenujesz!</span>
          <span className="block text-accent font-black tracking-widest uppercase text-2xl md:text-3xl">Sprawdź naszą aplikację</span>
        </p>

        {/* CTA */}
        <div className="flex flex-row items-center justify-center gap-4">
          <a
            href={`${APP_REGISTER}?role=STUDENT`} target="_blank" rel="noopener noreferrer"
            className="flex-1 px-4 py-4 bg-primary text-white font-black rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(10,77,60,0.4)] flex items-center justify-center gap-2 text-center leading-tight"
          >
            Jestem Zawodnikiem
          </a>
          <a
            href={`${APP_REGISTER}?role=TRAINER`} target="_blank" rel="noopener noreferrer"
            className={`flex-1 px-4 py-4 ${glass} text-white font-black rounded-xl hover:bg-white/10 hover:scale-105 transition-all flex items-center justify-center gap-2 text-center leading-tight`}
          >
            Jestem Trenerem
          </a>
        </div>

        {/* Statystyki – tymczasowo ukryte
        */}
      </div>
    </section>
  )
}

// ─── Funkcje — ikony SVG ──────────────────────────────────────────────────────

function IconScore() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Scorecard */}
      <rect x="3" y="2" width="19" height="24" rx="2.5" fill="#2bff00" fillOpacity="0.12" stroke="#2bff00" strokeWidth="1.5" strokeOpacity="0.65"/>
      <line x1="7" y1="8"  x2="18" y2="8"  stroke="#2bff00" strokeWidth="1.1" strokeOpacity="0.45"/>
      <line x1="7" y1="12" x2="18" y2="12" stroke="#2bff00" strokeWidth="1.1" strokeOpacity="0.45"/>
      <line x1="7" y1="16" x2="13" y2="16" stroke="#2bff00" strokeWidth="1.1" strokeOpacity="0.45"/>
      {/* Pencil */}
      <path d="M21 19 L30 10 L28 8 L19 17 Z" fill="#2bff00" fillOpacity="0.75"/>
      <path d="M19 17 L18 21 L22 20 Z" fill="#2bff00" fillOpacity="0.5"/>
      <line x1="28" y1="8" x2="30" y2="10" stroke="#2bff00" strokeWidth="1.5" strokeOpacity="0.9"/>
      {/* Mic circle hint */}
      <circle cx="27" cy="28" r="4.5" fill="#2bff00" fillOpacity="0.15" stroke="#2bff00" strokeWidth="1" strokeOpacity="0.5"/>
      <path d="M25,26.5 Q25,24.5 27,24.5 Q29,24.5 29,26.5 L29,28 Q29,30 27,30 Q25,30 25,28 Z" fill="#2bff00" fillOpacity="0.7"/>
      <line x1="27" y1="30" x2="27" y2="32" stroke="#2bff00" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.7"/>
    </svg>
  )
}

function IconAnalysis() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bars */}
      <rect x="3"  y="20" width="5" height="12" rx="1.5" fill="#2bff00" fillOpacity="0.35"/>
      <rect x="10" y="14" width="5" height="18" rx="1.5" fill="#2bff00" fillOpacity="0.55"/>
      <rect x="17" y="9"  width="5" height="23" rx="1.5" fill="#2bff00" fillOpacity="0.75"/>
      <rect x="24" y="4"  width="5" height="28" rx="1.5" fill="#2bff00" fillOpacity="0.95"/>
      {/* Trend line */}
      <polyline points="5.5,19 12.5,13 19.5,8 26.5,3" stroke="#2bff00" strokeWidth="1.8" fill="none" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Dots on trend */}
      {([[5.5,19],[12.5,13],[19.5,8],[26.5,3]] as [number,number][]).map(([x,y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#2bff00" fillOpacity="0.9"/>
      ))}
    </svg>
  )
}

function IconCoach() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Large bubble (trainer) */}
      <rect x="1" y="2" width="22" height="16" rx="4" fill="#2bff00" fillOpacity="0.2" stroke="#2bff00" strokeWidth="1.5" strokeOpacity="0.7"/>
      <path d="M5,18 L3,23 L9,18 Z" fill="#2bff00" fillOpacity="0.4"/>
      {/* Dots inside large bubble */}
      <circle cx="7"  cy="10" r="1.8" fill="#2bff00" fillOpacity="0.7"/>
      <circle cx="12" cy="10" r="1.8" fill="#2bff00" fillOpacity="0.7"/>
      <circle cx="17" cy="10" r="1.8" fill="#2bff00" fillOpacity="0.7"/>
      {/* Small bubble (player) */}
      <rect x="12" y="19" width="20" height="13" rx="3.5" fill="#2bff00" fillOpacity="0.12" stroke="#2bff00" strokeWidth="1.2" strokeOpacity="0.5"/>
      <path d="M29,32 L31,34 L27,32 Z" fill="#2bff00" fillOpacity="0.3"/>
      {/* Lines inside small bubble */}
      <line x1="16" y1="24" x2="28" y2="24" stroke="#2bff00" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="16" y1="28" x2="24" y2="28" stroke="#2bff00" strokeWidth="1" strokeOpacity="0.4"/>
    </svg>
  )
}

function IconTraining() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Calendar body */}
      <rect x="2" y="5" width="26" height="24" rx="3" fill="#2bff00" fillOpacity="0.1" stroke="#2bff00" strokeWidth="1.5" strokeOpacity="0.6"/>
      {/* Header bar */}
      <rect x="2" y="5" width="26" height="7" rx="3" fill="#2bff00" fillOpacity="0.2"/>
      <line x1="2" y1="12" x2="28" y2="12" stroke="#2bff00" strokeWidth="0.8" strokeOpacity="0.4"/>
      {/* Binding rings */}
      <line x1="9"  y1="2" x2="9"  y2="8" stroke="#2bff00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8"/>
      <line x1="21" y1="2" x2="21" y2="8" stroke="#2bff00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8"/>
      {/* Checkmarks in cells */}
      <path d="M7,17 L9,20 L13,15"  stroke="#2bff00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9"/>
      <path d="M17,17 L19,20 L23,15" stroke="#2bff00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9"/>
      <path d="M7,24 L9,27 L13,22"  stroke="#2bff00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9"/>
      {/* Empty cell (future) */}
      <rect x="17" y="22" width="6" height="5" rx="1" fill="none" stroke="#2bff00" strokeWidth="1" strokeOpacity="0.3"/>
      {/* Target hint */}
      <circle cx="30" cy="30" r="4" fill="#2bff00" fillOpacity="0.15" stroke="#2bff00" strokeWidth="1" strokeOpacity="0.5"/>
      <circle cx="30" cy="30" r="1.5" fill="#2bff00" fillOpacity="0.7"/>
    </svg>
  )
}

// ─── Funkcje ──────────────────────────────────────────────────────────────────

type Feature = {
  Icon: () => JSX.Element
  title: ReactNode
  desc: ReactNode
  headline: [string, string]   // [zielona linia, biała linia]
  subheadline: string
  body: ReactNode
  cta: string
  images?: string[]            // [góra, dół]
  imagesLeft?: boolean         // obrazki po lewej, tekst po prawej
}

const FEATURES: Feature[] = [
  {
    Icon: IconScore,
    title: <>Łatwe Dodawanie<br/>Wyników Rund</>,
    desc: <>W łatwy sposób wprowadzisz dane swoich rund Turniejowych oraz Treningowych rozegranych na polach w Polsce. Możesz to zrobić ręcznie ale również <span className="text-accent font-medium">masz możliwość podyktowania wyników</span> w Aplikacji. Dane te posłużą do analizy Twojej gry i zaplanowania dalszego rozwoju.</>,
    headline: ['Koniec z uciążliwym', 'wpisywaniem wyników'],
    subheadline: 'GolfStats zrobi to za Ciebie.',
    body: <>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Każdy z nas nie lubi wpisywania rund. Samo zapisywanie wyników na Score Card bywa problematyczne, a co dopiero w aplikacji.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Niestety bez rzetelnych i wiarygodnych danych nie zaplanujesz efektywnego treningu, który wpłynie na Twoje wyniki w kolejnych rundach.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">W GolfStats <span className="text-accent font-medium">wpisujesz wyniki ręcznie lub dyktujesz je głosowo</span>. Nasze AI zajmie się resztą — przetworzy Twoje słowa na pełne statystyki każdego dołka.</p>
    </>,
    cta: 'Wypróbuj AI za darmo',
    images: ['/Rundy_nagrywanie_mowy.png', '/Rundy_3_telefony.png'],
  },
  {
    Icon: IconAnalysis,
    title: <>Precyzyjna Analiza<br/>Twojej Gry</>,
    desc: <>Statystyki i analiza postępów gry w szczególności <span className="text-accent font-medium">co się zmieniło w Twojej grze</span> w porównaniu z poprzednimi rundami. Dane FIR, GIR, Putts Gained, Up&amp;Down i Sand Saves dla każdej rundy. <span className="text-accent font-medium">Pełny wgląd</span> w każdy dołek, w każdą rundę oraz kompleksowa analiza Twojej gry.</>,
    headline: ['Dane statystyczne to fundament planowania', ''],
    subheadline: 'GolfStats pomoże je przygotować',
    images: ['/Analiza_gry_1.png', '/Analiza_gry_2.png'],
    imagesLeft: true,
    body: <>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Dane, dane i jeszcze raz dane ... ale co one oznaczają. Mnogość informacji może powodować zawrót głowy.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Dlatego <span className="text-accent font-medium">przygotowaliśmy najważniejsze statystyki</span> każdego zawodnika i udostępniliśmy je Trenerom. To oni pomogą Ci zaplanować trening, wskażą które elementy są <span className="text-accent font-medium">Twoją mocną stroną</span> a które <span className="text-accent font-medium">należy poprawić w pierwszej kolejności</span>.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">GolfStats na bazie wprowadzonych przez Ciebie danych przygotuje wszystkie istotne statystyki, dane tabelaryczne czy wykresy. Dzięki nim wspólnie z Trenerem ustalisz i zaplanujesz swój rozwój golfowy.</p>
    </>,
    cta: 'Zobacz statystyki',
  },
  {
    Icon: IconCoach,
    title: <>Szybka Komunikacja<br/>Trener – Zawodnik</>,
    desc: <>Masz możliwość <span className="text-accent font-medium">komunikowania się z Twoim Trenerem bezpośrednio w Aplikacji</span>. Twój trener widzi Twoje wiadomości, załączone filmy oraz zapisane rundy w czasie rzeczywistym. Masz kontakt z Trenerem i feedback odnośnie gry w jednym miejscu.</>,
    headline: ['Twój trener zawsze', 'blisko Ciebie'],
    subheadline: 'GolfStats porządkuje komunikację',
    images: ['/Komunikacja.png'],
    imagesLeft: true,
    body: <>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Ile razy będąc na Drivingu czy na Chippingu nie wiedziałeś dlaczego oddawane strzały nie lądują tam gdzie powinny, dlaczego grasz slice czu pull?</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Jak dobrze byłoby mieć koło siebie trenera, który spojrzy swoim fachowym okiem i skoryguje Twoje błedy.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Dzięki GolfStats <span className="text-accent font-medium">masz możliwość komunikowania się z Trenerem</span> na kilka sposobów. Możesz pisać z nim wiadomosci w uporzadkowanych wątkach tematycznych, możesz nagrać filmik jak uderzasz i otrzymasz od Trenera wskazówki co do Twojego swingu. <span className="text-accent font-medium">To wszystko w jednym miejscu, uporządkowane, z pełna histoią wysyłanych wiadomości.</span></p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Ty i Twój Trener widzicie wysyłane wiadomości tekstowe czy wysyłane filmy w czasie rzeczywistym. <span className="text-accent font-medium">Masz stały kontakt z Trenerem</span> i natychmiastowy feedback odnośnie Twojej gry — wszystko bez wychodzenia z aplikacji.</p>
    </>,
    cta: 'Połącz się z trenerem',
  },
  {
    Icon: IconTraining,
    title: <>Korekta Gry<br/>Planowanie Treningu</>,
    desc: 'Dzięki statystykom i dostępowi Trenera do Twoich wyników wspólnie możecie zaplanować efektywny trening. Dane statystyczne w szerokim zakresie pozwalają planować trening tam gdzie będzie on miał największy wpływ na poprawę Twojej gry.',
    headline: ['Trening tam, gdzie', 'ma największy sens'],
    subheadline: 'GolfStat - planowanie oparte na danych.',
    body: <>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Ty wprowadzasz dane <i>(rozegrane rundy, wiadomości i fimiki)</i> a <span className="text-accent font-medium">Trener na bazie tych informacji wspólnie z Toba</span> planuje efektywny i skuteczny plan poprawy Twojej gry. Nie musisz być ekspertem w anlizie danych - zostaw to naszym Trenerom oni wiedzą jak analizowac Twoją grę i jak sprawić aby była skuteczniejsza.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">TTrener widzi i analizuje Twoje dane, jest w stanie dostrzec <span className="text-accent font-medium">Twoje mocne oraz słabe strony</span>. Dzięki dostępowi do GolfStats może zaplanować sesje treningowe <span className="text-accent font-medium">precyzyjnie dopasowane do Twoich potrzeb i celów treningowych.</span></p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Trener <span className="text-accent font-medium">może przesłać ci wskazówki odnośnie treningu</span>, podesłać własny film instruktarzowy czy umówić się z Toba na indywidualną sesję treningową na polu golfowym lub Driving Range. Ty masz <span className="text-accent font-medium">możliwość przesłania Trenerowi swoich postępów i uwag</span> co do wprowdzanych zmian i realizowanego treningu.</p>
    </>,
    cta: 'Zaplanuj trening',
  },
]

function Features() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const handleToggle = (i: number) => {
    const willOpen = openIdx !== i
    setOpenIdx(willOpen ? i : null)
    if (willOpen) {
      setTimeout(() => {
        const isDesktop = window.innerWidth >= 1024
        const id = isDesktop ? 'feature-panel' : `inline-panel-${i}`
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 50)
    }
  }

  const active = openIdx !== null ? FEATURES[openIdx] : null

  return (
    <section id="o-aplikacji" className="py-10 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
          Funkcje Aplikacji
        </h2>
        <h3 className="text-1xl font-black text-white mb-4 uppercase tracking-tighter">
          Prostota i funkcjonalność
        </h3>
        <div className="w-20 h-1.5 bg-accent" />
      </div>

      {/* Siatka 4 kafelków + inline panele (mobile/tablet) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((f, i) => (
          <Fragment key={i}>
            <div
              className={`${glass} p-6 rounded-2xl flex flex-col transition-all cursor-pointer
                ${openIdx === i ? 'border-accent/60 bg-white/[0.07]' : 'hover:border-accent/40 hover:bg-white/[0.05]'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <f.Icon />
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{f.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{f.desc}</p>
              <button
                onClick={() => handleToggle(i)}
                className={`mt-4 self-end text-sm font-semibold flex items-center gap-1.5 transition-all
                  ${openIdx === i ? 'text-white' : 'text-accent hover:opacity-80'}`}
              >
                {openIdx === i
                  ? <><span>Zwiń</span><span className="text-xs">▲</span></>
                  : <><span>Zobacz więcej</span><span className="text-xs text-accent">▼</span></>}
              </button>
            </div>

            {/* Panel inline — tylko mobile i tablet (poniżej lg) */}
            {openIdx === i && (
              <div
                id={`inline-panel-${i}`}
                className="col-span-full lg:hidden bg-[#0d1f1a] border border-accent/25 rounded-3xl overflow-hidden"
              >
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-2xl font-black leading-tight text-white">
                    {f.headline[0]}
                    {f.headline[1] && <><br/><span className="whitespace-nowrap">{f.headline[1]}</span></>}
                  </h3>
                  {f.subheadline && <p className="text-slate-300 text-sm font-medium">{f.subheadline}</p>}
                  <div className="text-slate-300 text-sm leading-relaxed">{f.body}</div>
                  {f.images?.[0] && (
                    <img src={f.images[0]} alt="" className="w-full max-w-xs mx-auto drop-shadow-[0_8px_24px_rgba(43,255,0,0.2)]" />
                  )}
                  {f.images?.[1] && (
                    <img src={f.images[1]} alt="" className="w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]" />
                  )}
                  <div className="flex items-center gap-4">
                    <button className="px-5 py-2.5 bg-accent text-[#0d1f1a] font-black rounded-xl hover:opacity-90 transition-opacity text-sm">
                      {f.cta}
                    </button>
                    <button onClick={() => setOpenIdx(null)} className="text-slate-500 hover:text-white transition-colors text-sm">
                      Zwiń ▲
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>

      {/* ── Panel rozwijany pod siatką — tylko desktop (lg+) ── */}
      {active && (
        <div id="feature-panel" className="hidden lg:block mt-6 max-w-3xl bg-[#0d1f1a] border border-accent/25 rounded-3xl overflow-hidden">

          {active.images?.length ? (
            /* ── Layout: góra 2 kolumny + dół scalony ── */
            <div className="grid grid-cols-[2fr_3fr]">

              {/* Góra: obrazek lub tekst — kolejność zależna od imagesLeft */}
              {active.imagesLeft ? (
                /* obrazki po lewej, tekst po prawej */
                <>
                  <div className="flex items-center justify-center p-6">
                    <img
                      src={active.images[0]}
                      alt=""
                      className="w-64 md:w-80 drop-shadow-[0_8px_32px_rgba(43,255,0,0.25)]"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-8 py-10">
                    <h3 className="text-2xl md:text-3xl font-black leading-tight mb-3 text-white">
                      {active.headline[0]}
                      {active.headline[1] && <><br/><span className="whitespace-nowrap">{active.headline[1]}</span></>}
                    </h3>
                    <p className="text-slate-300 text-sm font-medium mb-4">{active.subheadline}</p>
                    {active.body}
                    <div className="flex items-center gap-4 mt-4">
                      <button className="px-5 py-2.5 bg-accent text-[#0d1f1a] font-black rounded-xl hover:opacity-90 transition-opacity text-sm">
                        {active.cta}
                      </button>
                      <button onClick={() => setOpenIdx(null)} className="text-slate-500 hover:text-white transition-colors text-sm">
                        Zwiń ▲
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* tekst po lewej, obrazek po prawej */
                <>
                  <div className="flex flex-col justify-center px-8 py-10">
                    <h3 className="text-2xl md:text-3xl font-black leading-tight mb-3 text-white">
                      {active.headline[0]}
                      {active.headline[1] && <><br/><span className="whitespace-nowrap">{active.headline[1]}</span></>}
                    </h3>
                    <p className="text-slate-300 text-sm font-medium mb-4">{active.subheadline}</p>
                    {active.body}
                    <div className="flex items-center gap-4 mt-4">
                      <button className="px-5 py-2.5 bg-accent text-[#0d1f1a] font-black rounded-xl hover:opacity-90 transition-opacity text-sm">
                        {active.cta}
                      </button>
                      <button onClick={() => setOpenIdx(null)} className="text-slate-500 hover:text-white transition-colors text-sm">
                        Zwiń ▲
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-6">
                    <img
                      src={active.images[0]}
                      alt=""
                      className="w-52 md:w-60 drop-shadow-[0_8px_32px_rgba(43,255,0,0.25)]"
                    />
                  </div>
                </>
              )}

              {/* Dół: pełna szerokość */}
              <div className="col-span-2 flex justify-center px-8 pb-8 bg-[#0d1f1a]">
                <img
                  src={active.images[1]}
                  alt=""
                  className="w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>

          ) : (
            /* ── Fallback: tylko tekst ── */
            <div className="px-8 py-10 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-black leading-tight mb-3 text-white">
                {active.headline[0]}
                {active.headline[1] && <><br/>{active.headline[1]}</>}
              </h3>
              {active.subheadline && <p className="text-white font-semibold text-base mb-6">{active.subheadline}</p>}
              {active.body}
              <div className="flex items-center gap-4 mt-4">
                <button className="px-5 py-2.5 bg-accent text-[#0d1f1a] font-black rounded-xl hover:opacity-90 transition-opacity text-sm">
                  {active.cta}
                </button>
                <button onClick={() => setOpenIdx(null)} className="text-slate-500 hover:text-white transition-colors text-sm">
                  Zwiń ▲
                </button>
              </div>
            </div>
          )}

        </div>
      )}
    </section>
  )
}

// ─── Dla kogo ─────────────────────────────────────────────────────────────────

function DlaKogo() {
  const golferItems = [
    'Chcesz poprawić swoją grę i nie wiesz od czego zacząć',
    'Chcesz mieć wgląd w swoje Rundy i Statystyki',
    'Chcesz mieć kontakt z najlepszymi Trenerami',
    'Chcesz skonsultować swoją grę z Trenerem, bo masz wrażenie, że obecny trening nie wpływa na Twoje wyniki',
    'Chcesz poprawić swoją grę i zbić Handicap',
    'Chcesz wygrać swoje pierwsze zawody',
  ]
  const trainerItems = [
    'Chcesz się wyróżnić wśród lokalnych Trenerów',
    'Chcesz mieć narzędzie do pracy ze swoimi Zawodnikami',
    'Chcesz mieć w jednym miejscu Historię ich gry, Wyniki Rund i Statystyki',
    'Chcesz móc szybko i w uporządkowany sposób komunikować się z Zawodnikami',
    'Chcesz skutecznie planować treningi swoich Zawodników',
    'Chcesz mieć więcej trenujących z Tobą Zawodników',
  ]

  return (
    <section
      id="dla-kogo"
      className="py-10 md:py-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
            Dla kogo jest GolfStats?
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Golfista */}
          <div className={`relative overflow-hidden rounded-3xl p-10 flex flex-col ${glass}`}>
            <div className="absolute -right-16 -bottom-16 text-[180px] opacity-5 select-none">⛳</div>
            <h3 className="text-3xl font-black text-white mb-2">Dla Amatorów i Zawodowców</h3>
            <p className="text-slate-400 text-sm mb-6 font-medium">Jeżeli ...</p>
            <ul className="space-y-4 flex-1">
              {golferItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-10">
              <a
                href={`${APP_REGISTER}?role=STUDENT`} target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-dark font-bold rounded-lg hover:bg-accent transition-all text-center leading-tight"
              >
                Zacznij grać lepiej<br />z GolfStats
              </a>
            </div>
          </div>

          {/* Trener */}
          <div className="relative overflow-hidden rounded-3xl p-10 flex flex-col bg-primary/20 border border-primary/50">
            <div className="absolute -right-16 -bottom-16 text-[180px] opacity-5 select-none">🏆</div>
            <h3 className="text-3xl font-black text-white mb-2">Dla Trenerów i Instruktorów</h3>
            <p className="text-slate-400 text-sm mb-6 font-medium">Jeżeli ...</p>
            <ul className="space-y-4 flex-1">
              {trainerItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-10">
              <a
                href={`${APP_REGISTER}?role=TRAINER`} target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-accent text-dark font-bold rounded-lg hover:bg-white transition-all text-center leading-tight"
              >
                Zostań Trenerem<br />GolfStats
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Cennik ───────────────────────────────────────────────────────────────────

function Cennik() {
  return (
    <section id="cennik" className="py-10 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">
          Wybierz swój plan treningowy
        </h2>
        <p className="text-slate-400">Wybierz plan, który odpowiada Twoim potrzebom.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Free */}
        <div className={`${glass} p-8 rounded-2xl flex flex-col`}>
          <span className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Free</span>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-black text-white">0 zł</span>
            <span className="text-slate-400">/mies.</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">Bezpłatnie, na zawsze</p>
          <ul className="space-y-3 mb-8 flex-1">
            {[
              <>Zapis <span className="text-accent font-bold">5 rund</span> miesięcznie</>,
              <><span className="text-accent font-bold">Podstawowe</span> statystyki</>,
              'Aplikacja mobilna',
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckIcon /> {f}
              </li>
            ))}
          </ul>
          <a
            href={APP_REGISTER} target="_blank" rel="noopener noreferrer"
            className={`w-full py-3 text-center ${glass} rounded-lg font-bold text-white hover:bg-white/10 transition-all`}
          >
            Wybierz Free
          </a>
        </div>

        {/* Start — wyróżniony */}
        <div className="bg-primary/40 border-2 border-accent p-8 rounded-2xl flex flex-col relative scale-105 shadow-2xl shadow-accent/10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-dark text-[10px] font-black px-4 py-1 rounded-full uppercase whitespace-nowrap">
            POLECANY WYBÓR
          </div>
          <span className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Start</span>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-black text-white">19 zł</span>
            <span className="text-slate-400">/mies.</span>
          </div>
          <p className="text-slate-400 text-sm mb-6">14 dni trialu za darmo</p>
          <ul className="space-y-3 mb-8 flex-1">
            {[
              <>Zapis <span className="text-accent font-bold">15 rund</span> miesięcznie</>,
              <><span className="text-accent font-bold">Szczegółowe</span> statystyki</>,
              'Aplikacja mobilna',
              <>Połączenie z <span className="text-accent font-bold">jednym</span> Trenerem</>,
              <><span className="text-accent font-bold">Zapis głosowy</span> wyników rund AI</>,
              'System polecen Member get Member',
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-white">
                <CheckIcon /> {f}
              </li>
            ))}
          </ul>
          <a
            href={APP_REGISTER} target="_blank" rel="noopener noreferrer"
            className="w-full py-4 text-center bg-accent text-dark rounded-xl font-black hover:scale-[1.02] transition-all shadow-[0_10px_20px_rgba(43,255,0,0.2)]"
          >
            Wybierz Start
          </a>
        </div>

        {/* Full */}
        <div className={`${glass} p-8 rounded-2xl flex flex-col`}>
          <span className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Full</span>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-black text-white">29 zł</span>
            <span className="text-slate-400">/mies.</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">14 dni trialu za darmo</p>
          <ul className="space-y-3 mb-8 flex-1">
            {[
              <><span className="text-accent font-bold">Nielimitowany</span> zapis rund</>,
              <><span className="text-accent font-bold">Szczegółowe</span> statystyki</>,
              'Aplikacja mobilna',
              <>Połączenie z <span className="text-accent font-bold">wieloma</span> Trenerami</>,
              <><span className="text-accent font-bold">Zapis głosowy</span> wyników rund AI</>,
              'System polecen Member get Member',
              <><span className="text-accent font-bold">Indywidualny</span> plan treningowy</>,
              <>Możliwość <span className="text-accent font-bold">eksportu danych</span> do pliku CSV</>,
              <>Dodawanie <span className="text-accent font-bold">pól golfowych</span> do Aplikacji</>,
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckIcon /> {f}
              </li>
            ))}
          </ul>
          <a
            href={`${APP_REGISTER}?role=STUDENT`} target="_blank" rel="noopener noreferrer"
            className={`w-full py-3 text-center ${glass} rounded-lg font-bold text-white hover:bg-white/10 transition-all`}
          >
            Wybierz Full
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-10 md:py-24 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary to-[#1d262d] border border-white/10 rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,255,0,0.08),transparent)] pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Gotowy na erę danych w golfie?
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
          Dołącz do tysięcy golfistów i trenerów, którzy już teraz optymalizują swoje wyniki z GolfStats.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <img src={APPSTORE_IMG} alt="Download on App Store" className="h-12 rounded-lg" />
          <img src={GOOGLEPLAY_IMG} alt="Get it on Google Play" className="h-12 rounded-lg" />
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
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

// ─── Polityka prywatności ─────────────────────────────────────────────────────

function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <h1 className="text-3xl font-black text-white">Polityka prywatności</h1>
      <p className="text-sm text-slate-500">Ostatnia aktualizacja: marzec 2026</p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">1. Administrator danych osobowych</h2>
        <p>Administratorem Twoich danych osobowych jest właściciel serwisu GolfStats dostępnego pod adresem <strong>golfstats.pl</strong> i <strong>app.golfstats.pl</strong>. W sprawach dotyczących ochrony danych osobowych możesz skontaktować się pod adresem e-mail: <ObfuscatedEmail />.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">2. Jakie dane zbieramy</h2>
        <p>W trakcie korzystania z aplikacji GolfStats przetwarzamy następujące dane:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Dane rejestracyjne:</strong> adres e-mail, imię i nazwisko, rola (zawodnik / trener).</li>
          <li><strong>Dane profilowe:</strong> płeć, data urodzenia, miasto, telefon, klub golfowy, handicap, kategoria PZG, cele treningowe.</li>
          <li><strong>Dane z gry:</strong> wyniki rund, statystyki uderzeń (lie, odległość, kara), dane dołków i pól golfowych.</li>
          <li><strong>Materiały wideo:</strong> filmy z nagrań treningowych wgrywane dobrowolnie przez użytkownika.</li>
          <li><strong>Wiadomości:</strong> treść korespondencji pomiędzy zawodnikiem a trenerem w ramach aplikacji.</li>
          <li><strong>Dane techniczne:</strong> adres IP, typ przeglądarki, logi dostępu – na potrzeby bezpieczeństwa i diagnostyki.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">3. Cel i podstawa przetwarzania</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Świadczenie usług</strong> (art. 6 ust. 1 lit. b RODO) – prowadzenie konta, analiza statystyk, komunikacja trener–zawodnik.</li>
          <li><strong>Wysyłka e-maili</strong> (art. 6 ust. 1 lit. b RODO) – powiadomienia o aktywności konta, potwierdzenie rejestracji.</li>
          <li><strong>Prawnie uzasadniony interes</strong> (art. 6 ust. 1 lit. f RODO) – bezpieczeństwo systemu, wykrywanie nadużyć, logi techniczne.</li>
          <li><strong>Zgoda</strong> (art. 6 ust. 1 lit. a RODO) – marketing bezpośredni, jeżeli wyrazisz na to odrębną zgodę.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">4. Okres przechowywania danych</h2>
        <p>Dane przechowujemy przez czas trwania umowy (aktywnego konta), a po jej rozwiązaniu przez okres wymagany przepisami prawa (do 5 lat w przypadku danych finansowych) lub do czasu cofnięcia zgody. Dane konta możesz usunąć samodzielnie z poziomu aplikacji lub kontaktując się z nami.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">5. Odbiorcy danych</h2>
        <p>Twoje dane mogą być przekazywane wyłącznie zaufanym podmiotom przetwarzającym, z którymi zawarliśmy umowę powierzenia:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Hostinger</strong> – infrastruktura serwerowa (serwer w UE).</li>
          <li><strong>Brevo (Sendinblue)</strong> – wysyłka e-maili transakcyjnych.</li>
          <li><strong>Anthropic</strong> – przetwarzanie transkryptów głosowych w celu analizy wyników (dane są pseudoanonimowe, bez danych identyfikacyjnych użytkownika).</li>
        </ul>
        <p>Nie sprzedajemy ani nie udostępniamy danych osobom trzecim w celach marketingowych.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">6. Twoje prawa</h2>
        <p>Zgodnie z RODO przysługują Ci następujące prawa:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Dostęp</strong> do Twoich danych oraz uzyskanie ich kopii.</li>
          <li><strong>Sprostowanie</strong> nieprawidłowych lub niekompletnych danych.</li>
          <li><strong>Usunięcie</strong> danych („prawo do bycia zapomnianym").</li>
          <li><strong>Ograniczenie przetwarzania</strong> w określonych przypadkach.</li>
          <li><strong>Przenoszenie</strong> danych do innego administratora.</li>
          <li><strong>Sprzeciw</strong> wobec przetwarzania opartego na prawnie uzasadnionym interesie.</li>
          <li><strong>Cofnięcie zgody</strong> w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania przed cofnięciem.</li>
        </ul>
        <p>Wnioski kieruj na adres: <ObfuscatedEmail />. Masz również prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">7. Pliki cookies</h2>
        <p>Aplikacja GolfStats korzysta wyłącznie z niezbędnych plików cookies i localStorage służących do utrzymania sesji użytkownika oraz zapamiętania preferencji motywu (jasny/ciemny). Nie stosujemy plików cookies analitycznych ani reklamowych podmiotów trzecich.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">8. Bezpieczeństwo</h2>
        <p>Stosujemy szyfrowanie HTTPS (TLS), hasła przechowujemy w formie skrótów kryptograficznych (bcrypt), a dostęp do danych produkcyjnych jest ograniczony. Mimo stosowania środków technicznych i organizacyjnych nie możemy zagwarantować absolutnego bezpieczeństwa w internecie.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">9. Zmiany polityki</h2>
        <p>Zastrzegamy prawo do zmiany niniejszej polityki. O istotnych zmianach poinformujemy e-mailem lub komunikatem w aplikacji. Korzystanie z aplikacji po wejściu w życie zmian oznacza ich akceptację.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">10. Kontakt</h2>
        <p>W sprawach dotyczących prywatności: <ObfuscatedEmail /></p>
      </section>
    </div>
  )
}

// ─── Regulamin ────────────────────────────────────────────────────────────────

function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <h1 className="text-3xl font-black text-white">Regulamin serwisu GolfStats</h1>
      <p className="text-sm text-slate-500">Ostatnia aktualizacja: marzec 2026</p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§1. Definicje</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Serwis</strong> – aplikacja webowa dostępna pod adresem app.golfstats.pl wraz ze stroną golfstats.pl.</li>
          <li><strong>Usługodawca</strong> – właściciel i operator Serwisu GolfStats.</li>
          <li><strong>Użytkownik</strong> – osoba fizyczna korzystająca z Serwisu po założeniu Konta.</li>
          <li><strong>Zawodnik</strong> – Użytkownik korzystający z funkcji śledzenia rund i statystyk.</li>
          <li><strong>Trener</strong> – Użytkownik korzystający z funkcji zarządzania podopiecznymi i planowania treningów.</li>
          <li><strong>Konto</strong> – indywidualne konto Użytkownika chronione hasłem.</li>
          <li><strong>Plan</strong> – wybrany pakiet dostępu do funkcji Serwisu (Bezpłatny lub Premium).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§2. Zakres usług</h2>
        <p>GolfStats świadczy usługi drogą elektroniczną polegające na:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>rejestracji i analizie wyników rund golfowych (statystyki uderzeń, handicap, porównania),</li>
          <li>komunikacji pomiędzy Zawodnikiem a Trenerem (wiadomości, wideo, plany treningowe),</li>
          <li>głosowym wprowadzaniu wyników przy użyciu technologii AI,</li>
          <li>przechowywaniu danych z gry i materiałów wideo.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§3. Rejestracja i konto</h2>
        <p>3.1. Korzystanie z Serwisu wymaga założenia Konta. Rejestracja jest bezpłatna.</p>
        <p>3.2. Użytkownik zobowiązuje się podać prawdziwe dane i utrzymywać je w aktualności.</p>
        <p>3.3. Użytkownik odpowiada za zachowanie poufności hasła i wszelkie działania podjęte z jego Konta.</p>
        <p>3.4. Zabronione jest zakładanie Kont w imieniu innych osób bez ich zgody oraz tworzenie kont fikcyjnych.</p>
        <p>3.5. Jeden Użytkownik może posiadać tylko jedno aktywne Konto.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§4. Plany i płatności</h2>
        <p>4.1. Serwis oferuje Plan Bezpłatny z ograniczonym zakresem funkcji oraz Plan Premium z pełnym dostępem.</p>
        <p>4.2. Ceny i zakres Planów określone są w Cenniku dostępnym na stronie golfstats.pl. Usługodawca zastrzega prawo zmiany cennika z zachowaniem 30-dniowego okresu powiadomienia.</p>
        <p>4.3. Płatności za Plan Premium realizowane są z góry za wybrany okres rozliczeniowy za pośrednictwem operatora płatności.</p>
        <p>4.4. Faktury VAT wystawiane są na żądanie Użytkownika po podaniu danych do faktury.</p>
        <p>4.5. Użytkownikowi będącemu konsumentem przysługuje prawo odstąpienia od umowy w ciągu 14 dni od zawarcia, chyba że w tym czasie skorzystał z usługi cyfrowej i utracił prawo do odstąpienia po udzieleniu wyraźnej zgody.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§5. Prawa i obowiązki Użytkownika</h2>
        <p>5.1. Użytkownik zobowiązuje się korzystać z Serwisu zgodnie z prawem, dobrymi obyczajami i niniejszym Regulaminem.</p>
        <p>5.2. Zabronione jest:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>publikowanie treści bezprawnych, obraźliwych lub naruszających prawa osób trzecich,</li>
          <li>wgrywanie plików zawierających złośliwe oprogramowanie,</li>
          <li>podejmowanie działań zakłócających pracę Serwisu (ataki DDoS, scraping, automatyczne boty),</li>
          <li>udostępnianie dostępu do Konta Premium osobom trzecim.</li>
        </ul>
        <p>5.3. Użytkownik zachowuje prawa autorskie do wgrywanych przez siebie materiałów (wideo, nagrania) i udziela Usługodawcy nieodpłatnej licencji na ich przechowywanie i wyświetlanie wyłącznie w celu świadczenia usługi.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§6. Odpowiedzialność</h2>
        <p>6.1. Serwis jest narzędziem pomocniczym i nie zastępuje porad wykwalifikowanego trenera golfowego ani lekarza. Usługodawca nie odpowiada za decyzje treningowe podjęte na podstawie danych z Serwisu.</p>
        <p>6.2. Usługodawca dokłada starań w celu zapewnienia ciągłości działania Serwisu, jednak nie gwarantuje dostępności 24/7 i zastrzega prawo do przerw technicznych z wyprzedzającym powiadomieniem.</p>
        <p>6.3. Usługodawca nie odpowiada za treści wiadomości wymieniane pomiędzy Użytkownikami.</p>
        <p>6.4. Odpowiedzialność Usługodawcy wobec Użytkownika (niebędącego konsumentem) ograniczona jest do wysokości opłat uiszczonych przez Użytkownika za ostatnie 3 miesiące.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§7. Rozwiązanie umowy i usunięcie konta</h2>
        <p>7.1. Użytkownik może usunąć Konto w dowolnym momencie z poziomu ustawień aplikacji lub wysyłając prośbę na adres <ObfuscatedEmail />. Usunięcie Konta jest nieodwracalne.</p>
        <p>7.2. Usługodawca może zablokować lub usunąć Konto w przypadku naruszenia Regulaminu, po uprzednim wezwaniu do zaprzestania naruszeń (chyba że naruszenie jest rażące).</p>
        <p>7.3. W przypadku rozwiązania umowy w trakcie okresu rozliczeniowego Użytkownikowi nie przysługuje zwrot proporcjonalnej części opłaty, chyba że przepisy prawa konsumenckiego stanowią inaczej.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§8. Reklamacje</h2>
        <p>8.1. Reklamacje dotyczące usług należy składać drogą elektroniczną na adres <ObfuscatedEmail />.</p>
        <p>8.2. Reklamacja powinna zawierać: dane Użytkownika (e-mail), opis problemu oraz oczekiwany sposób rozwiązania.</p>
        <p>8.3. Usługodawca rozpatruje reklamacje w terminie 14 dni roboczych od jej otrzymania.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§9. Postanowienia końcowe</h2>
        <p>9.1. Regulamin podlega prawu polskiemu. W sprawach nieunormowanych stosuje się przepisy Kodeksu cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.</p>
        <p>9.2. Spory pomiędzy Usługodawcą a Użytkownikiem niebędącym konsumentem rozstrzygane są przez sąd właściwy dla siedziby Usługodawcy.</p>
        <p>9.3. Konsument może skorzystać z pozasądowych metod rozwiązywania sporów, w tym z platformy ODR dostępnej pod adresem ec.europa.eu/consumers/odr.</p>
        <p>9.4. Usługodawca zastrzega prawo do zmiany Regulaminu. O zmianach Użytkownicy zostaną poinformowani e-mailem lub komunikatem w aplikacji z co najmniej 14-dniowym wyprzedzeniem. Dalsze korzystanie z Serwisu po wejściu zmian w życie oznacza ich akceptację.</p>
        <p>9.5. Kontakt: <ObfuscatedEmail /></p>
      </section>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

// ─── Kontakt ──────────────────────────────────────────────────────────────────

function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <h1 className="text-3xl font-black text-white">Kontakt</h1>

      <section className="space-y-4">
        <p className="text-lg text-slate-300">
          Masz pytania dotyczące aplikacji, swojego konta lub współpracy? Napisz do nas — odpowiadamy w ciągu 1–2 dni roboczych.
        </p>

        <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 space-y-4">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1">E-mail ogólny</p>
            <p className="text-white font-semibold"><ObfuscatedEmail /></p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1">Sprawy techniczne i błędy</p>
            <p className="text-white font-semibold"><ObfuscatedEmail /></p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1">Współpraca i media</p>
            <p className="text-white font-semibold"><ObfuscatedEmail /></p>
          </div>
        </div>

        <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 space-y-2">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1">Operator serwisu</p>
          <p className="text-white font-semibold">GolfStats</p>
          <p className="text-slate-400 text-sm">Polska</p>
        </div>

        <p className="text-sm text-slate-500">
          Przed napisaniem zapoznaj się z naszą{' '}
          <a href="#/polityka-prywatnosci" className="text-accent hover:underline">Polityką prywatności</a>
          {' '}i{' '}
          <a href="#/regulamin" className="text-accent hover:underline">Regulaminem</a>.
        </p>
      </section>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<'home' | 'privacy' | 'terms' | 'contact'>('home')

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === '#/polityka-prywatnosci') setPage('privacy')
      else if (window.location.hash === '#/regulamin') setPage('terms')
      else if (window.location.hash === '#/kontakt') setPage('contact')
      else setPage('home')
    }
    onHash()
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const shell = (children: ReactNode) => (
    <div className="min-h-screen font-sans antialiased bg-[#1d262d] text-slate-100">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  )

  if (page === 'privacy') return shell(<PrivacyPolicy />)
  if (page === 'terms') return shell(<TermsOfService />)
  if (page === 'contact') return shell(<ContactPage />)

  return shell(
    <>
      <Hero />
      <Features />
      <DlaKogo />
      <Cennik />
      <CTASection />
    </>
  )
}
