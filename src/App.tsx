import { useState, useEffect, Fragment, type ReactNode } from 'react'

// ─── Stałe ────────────────────────────────────────────────────────────────────

const HERO_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEgiWxHz6MFM7wA33LI0oOqKBSnCUYTwFyCAsmsJPoJ7HRMR6Q5Mb5ykyGjve9FUdJPOxOOH_PBMXW_-56kQDRIWnWe7104Lq1GqH6RBH6Yvj_a1rsog96OQyX-0LuLWDMlx9rYJlnFZfUk8fkN0Q7k2u_jzuZBfYYc44NkQSpNFBTEt4gld30ruItMPOIbvIrALqwQ3QoGwXqvz0W43EBrDKogaOCMtGaQUsSaPrjQ0LrUkFJrdeZIypXpKVpbpptzi7Eeuu-yYaN'
const GOLFER_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYNu0JUrsbTuJGydWpJudQOsodZbeWHZfNcvTmDmKMRRZYWKGIOotrRnCc6FJY62HsHtW46yNbP3VBE6Rz2DGFKyNP8uulvZMkK-Z28zk49mqmFjFRQRQm4MxuJC3oolKG8xfqm-g8c9brGFT5F8MDigannU4zt4iG7OQOJlj3fWyK9-ZaDJvjTuhxza6BzjDHUzd5tBCjSJHUHOcIVzoQRw4nemGQq3hPw2VRtL5v6YyK0fSdodLwGNiZI_gdk4MnYkrRoymE6-_n'
const TRAINER_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuANbZV8JNvLZXlKSdxgsFX83tBpTXHrnWn_Y1R0FCQ6ATVv_n1lapbome0VvI8jK6z9cdV_uG_490kzD1OnFKMQOxulNESVRxzkb_c7Jlq2rsyEmgevcxqOQbcbekoNF_BafpvR586UevySudSCmNMvoG0tcLcRCQ2SldEVYAgxsEOBSbtfB2586Jk8nZ7hZ4MQiAAlJFjAnHxudsXVHBYtOv_OUVyTWNZC2rGoG9JMTJnLzFWXlPL3ogRfJRl2CwatcPfcIuyHQYFt'
const APPSTORE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfVcvRKPLQI6xb34Afl9yg260RUoc23JsItK9TyLsjRlLPLROdGcOd9-fhU4KC4XYz_5aLbk1LSOIXzqU0k2TxjANMMyAUdMSi-VFmZvGR2pHdsFmq8vhhQIRKMy0UgmKRn3ahmUbR9-6rc0eRLSYI7UK062TeBI3C7bAaqrgo0fS2R_srCM7xwNdEf-OxhAd7hp5fpTu-UOrTMkz-0IiIg3W_0JwnARP2DGZkMcbuMh5PcAPVuvBdyESM98vtZIDiR8__0zxMleY8'
const GOOGLEPLAY_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa5ktsBFjCxE9g8BsHiZ82fwJC8AQZZr00omePdbP5LKODyggeAnSYRC66Iet0XMQudNnXCRnXrT16_a6eMihcaAvP8tscUtjErSvyoQa5lFHTxGzlcKF7PIZA_g1tYMsfwywE7ZA-dOGiyvHdx5Pldsg_UglAtIacV0YEmGYG8WdeidGFF39crLRJgnw9c506WHqrDeOhGaj2FjQlYl5JRunSfb96d6j_nR42euXMz4D8z49M1Z4TQycFovAUa4bRy8EKbWYng8iQ'

const glass = 'bg-white/[0.03] backdrop-blur-md border border-white/10'

// URL aplikacji – zmień na produkcyjny przed wdrożeniem
const APP_URL = 'https://app.golfstats.pl'
const APP_REGISTER = `${APP_URL}/register`
const APP_LOGIN = `${APP_URL}/login`


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
        <div className="mb-8 bg-white/[0.05] backdrop-blur-md border border-white/[0.1] rounded-3xl px-5 py-6 md:px-8 md:py-8 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">

          {/* Flow — 5 elementów */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">

            {/* 1. Twój Golf */}
            <div className="flex md:flex-col flex-row items-center gap-1.5 md:gap-2 md:w-32 flex-shrink-0">
              <div className="h-10 md:h-28 flex items-center justify-center">
                <div className="relative">
                  <div className="w-9 h-9 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-white/20 shadow-2xl">
                    <img src={GOLFER_IMG} alt="Golfista" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#1d262d] flex items-center justify-center text-xs md:text-sm">⛳</div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-2xl font-black text-white tracking-tight uppercase leading-tight text-center">TWÓJ GOLF</span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-slate-500 px-2 py-0.5 rounded-full border border-white/10 whitespace-nowrap text-center">Zawodnik</span>
              </div>
            </div>

            {/* → */}
            <FlowArrow dir="right" />

            {/* 2. Twoje Statystyki */}
            <div className="flex md:flex-col flex-row items-center gap-1.5 md:gap-2 md:w-32 flex-shrink-0">
              <div className="h-10 md:h-28 flex items-center justify-center">
                <div className="w-9 h-9 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-2 ring-accent/20 shadow-2xl">
                  <ChartMockup />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-2xl font-black text-white tracking-tight uppercase leading-tight text-center">TWOJE STATYSTYKI</span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-slate-500 px-2 py-0.5 rounded-full border border-white/10 whitespace-nowrap text-center">Dane z gry</span>
              </div>
            </div>

            {/* → */}
            <FlowArrow dir="right" />

            {/* 3. CIĄGŁY ROZWÓJ — centrum: duży kontener z 4 kafelkami */}
            <div className="flex-shrink-0 bg-white/[0.07] backdrop-blur rounded-3xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-2 md:p-3">
              {/* Nagłówek — Analityka Pro-Data */}
              <div className="flex justify-center mb-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary/30 border border-accent/30">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                  </span>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-accent">Analityka Pro-Data</span>
                </div>
              </div>
              {/* Siatka 4 kafelków */}
              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                {[
                  { src: '/poprawa.png', alt: 'Poprawa wyników' },
                  { src: '/radosc.png',  alt: 'Radość z gry' },
                  { src: '/dbanie.png',  alt: 'Dbanie o zdrowie' },
                  { src: '/cele.png',    alt: 'Cele sportowe' },
                ].map(({ src, alt }) => (
                  <div key={src} className="w-16 h-12 md:w-40 md:h-32 rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                    <img src={src} alt={alt} className="w-full h-full object-cover"/>
                  </div>
                ))}
              </div>
              {/* Stopka — Ciągły Rozwój */}
              <div className="flex justify-center mt-1.5">
                <span className="text-[9px] font-bold tracking-widest uppercase text-accent/80 px-3 py-0.5 rounded-full bg-accent/10 border border-accent/20 whitespace-nowrap">CIĄGŁY ROZWÓJ</span>
              </div>
            </div>

            {/* ← */}
            <FlowArrow dir="left" />

            {/* 4. Plan Treningu */}
            <div className="flex md:flex-col flex-row items-center gap-1.5 md:gap-2 md:w-32 flex-shrink-0">
              <div className="h-10 md:h-28 flex items-center justify-center">
                <div className="w-9 h-9 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-2 ring-accent/20 shadow-2xl">
                  <PlannerMockup />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-2xl font-black text-white tracking-tight uppercase leading-tight text-center">PLAN TRENINGU</span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-slate-500 px-2 py-0.5 rounded-full border border-white/10 whitespace-nowrap text-center">Od trenera</span>
              </div>
            </div>

            {/* ← */}
            <FlowArrow dir="left" />

            {/* 5. Twój Trener */}
            <div className="flex md:flex-col flex-row items-center gap-1.5 md:gap-2 md:w-32 flex-shrink-0">
              <div className="h-10 md:h-28 flex items-center justify-center">
                <div className="relative">
                  <div className="w-9 h-9 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-white/20 shadow-2xl">
                    <img src={TRAINER_IMG} alt="Trener" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#1d262d] flex items-center justify-center text-xs md:text-sm">🏆</div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-2xl font-black text-white tracking-tight uppercase leading-tight text-center">TWÓJ TRENER</span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-slate-500 px-2 py-0.5 rounded-full border border-white/10 whitespace-nowrap text-center">Trener</span>
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${APP_REGISTER}?role=STUDENT`} target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-black rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(10,77,60,0.4)] flex items-center justify-center gap-2"
          >
            JESTEM GOLFISTĄ
          </a>
          <a
            href={`${APP_REGISTER}?role=TRAINER`} target="_blank" rel="noopener noreferrer"
            className={`w-full sm:w-auto px-8 py-4 ${glass} text-white font-black rounded-xl hover:bg-white/10 hover:scale-105 transition-all flex items-center justify-center gap-2`}
          >
            JESTEM TRENEREM
          </a>
        </div>

        {/* Statystyki */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 text-slate-400">
          {[['500+', 'aktywnych golfistów'], ['50+', 'certyfikowanych trenerów'], ['10k+', 'zapisanych rund']].map(
            ([n, l]) => (
              <div key={l} className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">{n}</span>
                <span className="text-sm mt-1">{l}</span>
              </div>
            )
          )}
        </div>
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
                className="inline-block px-8 py-3 bg-white text-dark font-bold rounded-lg hover:bg-accent transition-all"
              >
                ... to zacznij grać lepiej z GolfStats
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
                className="inline-block px-8 py-3 bg-accent text-dark font-bold rounded-lg hover:bg-white transition-all"
              >
                ... to zostań Trenerem GolfStats
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
            href="mailto:kontakt@golfstats.pl"
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
          <a href="#" className="hover:text-accent transition-colors">Polityka prywatności</a>
          <a href="#" className="hover:text-accent transition-colors">Regulamin</a>
          <a href="mailto:kontakt@golfstats.pl" className="hover:text-accent transition-colors">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased bg-[#1d262d] text-slate-100">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <DlaKogo />
        <Cennik />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
