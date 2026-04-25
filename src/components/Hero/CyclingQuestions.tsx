import { useState, useEffect } from 'react'
import { useLanguage } from '../../i18n'

const QUESTIONS_PL = [
  'Kochasz grać w golfa?',
  'Cieszysz się każdą chwilą spędzoną na polu?',
  'Zależy Ci na poprawie wyników?',
  'Chcesz grać nie martwiąc się o kontuzje?',
]

const QUESTIONS_EN = [
  'Do you love playing golf?',
  'Do you enjoy every moment on the course?',
  'Do you want to improve your game?',
  'Do you want to play without worrying about injuries?',
]

export default function CyclingQuestions() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const { lang } = useLanguage()

  const questions = lang === 'en' ? QUESTIONS_EN : QUESTIONS_PL

  useEffect(() => {
    setIdx(0)
    setVisible(true)
  }, [lang])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % questions.length)
        setVisible(true)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [questions.length])

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
          {questions[idx]}
        </p>
      </div>
      <div className="flex gap-2">
        {questions.map((_, i) => (
          <button
            key={i}
            onClick={() => { setVisible(false); setTimeout(() => { setIdx(i); setVisible(true) }, 400) }}
            aria-label={`Question ${i + 1}`}
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
