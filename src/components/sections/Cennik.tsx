import { useState } from 'react'
import { glass, APP_REGISTER } from '../../constants'
import CheckIcon from '../CheckIcon'

const PRICES = {
  start: { monthly: { promo: 19, standard: 29 }, annual: { promo: 199, standard: 299 } },
  full:  { monthly: { promo: 29, standard: 39 }, annual: { promo: 299, standard: 399 } },
}

export default function Cennik() {
  const [annual, setAnnual] = useState(false)

  const startP = annual ? PRICES.start.annual : PRICES.start.monthly
  const fullP  = annual ? PRICES.full.annual  : PRICES.full.monthly
  const suffix = annual ? '/rok' : '/mies.'

  return (
    <section id="cennik" className="py-10 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">
          Wybierz swój plan treningowy
        </h2>
        <p className="text-slate-400 mb-8">Wybierz plan, który odpowiada Twoim potrzebom.</p>

        {/* Toggle miesięcznie / rocznie */}
        <div className="inline-flex rounded-xl border border-white/10 overflow-hidden">
          <button
            onClick={() => setAnnual(false)}
            className={`px-6 py-2.5 text-sm font-semibold transition-colors ${
              !annual ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Miesięcznie
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-6 py-2.5 text-sm font-semibold transition-colors flex items-center gap-2 ${
              annual ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Rocznie
            <span className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full font-bold">
              Oszczędzasz
            </span>
          </button>
        </div>
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
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-black text-white">{startP.promo} zł</span>
            <span className="text-slate-400">{suffix}</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-slate-500 line-through text-sm">{startP.standard} zł</span>
            <span className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full font-bold">Promocja</span>
          </div>
          {annual && (
            <p className="text-slate-400 text-xs mb-1">= {Math.round(startP.promo / 12)} zł/mies.</p>
          )}
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
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-black text-white">{fullP.promo} zł</span>
            <span className="text-slate-400">{suffix}</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-slate-500 line-through text-sm">{fullP.standard} zł</span>
            <span className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full font-bold">Promocja</span>
          </div>
          {annual && (
            <p className="text-slate-400 text-xs mb-1">= {Math.round(fullP.promo / 12)} zł/mies.</p>
          )}
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
