import { useState, Fragment, type ReactNode } from 'react'
import { glass } from '../../constants'

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

type Feature = {
  Icon: () => JSX.Element
  title: ReactNode
  desc: ReactNode
  headline: [string, string]
  subheadline: string
  body: ReactNode
  cta: string
  images?: string[]
  imagesLeft?: boolean
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
    images: ['/Rundy_nagrywanie_mowy.webp', '/Rundy_3_telefony.webp'],
  },
  {
    Icon: IconAnalysis,
    title: <>Precyzyjna Analiza<br/>Twojej Gry</>,
    desc: <>Statystyki i analiza postępów gry w szczególności <span className="text-accent font-medium">co się zmieniło w Twojej grze</span> w porównaniu z poprzednimi rundami. Dane FIR, GIR, Putts Gained, Up&amp;Down i Sand Saves dla każdej rundy. <span className="text-accent font-medium">Pełny wgląd</span> w każdy dołek, w każdą rundę oraz kompleksowa analiza Twojej gry.</>,
    headline: ['Dane statystyczne to fundament planowania', ''],
    subheadline: 'GolfStats pomoże je przygotować',
    images: ['/Analiza_gry_1.webp', '/Analiza_gry_2.webp'],
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
    images: ['/Komunikacja.webp'],
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
    images: ['/Plan_Treningu.webp'],
  },
]

export default function Features() {
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
                    <img src={f.images[0]} alt="" className="w-full max-w-xs mx-auto drop-shadow-[0_8px_24px_rgba(43,255,0,0.2)]" loading="lazy" />
                  )}
                  {f.images?.[1] && (
                    <img src={f.images[1]} alt="" className="w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]" loading="lazy" />
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
