import { useState, useEffect } from 'react'

const QUESTIONS = [
  'Kochasz grać w golfa?',
  'Cieszysz się każdą chwilą spędzoną na polu?',
  'Zależy Ci na poprawie wyników?',
  'Chcesz grać nie martwiąc się o kontuzje?',
]

export default function CyclingQuestions() {
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
      <div className="flex gap-2">
        {QUESTIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setVisible(false); setTimeout(() => { setIdx(i); setVisible(true) }, 400) }}
            aria-label={`Pytanie ${i + 1}`}
            className="flex items-center justify-center"
            style={{ minWidth: 28, minHeight: 28, background: 'transparent' }}
          >
            <span className="transition-all duration-300 rounded-full" style={{
              width: i === idx ? 24 : 8,
              height: 8,
              display: 'block',
              background: i === idx ? '#2bff00' : 'rgba(255,255,255,0.2)',
              boxShadow: i === idx ? '0 0 8px #2bff00' : 'none',
            }} />
          </button>
        ))}
      </div>
    </div>
  )
}
