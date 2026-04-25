import ObfuscatedEmail from '../ObfuscatedEmail'
import { useLanguage } from '../../i18n'

function PrivacyPolicyEN() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <h1 className="text-3xl font-black text-white">Privacy Policy</h1>
      <p className="text-sm text-slate-500">Last updated: March 2026</p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">1. Data Controller</h2>
        <p>The controller of your personal data is:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>EJDOS Patrycjusz Kowalski</strong></li>
          <li>ul. Parkowa 36, 83-330 Małkowo, Poland</li>
          <li>NIP: 5931343779 | REGON: 191245207</li>
          <li>E-mail: <ObfuscatedEmail /> | tel. +48 513 050 797</li>
        </ul>
        <p>The service is available at <strong>golfstats.pl</strong> and <strong>app.golfstats.pl</strong>.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">2. Data We Collect</h2>
        <p>When you use GolfStats we process the following data:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Registration data:</strong> email address, name, role (player / coach).</li>
          <li><strong>Profile data:</strong> gender, date of birth, city, phone, golf club, handicap, PZG category, training goals.</li>
          <li><strong>Game data:</strong> round scores, shot statistics (lie, distance, penalty), hole and course data.</li>
          <li><strong>Video material:</strong> training videos voluntarily uploaded by the user.</li>
          <li><strong>Messages:</strong> content of correspondence between player and coach within the app.</li>
          <li><strong>Technical data:</strong> IP address, browser type, access logs — for security and diagnostics.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">3. Purpose and Legal Basis</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Service provision</strong> (Art. 6(1)(b) GDPR) – account management, statistics analysis, coach–player communication.</li>
          <li><strong>Email sending</strong> (Art. 6(1)(b) GDPR) – account activity notifications, registration confirmation.</li>
          <li><strong>Legitimate interest</strong> (Art. 6(1)(f) GDPR) – system security, abuse detection, technical logs.</li>
          <li><strong>Consent</strong> (Art. 6(1)(a) GDPR) – direct marketing, if you give separate consent.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">4. Data Retention</h2>
        <p>We retain data for the duration of the contract (active account), and after termination for as long as required by law (up to 5 years for financial data) or until consent is withdrawn. You can delete your account data yourself within the app or by contacting us.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">5. Recipients</h2>
        <p>Your data may be shared only with trusted processors with whom we have a data processing agreement, or who are independent data controllers:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>PayU S.A.</strong> (ul. Grunwaldzka 186, 60-166 Poznań, NIP: 779-23-08-495) – electronic payments operator; PayU is an independent data controller for payment processing. Data transferred to PayU: name, email address, IP address.</li>
          <li><strong>Hostinger</strong> – server infrastructure (EU server).</li>
          <li><strong>Brevo (Sendinblue)</strong> – transactional email delivery.</li>
          <li><strong>Anthropic</strong> – processing voice transcripts for game analysis (data is pseudonymous, without user identifiers).</li>
        </ul>
        <p>We do not sell or share personal data with third parties for marketing purposes.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">6. Your Rights</h2>
        <p>Under GDPR you have the following rights:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Access</strong> to your data and to obtain a copy.</li>
          <li><strong>Rectification</strong> of inaccurate or incomplete data.</li>
          <li><strong>Erasure</strong> ("right to be forgotten").</li>
          <li><strong>Restriction of processing</strong> in certain circumstances.</li>
          <li><strong>Data portability</strong> to another controller.</li>
          <li><strong>Objection</strong> to processing based on legitimate interest.</li>
          <li><strong>Withdrawal of consent</strong> at any time without affecting the lawfulness of processing before withdrawal.</li>
        </ul>
        <p>Send requests to: <ObfuscatedEmail />. You also have the right to lodge a complaint with your national data protection authority.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">7. Cookies</h2>
        <p>GolfStats uses only essential cookies and localStorage to maintain user sessions and remember theme preferences (light/dark). We do not use third-party analytics or advertising cookies.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">8. Security</h2>
        <p>We use HTTPS (TLS) encryption, store passwords as cryptographic hashes (bcrypt), and restrict access to production data. Despite these technical and organisational measures we cannot guarantee absolute security on the internet.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">9. Policy Changes</h2>
        <p>We reserve the right to update this policy. We will notify you of significant changes by email or in-app notice. Continued use of the app after changes take effect constitutes acceptance.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">10. Contact</h2>
        <p>For privacy matters: <ObfuscatedEmail /></p>
      </section>
    </div>
  )
}

function PrivacyPolicyPL() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <h1 className="text-3xl font-black text-white">Polityka prywatności</h1>
      <p className="text-sm text-slate-500">Ostatnia aktualizacja: marzec 2026</p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">1. Administrator danych osobowych</h2>
        <p>Administratorem Twoich danych osobowych jest:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>EJDOS Patrycjusz Kowalski</strong></li>
          <li>ul. Parkowa 36, 83-330 Małkowo, Polska</li>
          <li>NIP: 5931343779 | REGON: 191245207</li>
          <li>E-mail: <ObfuscatedEmail /> | tel. +48 513 050 797</li>
        </ul>
        <p>Serwis dostępny jest pod adresem <strong>golfstats.pl</strong> i <strong>app.golfstats.pl</strong>.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">2. Jakie dane zbieramy</h2>
        <p>W trakcie korzystania z aplikacji GolfStats przetwarzamy następujące dane:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Dane rejestracyjne:</strong> adres e-mail, imię i nazwisko, rola (zawodnik / trener).</li>
          <li><strong>Dane profilowe:</strong> płeć, data urodzenia, miasto, telefon, klub golfowy, handicap, kategoria PZG, cele treningowe.</li>
          <li><strong>Dane z gry:</strong> wyniki rund, statystyki uderzeń (lie, odległość, kara), dane dołków i pól golfowych.</li>
          <li><strong>Materiały wideo:</strong> filmy z nagrań treningowych wgrywane dobrowolnie przez użytkownika.</li>
          <li><strong>Wiadomości:</strong> treść korespondencji pomiędzy zawodnikiem a trenerem w ramach aplikacji.</li>
          <li><strong>Dane techniczne:</strong> adres IP, typ przeglądarki, logi dostępu – na potrzeby bezpieczeństwa i diagnostyki.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">3. Cel i podstawa przetwarzania</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Świadczenie usług</strong> (art. 6 ust. 1 lit. b RODO) – prowadzenie konta, analiza statystyk, komunikacja trener–zawodnik.</li>
          <li><strong>Wysyłka e-maili</strong> (art. 6 ust. 1 lit. b RODO) – powiadomienia o aktywności konta, potwierdzenie rejestracji.</li>
          <li><strong>Prawnie uzasadniony interes</strong> (art. 6 ust. 1 lit. f RODO) – bezpieczeństwo systemu, wykrywanie nadużyć, logi techniczne.</li>
          <li><strong>Zgoda</strong> (art. 6 ust. 1 lit. a RODO) – marketing bezpośredni, jeżeli wyrazisz na to odrębną zgodę.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">4. Okres przechowywania danych</h2>
        <p>Dane przechowujemy przez czas trwania umowy (aktywnego konta), a po jej rozwiązaniu przez okres wymagany przepisami prawa (do 5 lat w przypadku danych finansowych) lub do czasu cofnięcia zgody. Dane konta możesz usunąć samodzielnie z poziomu aplikacji lub kontaktując się z nami.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">5. Odbiorcy danych</h2>
        <p>Twoje dane mogą być przekazywane wyłącznie zaufanym podmiotom przetwarzającym, z którymi zawarliśmy umowę powierzenia lub które są odrębnymi administratorami danych:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>PayU S.A.</strong> (ul. Grunwaldzka 186, 60-166 Poznań, NIP: 779-23-08-495) – operator płatności elektronicznych; PayU jest odrębnym Administratorem Danych Osobowych w zakresie realizacji płatności. Dane przekazywane PayU: imię, nazwisko, adres e-mail, adres IP.</li>
          <li><strong>Hostinger</strong> – infrastruktura serwerowa (serwer w UE).</li>
          <li><strong>Brevo (Sendinblue)</strong> – wysyłka e-maili transakcyjnych.</li>
          <li><strong>Anthropic</strong> – przetwarzanie transkryptów głosowych w celu analizy wyników (dane są pseudoanonimowe, bez danych identyfikacyjnych użytkownika).</li>
        </ul>
        <p>Nie sprzedajemy ani nie udostępniamy danych osobom trzecim w celach marketingowych.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">6. Twoje prawa</h2>
        <p>Zgodnie z RODO przysługują Ci następujące prawa:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Dostęp</strong> do Twoich danych oraz uzyskanie ich kopii.</li>
          <li><strong>Sprostowanie</strong> nieprawidłowych lub niekompletnych danych.</li>
          <li><strong>Usunięcie</strong> danych („prawo do bycia zapomnianym").</li>
          <li><strong>Ograniczenie przetwarzania</strong> w określonych przypadkach.</li>
          <li><strong>Przenoszenie</strong> danych do innego administratora.</li>
          <li><strong>Sprzeciw</strong> wobec przetwarzania opartego na prawnie uzasadnionym interesie.</li>
          <li><strong>Cofnięcie zgody</strong> w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania przed cofnięciem.</li>
        </ul>
        <p>Wnioski kieruj na adres: <ObfuscatedEmail />. Masz również prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">7. Pliki cookies</h2>
        <p>Aplikacja GolfStats korzysta wyłącznie z niezbędnych plików cookies i localStorage służących do utrzymania sesji użytkownika oraz zapamiętania preferencji motywu (jasny/ciemny). Nie stosujemy plików cookies analitycznych ani reklamowych podmiotów trzecich.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">8. Bezpieczeństwo</h2>
        <p>Stosujemy szyfrowanie HTTPS (TLS), hasła przechowujemy w formie skrótów kryptograficznych (bcrypt), a dostęp do danych produkcyjnych jest ograniczony. Mimo stosowania środków technicznych i organizacyjnych nie możemy zagwarantować absolutnego bezpieczeństwa w internecie.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">9. Zmiany polityki</h2>
        <p>Zastrzegamy prawo do zmiany niniejszej polityki. O istotnych zmianach poinformujemy e-mailem lub komunikatem w aplikacji. Korzystanie z aplikacji po wejściu w życie zmian oznacza ich akceptację.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">10. Kontakt</h2>
        <p>W sprawach dotyczących prywatności: <ObfuscatedEmail /></p>
      </section>
    </div>
  )
}

export default function PrivacyPolicy() {
  const { lang } = useLanguage()
  return lang === 'en' ? <PrivacyPolicyEN /> : <PrivacyPolicyPL />
}
