import ObfuscatedEmail from '../ObfuscatedEmail'
import { useLanguage } from '../../i18n'

export default function ContactPage() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <h1 className="text-3xl font-black text-white">{en ? 'Contact' : 'Kontakt'}</h1>

      <section className="space-y-4">
        <p className="text-lg text-slate-300">
          {en
            ? 'Have questions about the app, your account, or partnership? Write to us — we reply within 1–2 business days.'
            : 'Masz pytania dotyczące aplikacji, swojego konta lub współpracy? Napisz do nas — odpowiadamy w ciągu 1–2 dni roboczych.'}
        </p>

        <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 space-y-2">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">
            {en ? 'Service operator' : 'Operator serwisu'}
          </p>
          <p className="text-white font-semibold">EJDOS Patrycjusz Kowalski</p>
          <p className="text-slate-400 text-sm">ul. Parkowa 36, 83-330 Małkowo{en ? ', Poland' : ''}</p>
          <p className="text-slate-400 text-sm">NIP: 5931343779 | REGON: 191245207</p>
          <p className="text-slate-400 text-sm">tel. +48 513 050 797</p>
          <p className="text-sm pt-1"><ObfuscatedEmail /></p>
        </div>

        <p className="text-sm text-slate-500">
          {en ? (
            <>Before writing, please read our{' '}
              <a href="#/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>
              {' '}and{' '}
              <a href="#/terms-of-service" className="text-accent hover:underline">Terms of Service</a>.
            </>
          ) : (
            <>Przed napisaniem zapoznaj się z naszą{' '}
              <a href="#/polityka-prywatnosci" className="text-accent hover:underline">Polityką prywatności</a>
              {' '}i{' '}
              <a href="#/regulamin" className="text-accent hover:underline">Regulaminem</a>.
            </>
          )}
        </p>
      </section>
    </div>
  )
}
