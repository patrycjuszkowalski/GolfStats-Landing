import { useState, Fragment, type ReactNode } from 'react'
import { glass } from '../../constants'
import { useLanguage } from '../../i18n'

function IconScore() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="2" width="19" height="24" rx="2.5" fill="#2bff00" fillOpacity="0.12" stroke="#2bff00" strokeWidth="1.5" strokeOpacity="0.65"/>
      <line x1="7" y1="8"  x2="18" y2="8"  stroke="#2bff00" strokeWidth="1.1" strokeOpacity="0.45"/>
      <line x1="7" y1="12" x2="18" y2="12" stroke="#2bff00" strokeWidth="1.1" strokeOpacity="0.45"/>
      <line x1="7" y1="16" x2="13" y2="16" stroke="#2bff00" strokeWidth="1.1" strokeOpacity="0.45"/>
      <path d="M21 19 L30 10 L28 8 L19 17 Z" fill="#2bff00" fillOpacity="0.75"/>
      <path d="M19 17 L18 21 L22 20 Z" fill="#2bff00" fillOpacity="0.5"/>
      <line x1="28" y1="8" x2="30" y2="10" stroke="#2bff00" strokeWidth="1.5" strokeOpacity="0.9"/>
      <circle cx="27" cy="28" r="4.5" fill="#2bff00" fillOpacity="0.15" stroke="#2bff00" strokeWidth="1" strokeOpacity="0.5"/>
      <path d="M25,26.5 Q25,24.5 27,24.5 Q29,24.5 29,26.5 L29,28 Q29,30 27,30 Q25,30 25,28 Z" fill="#2bff00" fillOpacity="0.7"/>
      <line x1="27" y1="30" x2="27" y2="32" stroke="#2bff00" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.7"/>
    </svg>
  )
}

function IconAnalysis() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3"  y="20" width="5" height="12" rx="1.5" fill="#2bff00" fillOpacity="0.35"/>
      <rect x="10" y="14" width="5" height="18" rx="1.5" fill="#2bff00" fillOpacity="0.55"/>
      <rect x="17" y="9"  width="5" height="23" rx="1.5" fill="#2bff00" fillOpacity="0.75"/>
      <rect x="24" y="4"  width="5" height="28" rx="1.5" fill="#2bff00" fillOpacity="0.95"/>
      <polyline points="5.5,19 12.5,13 19.5,8 26.5,3" stroke="#2bff00" strokeWidth="1.8" fill="none" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round"/>
      {([[5.5,19],[12.5,13],[19.5,8],[26.5,3]] as [number,number][]).map(([x,y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#2bff00" fillOpacity="0.9"/>
      ))}
    </svg>
  )
}

function IconCoach() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="2" width="22" height="16" rx="4" fill="#2bff00" fillOpacity="0.2" stroke="#2bff00" strokeWidth="1.5" strokeOpacity="0.7"/>
      <path d="M5,18 L3,23 L9,18 Z" fill="#2bff00" fillOpacity="0.4"/>
      <circle cx="7"  cy="10" r="1.8" fill="#2bff00" fillOpacity="0.7"/>
      <circle cx="12" cy="10" r="1.8" fill="#2bff00" fillOpacity="0.7"/>
      <circle cx="17" cy="10" r="1.8" fill="#2bff00" fillOpacity="0.7"/>
      <rect x="12" y="19" width="20" height="13" rx="3.5" fill="#2bff00" fillOpacity="0.12" stroke="#2bff00" strokeWidth="1.2" strokeOpacity="0.5"/>
      <path d="M29,32 L31,34 L27,32 Z" fill="#2bff00" fillOpacity="0.3"/>
      <line x1="16" y1="24" x2="28" y2="24" stroke="#2bff00" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="16" y1="28" x2="24" y2="28" stroke="#2bff00" strokeWidth="1" strokeOpacity="0.4"/>
    </svg>
  )
}

function IconTraining() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="26" height="24" rx="3" fill="#2bff00" fillOpacity="0.1" stroke="#2bff00" strokeWidth="1.5" strokeOpacity="0.6"/>
      <rect x="2" y="5" width="26" height="7" rx="3" fill="#2bff00" fillOpacity="0.2"/>
      <line x1="2" y1="12" x2="28" y2="12" stroke="#2bff00" strokeWidth="0.8" strokeOpacity="0.4"/>
      <line x1="9"  y1="2" x2="9"  y2="8" stroke="#2bff00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8"/>
      <line x1="21" y1="2" x2="21" y2="8" stroke="#2bff00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8"/>
      <path d="M7,17 L9,20 L13,15"  stroke="#2bff00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9"/>
      <path d="M17,17 L19,20 L23,15" stroke="#2bff00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9"/>
      <path d="M7,24 L9,27 L13,22"  stroke="#2bff00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9"/>
      <rect x="17" y="22" width="6" height="5" rx="1" fill="none" stroke="#2bff00" strokeWidth="1" strokeOpacity="0.3"/>
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

const FEATURES_PL: Feature[] = [
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
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Ile razy będąc na Drivingu czy na Chippingu nie wiedziałeś dlaczego oddawane strzały nie lądują tam gdzie powinny, dlaczego grasz slice czy pull?</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Jak dobrze byłoby mieć koło siebie trenera, który spojrzy swoim fachowym okiem i skoryguje Twoje błędy.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Dzięki GolfStats <span className="text-accent font-medium">masz możliwość komunikowania się z Trenerem</span> na kilka sposobów. Możesz pisać z nim wiadomości w uporządkowanych wątkach tematycznych, możesz nagrać filmik jak uderzasz i otrzymasz od Trenera wskazówki co do Twojego swingu. <span className="text-accent font-medium">To wszystko w jednym miejscu, uporządkowane, z pełną historią wysyłanych wiadomości.</span></p>
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
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Ty wprowadzasz dane <i>(rozegrane rundy, wiadomości i filmiki)</i> a <span className="text-accent font-medium">Trener na bazie tych informacji wspólnie z Tobą</span> planuje efektywny i skuteczny plan poprawy Twojej gry. Nie musisz być ekspertem w analizie danych — zostaw to naszym Trenerom, oni wiedzą jak analizować Twoją grę i jak sprawić, aby była skuteczniejsza.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Trener widzi i analizuje Twoje dane, jest w stanie dostrzec <span className="text-accent font-medium">Twoje mocne oraz słabe strony</span>. Dzięki dostępowi do GolfStats może zaplanować sesje treningowe <span className="text-accent font-medium">precyzyjnie dopasowane do Twoich potrzeb i celów treningowych.</span></p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Trener <span className="text-accent font-medium">może przesłać Ci wskazówki odnośnie treningu</span>, podesłać własny film instruktażowy czy umówić się z Tobą na indywidualną sesję treningową na polu golfowym lub Driving Range. Ty masz <span className="text-accent font-medium">możliwość przesłania Trenerowi swoich postępów i uwag</span> co do wprowadzanych zmian i realizowanego treningu.</p>
    </>,
    cta: 'Zaplanuj trening',
    images: ['/Plan_Treningu.webp'],
  },
]

const FEATURES_EN: Feature[] = [
  {
    Icon: IconScore,
    title: <>Easy Round<br/>Score Entry</>,
    desc: <>Easily record data from your Tournament and Practice rounds played on courses. You can do it manually or <span className="text-accent font-medium">dictate your scores by voice</span> in the App. This data will be used to analyse your game and plan your further development.</>,
    headline: ['No more tedious', 'score entry'],
    subheadline: 'GolfStats takes care of it for you.',
    body: <>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">None of us enjoy entering rounds. Even writing scores on a Scorecard can be a hassle — let alone in an app.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Without accurate and reliable data, however, you can't plan effective training that will actually improve your scores in future rounds.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">In GolfStats <span className="text-accent font-medium">you enter scores manually or dictate them by voice</span>. Our AI takes care of the rest — converting your words into full hole-by-hole statistics.</p>
    </>,
    cta: 'Try AI for free',
    images: ['/Rundy_nagrywanie_mowy.webp', '/Rundy_3_telefony.webp'],
  },
  {
    Icon: IconAnalysis,
    title: <>Precise Analysis<br/>of Your Game</>,
    desc: <>Statistics and progress analysis — especially <span className="text-accent font-medium">what has changed in your game</span> compared to previous rounds. FIR, GIR, Putts Gained, Up&amp;Down and Sand Saves for every round. <span className="text-accent font-medium">Full insight</span> into every hole, every round, and a comprehensive overview of your game.</>,
    headline: ['Statistical data is the', 'foundation of planning'],
    subheadline: 'GolfStats helps you prepare it',
    images: ['/Analiza_gry_1.webp', '/Analiza_gry_2.webp'],
    imagesLeft: true,
    body: <>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Data, data, and more data — but what does it all mean? The sheer volume of information can be overwhelming.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">That's why <span className="text-accent font-medium">we've prepared the most important stats</span> for each player and made them available to Coaches. They will help you plan your training, showing which elements are <span className="text-accent font-medium">your strengths</span> and which <span className="text-accent font-medium">need to be addressed first</span>.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">GolfStats uses your entered data to generate all key statistics, tables and charts. Together with your Coach you'll be able to set and plan your golf development.</p>
    </>,
    cta: 'See statistics',
  },
  {
    Icon: IconCoach,
    title: <>Fast Communication<br/>Coach – Player</>,
    desc: <>You can <span className="text-accent font-medium">communicate with your Coach directly in the App</span>. Your coach sees your messages, attached videos, and recorded rounds in real time. Stay in touch with your Coach and get game feedback — all in one place.</>,
    headline: ['Your coach always', 'close to you'],
    subheadline: 'GolfStats organises communication',
    images: ['/Komunikacja.webp'],
    imagesLeft: true,
    body: <>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">How many times at the Driving Range or Chipping area did you wonder why your shots aren't landing where they should — why you're hitting a slice or a pull?</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Wouldn't it be great to have a coach right there who can take a professional look and correct your mistakes?</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">With GolfStats <span className="text-accent font-medium">you can communicate with your Coach</span> in several ways. Send messages in organised topic threads, record a video of your swing and receive feedback on your technique. <span className="text-accent font-medium">All in one place, organised, with a full message history.</span></p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">You and your Coach see all text messages and videos in real time. <span className="text-accent font-medium">You stay in constant contact with your Coach</span> and get instant game feedback — without ever leaving the app.</p>
    </>,
    cta: 'Connect with a coach',
  },
  {
    Icon: IconTraining,
    title: <>Game Correction<br/>Training Planning</>,
    desc: 'Thanks to statistics and your Coach\'s access to your scores, you can together plan effective training. Broad statistical data allows you to focus training exactly where it will have the greatest impact on your game.',
    headline: ['Training where', 'it makes the most sense'],
    subheadline: 'GolfStats — data-driven planning.',
    body: <>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">You enter the data <i>(rounds played, messages and videos)</i> and <span className="text-accent font-medium">your Coach uses that information together with you</span> to build an effective improvement plan. You don't need to be a data expert — leave that to our Coaches, who know how to analyse your game and make it more effective.</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">The Coach sees and analyses your data, identifying <span className="text-accent font-medium">your strengths and weaknesses</span>. With access to GolfStats they can plan training sessions <span className="text-accent font-medium">precisely tailored to your needs and training goals.</span></p>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">Your Coach <span className="text-accent font-medium">can send you training tips</span>, share an instructional video, or schedule an individual session on the golf course or Driving Range. You can <span className="text-accent font-medium">send your Coach progress updates and feedback</span> on the changes you're making and the training you're completing.</p>
    </>,
    cta: 'Plan your training',
    images: ['/Plan_Treningu.webp'],
  },
]

export default function Features() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const { lang } = useLanguage()
  const en = lang === 'en'

  const FEATURES = en ? FEATURES_EN : FEATURES_PL

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
          {en ? 'App Features' : 'Funkcje Aplikacji'}
        </h2>
        <h3 className="text-1xl font-black text-white mb-4 uppercase tracking-tighter">
          {en ? 'Simple and functional' : 'Prostota i funkcjonalność'}
        </h3>
        <div className="w-20 h-1.5 bg-accent" />
      </div>

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
                  ? <><span>{en ? 'Collapse' : 'Zwiń'}</span><span className="text-xs">▲</span></>
                  : <><span>{en ? 'Learn more' : 'Zobacz więcej'}</span><span className="text-xs text-accent">▼</span></>}
              </button>
            </div>

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
                      {en ? 'Collapse ▲' : 'Zwiń ▲'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>

      {active && (
        <div id="feature-panel" className="hidden lg:block mt-6 max-w-3xl bg-[#0d1f1a] border border-accent/25 rounded-3xl overflow-hidden">

          {active.images?.length ? (
            <div className="grid grid-cols-[2fr_3fr]">

              {active.imagesLeft ? (
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
                        {en ? 'Collapse ▲' : 'Zwiń ▲'}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
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
                        {en ? 'Collapse ▲' : 'Zwiń ▲'}
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

              <div className="col-span-2 flex justify-center px-8 pb-8 bg-[#0d1f1a]">
                <img
                  src={active.images[1]}
                  alt=""
                  className="w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>

          ) : (
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
                  {en ? 'Collapse ▲' : 'Zwiń ▲'}
                </button>
              </div>
            </div>
          )}

        </div>
      )}
    </section>
  )
}
