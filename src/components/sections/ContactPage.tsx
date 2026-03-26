import ObfuscatedEmail from '../ObfuscatedEmail'

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <h1 className="text-3xl font-black text-white">Kontakt</h1>

      <section className="space-y-4">
        <p className="text-lg text-slate-300">
          Masz pytania dotyczące aplikacji, swojego konta lub współpracy? Napisz do nas — odpowiadamy w ciągu 1–2 dni roboczych.
        </p>

        <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 space-y-2">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">Operator serwisu</p>
          <p className="text-white font-semibold">EJDOS Patrycjusz Kowalski</p>
          <p className="text-slate-400 text-sm">ul. Parkowa 36, 83-330 Małkowo</p>
          <p className="text-slate-400 text-sm">NIP: 5931343779 | REGON: 191245207</p>
          <p className="text-slate-400 text-sm">tel. +48 513 050 797</p>
          <p className="text-sm pt-1"><ObfuscatedEmail /></p>
        </div>

        <p className="text-sm text-slate-500">
          Przed napisaniem zapoznaj się z naszą{' '}
          <a href="#/polityka-prywatnosci" className="text-accent hover:underline">Polityką prywatności</a>
          {' '}i{' '}
          <a href="#/regulamin" className="text-accent hover:underline">Regulaminem</a>.
        </p>
      </section>
    </div>
  )
}
