import { useState } from 'react'

export default function CookieBanner() {
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
