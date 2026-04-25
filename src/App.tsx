import { useState, useEffect, lazy, Suspense, type ReactNode } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import { LanguageProvider } from './i18n'

const Features     = lazy(() => import('./components/sections/Features'))
const DlaKogo      = lazy(() => import('./components/sections/DlaKogo'))
const Cennik       = lazy(() => import('./components/sections/Cennik'))
const CTASection   = lazy(() => import('./components/sections/CTASection'))
const PrivacyPolicy   = lazy(() => import('./components/sections/PrivacyPolicy'))
const TermsOfService  = lazy(() => import('./components/sections/TermsOfService'))
const ContactPage     = lazy(() => import('./components/sections/ContactPage'))

function AppInner() {
  const [page, setPage] = useState<'home' | 'privacy' | 'terms' | 'contact'>('home')

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash
      if (h === '#/polityka-prywatnosci' || h === '#/privacy-policy') setPage('privacy')
      else if (h === '#/regulamin' || h === '#/terms-of-service') setPage('terms')
      else if (h === '#/kontakt' || h === '#/contact') setPage('contact')
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

  if (page === 'privacy') return shell(<Suspense fallback={<div />}><PrivacyPolicy /></Suspense>)
  if (page === 'terms') return shell(<Suspense fallback={<div />}><TermsOfService /></Suspense>)
  if (page === 'contact') return shell(<Suspense fallback={<div />}><ContactPage /></Suspense>)

  return shell(
    <>
      <Hero />
      <Suspense fallback={<div />}><Features /></Suspense>
      <Suspense fallback={<div />}><DlaKogo /></Suspense>
      <Suspense fallback={<div />}><Cennik /></Suspense>
      <Suspense fallback={<div />}><CTASection /></Suspense>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  )
}
