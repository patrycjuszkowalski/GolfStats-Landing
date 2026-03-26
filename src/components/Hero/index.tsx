import CyclingQuestions from './CyclingQuestions'

const HERO_BG = '/hero-bg.webp'

function FlowArrow({ dir }: { dir: 'right' | 'left' }) {
  const isRight = dir === 'right'
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

function ChartMockup() {
  return (
    <svg viewBox="0 0 96 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" fill="#0d1f1a"/>
      {[20, 36, 52, 68].map(y => (
        <line key={y} x1="10" y1={y} x2="86" y2={y} stroke="#2bff00" strokeWidth="0.3" opacity="0.15"/>
      ))}
      {[
        { x: 14, h: 28, o: '0.5' },
        { x: 28, h: 42, o: '0.7' },
        { x: 42, h: 32, o: '0.6' },
        { x: 56, h: 52, o: '0.85' },
        { x: 70, h: 46, o: '0.75' },
      ].map(({ x, h, o }) => (
        <rect key={x} x={x} y={80 - h} width="10" height={h} rx="2" fill="#2bff00" opacity={o}/>
      ))}
      <polyline
        points="19,52 33,38 47,48 61,28 75,34"
        stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round" opacity="0.7"
      />
      {[19,52, 33,38, 47,48, 61,28, 75,34].reduce<number[][]>((acc, _, i, arr) =>
        i % 2 === 0 ? [...acc, [arr[i], arr[i+1]]] : acc, []
      ).map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="white" opacity="0.85"/>
      ))}
      <text x="48" y="11" textAnchor="middle" fill="#2bff00" fontSize="7" fontWeight="bold" opacity="0.9">STATYSTYKI</text>
    </svg>
  )
}

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
      {tasks.map((t, i) => {
        const y = 32 + i * 16
        return (
          <g key={t.label}>
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
            <text x="25" y={y+2} fill={t.done ? 'white' : '#64748b'} fontSize="6.5" opacity={t.done ? 0.9 : 0.6}>
              {t.label}
            </text>
          </g>
        )
      })}
      <rect x="10" y="80" width="76" height="5" rx="2.5" fill="white" opacity="0.1"/>
      <rect x="10" y="80" width="38" height="5" rx="2.5" fill="#2bff00" opacity="0.7"/>
      <text x="48" y="93" textAnchor="middle" fill="#2bff00" fontSize="6" opacity="0.7">50% ukończone</text>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d262d]/60 via-[#1d262d]/80 to-[#1d262d] z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-6">
        <div className="mb-8 mt-4 md:mt-6 bg-white/[0.05] backdrop-blur-md border border-white/[0.1] rounded-3xl px-5 py-7 md:px-10 md:py-10 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">

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

            <FlowArrow dir="right" />

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
                  { src: '/poprawa.webp', alt: 'Poprawa wyników' },
                  { src: '/radosc.webp',  alt: 'Radość z gry' },
                  { src: '/dbanie.webp',  alt: 'Dbanie o zdrowie' },
                  { src: '/cele.webp',    alt: 'Cele sportowe' },
                ].map(({ src, alt }) => (
                  <div key={src} className="aspect-[4/3] md:w-44 md:h-36 rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-2">
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-accent/80 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 whitespace-nowrap">CIĄGŁY ROZWÓJ</span>
              </div>
            </div>

            <FlowArrow dir="left" />

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
        </div>

        <CyclingQuestions />
        <p className="mb-10 max-w-2xl mx-auto text-center">
          <span className="block text-white font-semibold text-xl md:text-2xl mb-1">Zmień sposób, w jaki trenujesz!</span>
          <span className="block text-accent font-black tracking-widest uppercase text-2xl md:text-3xl">Sprawdź naszą aplikację</span>
        </p>
      </div>
    </section>
  )
}
