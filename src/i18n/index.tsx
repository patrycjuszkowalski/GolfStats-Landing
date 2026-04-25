import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'pl' | 'en'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LangCtx>({ lang: 'pl', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang
    if (saved === 'pl' || saved === 'en') return saved
    return navigator.language.startsWith('en') ? 'en' : 'pl'
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const handleSetLang = (l: Lang) => {
    setLang(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
