import ObfuscatedEmail from '../ObfuscatedEmail'

export default function PrivacyPolicy() {
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
