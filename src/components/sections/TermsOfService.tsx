import ObfuscatedEmail from '../ObfuscatedEmail'
import { useLanguage } from '../../i18n'

function TermsEN() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <h1 className="text-3xl font-black text-white">GolfStats Terms of Service</h1>
      <p className="text-sm text-slate-500">Last updated: March 2026</p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§1. Service Provider Details</h2>
        <p>The service provider and operator of the Service is:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Name:</strong> EJDOS Patrycjusz Kowalski</li>
          <li><strong>Address:</strong> ul. Parkowa 36, 83-330 Małkowo, Poland</li>
          <li><strong>NIP:</strong> 5931343779</li>
          <li><strong>REGON:</strong> 191245207</li>
          <li><strong>E-mail:</strong> kontakt@golfstats.pl</li>
          <li><strong>Phone:</strong> +48 513 050 797</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§2. Definitions</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Service</strong> – the web application available at app.golfstats.pl together with the website golfstats.pl.</li>
          <li><strong>User</strong> – an individual using the Service after creating an Account.</li>
          <li><strong>Player</strong> – a User using the round tracking and statistics features.</li>
          <li><strong>Coach</strong> – a User using the player management and training planning features.</li>
          <li><strong>Account</strong> – an individual password-protected User account.</li>
          <li><strong>Plan</strong> – the selected access package for Service features (FREE, START or FULL).</li>
          <li><strong>Digital content</strong> – access to Service features under a selected Premium Plan, provided electronically.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§3. Scope of Services and Offer</h2>
        <p>GolfStats provides electronic services consisting of:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>recording and analysing golf round results (shot statistics, handicap, comparisons),</li>
          <li>communication between Player and Coach (messages, video, training plans),</li>
          <li>voice round entry using AI technology,</li>
          <li>storing game data and video material.</li>
        </ul>
        <p>A detailed description and pricing of available plans (FREE, START, FULL) is available at golfstats.pl in the Pricing section. The service is provided in Polish and prices are in PLN.</p>
        <p><strong>Order fulfilment time:</strong> Access to a paid Premium Plan is activated immediately (within a maximum of 24 hours of payment being confirmed) and lasts for the paid billing period (monthly or annual).</p>
        <p><strong>Technical protection measures for digital content:</strong> Access to the Service requires login to an individual password-protected account. Digital content is linked to the User's account and may not be transferred to other accounts or devices in an unauthorised manner.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§4. Registration and Account</h2>
        <p>4.1. Using the Service requires creating an Account. Registration is free.</p>
        <p>4.2. The User undertakes to provide accurate data and keep it up to date.</p>
        <p>4.3. The User is responsible for keeping their password confidential and for all actions taken from their Account.</p>
        <p>4.4. It is prohibited to create Accounts on behalf of other people without their consent or to create fictitious accounts.</p>
        <p>4.5. One User may hold only one active Account.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§5. Plans and Payments</h2>
        <p>5.1. The Service offers a Free Plan (FREE) with limited features and paid plans START and FULL with extended access.</p>
        <p>5.2. Prices and scope of Plans are set out in the Pricing section at golfstats.pl. The Provider reserves the right to change pricing with 30 days' notice.</p>
        <p>5.3. Payments for Premium Plans are made in advance for the selected billing period via payment operator <strong>PayU S.A.</strong> based in Poznań (ul. Grunwaldzka 186, 60-166 Poznań), a national payment institution supervised by the KNF. By clicking "Order and pay" the User places an order with an obligation to pay.</p>
        <p>5.4. VAT invoices are issued on request after the User provides billing details to <ObfuscatedEmail />.</p>
        <p>5.5. For monthly subscriptions access renews every 30 days, for annual every 365 days, unless the User cancels before the renewal date.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§6. Withdrawal and Refunds</h2>
        <p>6.1. A User who is a consumer has the right to withdraw from the contract within <strong>14 days</strong> of its conclusion without giving a reason.</p>
        <p>6.2. <strong>Exception for digital content:</strong> The right of withdrawal expires if the User has given explicit consent to begin delivery of the digital service before the withdrawal period expires and has acknowledged that they thereby lose the right of withdrawal (Art. 38(13) of the Consumer Rights Act).</p>
        <p>6.3. A withdrawal statement must be sent electronically to <ObfuscatedEmail /> or by post to: EJDOS Patrycjusz Kowalski, ul. Parkowa 36, 83-330 Małkowo, Poland.</p>
        <p>6.4. In the event of a valid withdrawal the Provider refunds the payment within 14 days of receiving the statement, to the bank account from which payment was made.</p>
        <p>6.5. As the Service provides only digital content (electronic services), return of a physical product does not apply. The User does not bear any return costs.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§7. User Rights and Obligations</h2>
        <p>7.1. The User undertakes to use the Service in accordance with the law, good practices, and these Terms.</p>
        <p>7.2. The following are prohibited:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>publishing unlawful, offensive or third-party rights-infringing content,</li>
          <li>uploading files containing malware,</li>
          <li>actions disrupting the Service (DDoS attacks, scraping, automated bots),</li>
          <li>sharing Premium Account access with third parties.</li>
        </ul>
        <p>7.3. The User retains copyright over uploaded material (video, recordings) and grants the Provider a royalty-free licence to store and display them solely for the purpose of providing the service.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§8. Order Restrictions</h2>
        <p>8.1. The Service is available only to adults (18+) residing in the Republic of Poland.</p>
        <p>8.2. Payments are processed only in PLN.</p>
        <p>8.3. The Provider reserves the right to refuse services in the event of a breach of these Terms or applicable law.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§9. Liability and Warranty</h2>
        <p>9.1. The Service is a support tool and does not replace advice from a qualified golf coach or physician. The Provider is not liable for training decisions made on the basis of Service data.</p>
        <p>9.2. The Provider undertakes to provide services free of defects. If defects are found, the User may submit a complaint under §10.</p>
        <p>9.3. The Provider endeavours to ensure Service continuity but does not guarantee 24/7 availability and reserves the right to scheduled maintenance with advance notice.</p>
        <p>9.4. The Provider's liability to non-consumer Users is limited to fees paid in the preceding 3 months.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§10. Complaints</h2>
        <p>10.1. Complaints about services should be submitted electronically to <ObfuscatedEmail /> or by post to: EJDOS Patrycjusz Kowalski, ul. Parkowa 36, 83-330 Małkowo, Poland.</p>
        <p>10.2. A complaint should include: User data (email), description of the problem, and expected resolution.</p>
        <p>10.3. The Provider handles complaints within <strong>14 business days</strong> of receipt and notifies the User of the outcome electronically.</p>
        <p>10.4. Possible resolutions: refund, subscription extension, or another agreed method.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§11. Termination and Account Deletion</h2>
        <p>11.1. The User may delete their Account at any time from the app settings or by sending a request to <ObfuscatedEmail />. Account deletion is irreversible.</p>
        <p>11.2. The Provider may block or delete an Account in the event of a breach of these Terms, after first requesting the breach to cease (unless the breach is severe).</p>
        <p>11.3. In the event of termination during a billing period, the User is not entitled to a proportional refund unless consumer protection law provides otherwise.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§12. Final Provisions</h2>
        <p>12.1. These Terms are governed by Polish law. Matters not covered herein are subject to the Civil Code and the Act on Electronic Services.</p>
        <p>12.2. Disputes between the Provider and non-consumer Users are resolved by the court having jurisdiction over the Provider's registered office.</p>
        <p>12.3. Consumers may use out-of-court dispute resolution methods, including the ODR platform at ec.europa.eu/consumers/odr.</p>
        <p>12.4. The Provider reserves the right to amend these Terms. Users will be notified of changes by email or in-app notice at least 14 days in advance. Continued use of the Service after changes take effect constitutes acceptance.</p>
        <p>12.5. Contact: <ObfuscatedEmail /> | tel. +48 513 050 797</p>
      </section>
    </div>
  )
}

function TermsPL() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-slate-300 space-y-8">
      <h1 className="text-3xl font-black text-white">Regulamin serwisu GolfStats</h1>
      <p className="text-sm text-slate-500">Ostatnia aktualizacja: marzec 2026</p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§1. Dane Usługodawcy</h2>
        <p>Usługodawcą i operatorem Serwisu jest:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Nazwa:</strong> EJDOS Patrycjusz Kowalski</li>
          <li><strong>Adres:</strong> ul. Parkowa 36, 83-330 Małkowo, Polska</li>
          <li><strong>NIP:</strong> 5931343779</li>
          <li><strong>REGON:</strong> 191245207</li>
          <li><strong>E-mail:</strong> kontakt@golfstats.pl</li>
          <li><strong>Telefon:</strong> +48 513 050 797</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§2. Definicje</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Serwis</strong> – aplikacja webowa dostępna pod adresem app.golfstats.pl wraz ze stroną golfstats.pl.</li>
          <li><strong>Użytkownik</strong> – osoba fizyczna korzystająca z Serwisu po założeniu Konta.</li>
          <li><strong>Zawodnik</strong> – Użytkownik korzystający z funkcji śledzenia rund i statystyk.</li>
          <li><strong>Trener</strong> – Użytkownik korzystający z funkcji zarządzania podopiecznymi i planowania treningów.</li>
          <li><strong>Konto</strong> – indywidualne konto Użytkownika chronione hasłem.</li>
          <li><strong>Plan</strong> – wybrany pakiet dostępu do funkcji Serwisu (FREE, START lub FULL).</li>
          <li><strong>Treść cyfrowa</strong> – dostęp do funkcji Serwisu w ramach wybranego Planu Premium, świadczona drogą elektroniczną.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§3. Zakres usług i oferta</h2>
        <p>GolfStats świadczy usługi drogą elektroniczną polegające na:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>rejestracji i analizie wyników rund golfowych (statystyki uderzeń, handicap, porównania),</li>
          <li>komunikacji pomiędzy Zawodnikiem a Trenerem (wiadomości, wideo, plany treningowe),</li>
          <li>głosowym wprowadzaniu wyników przy użyciu technologii AI,</li>
          <li>przechowywaniu danych z gry i materiałów wideo.</li>
        </ul>
        <p>Szczegółowy opis i ceny dostępnych planów (FREE, START, FULL) znajdują się na stronie golfstats.pl w sekcji Cennik. Usługa świadczona jest wyłącznie w języku polskim i w walucie PLN.</p>
        <p><strong>Czas realizacji zamówienia:</strong> Dostęp do opłaconego Planu Premium jest aktywowany natychmiastowo (w ciągu maksymalnie 24 godzin od zaksięgowania płatności) i trwa przez opłacony okres rozliczeniowy (miesięczny lub roczny).</p>
        <p><strong>Środki techniczne ochrony treści cyfrowych:</strong> Dostęp do Serwisu wymaga zalogowania na indywidualne konto chronione hasłem. Treści cyfrowe powiązane są z kontem Użytkownika i nie mogą być przenoszone na inne konta ani urządzenia w sposób nieautoryzowany.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§4. Rejestracja i konto</h2>
        <p>4.1. Korzystanie z Serwisu wymaga założenia Konta. Rejestracja jest bezpłatna.</p>
        <p>4.2. Użytkownik zobowiązuje się podać prawdziwe dane i utrzymywać je w aktualności.</p>
        <p>4.3. Użytkownik odpowiada za zachowanie poufności hasła i wszelkie działania podjęte z jego Konta.</p>
        <p>4.4. Zabronione jest zakładanie Kont w imieniu innych osób bez ich zgody oraz tworzenie kont fikcyjnych.</p>
        <p>4.5. Jeden Użytkownik może posiadać tylko jedno aktywne Konto.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§5. Plany i płatności</h2>
        <p>5.1. Serwis oferuje Plan Bezpłatny (FREE) z ograniczonym zakresem funkcji oraz plany płatne START i FULL z rozszerzonym dostępem.</p>
        <p>5.2. Ceny i zakres Planów określone są w Cenniku dostępnym na stronie golfstats.pl. Usługodawca zastrzega prawo zmiany cennika z zachowaniem 30-dniowego okresu powiadomienia.</p>
        <p>5.3. Płatności za Plan Premium realizowane są z góry za wybrany okres rozliczeniowy za pośrednictwem operatora płatności <strong>PayU S.A.</strong> z siedzibą w Poznaniu (ul. Grunwaldzka 186, 60-166 Poznań), krajowej instytucji płatniczej nadzorowanej przez KNF. Klikając „Zamawiam i płacę" Użytkownik składa zamówienie z obowiązkiem zapłaty.</p>
        <p>5.4. Faktury VAT wystawiane są na żądanie Użytkownika po podaniu danych do faktury na adres <ObfuscatedEmail />.</p>
        <p>5.5. W przypadku subskrypcji miesięcznej dostęp odnawia się co 30 dni, rocznej – co 365 dni, jeżeli Użytkownik nie anuluje subskrypcji przed datą odnowienia.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§6. Odstąpienie od umowy i zwroty</h2>
        <p>6.1. Użytkownikowi będącemu konsumentem przysługuje prawo odstąpienia od umowy w ciągu <strong>14 dni</strong> od jej zawarcia, bez podania przyczyny.</p>
        <p>6.2. <strong>Wyjątek dla treści cyfrowych:</strong> Prawo do odstąpienia wygasa, jeżeli Użytkownik wyraził wyraźną zgodę na rozpoczęcie świadczenia usługi cyfrowej przed upływem terminu odstąpienia i przyjął do wiadomości, że traci w ten sposób prawo odstąpienia od umowy (art. 38 pkt 13 ustawy o prawach konsumenta).</p>
        <p>6.3. Oświadczenie o odstąpieniu należy przesłać drogą elektroniczną na adres <ObfuscatedEmail /> lub listownie na adres: EJDOS Patrycjusz Kowalski, ul. Parkowa 36, 83-330 Małkowo.</p>
        <p>6.4. W przypadku skutecznego odstąpienia Usługodawca zwraca opłatę w ciągu 14 dni od otrzymania oświadczenia, na rachunek bankowy, z którego dokonano płatności.</p>
        <p>6.5. Jako że Serwis świadczy wyłącznie treści cyfrowe (usługi elektroniczne), nie ma zastosowania zwrot fizycznego towaru. Koszty ewentualnego zwrotu nie obciążają Użytkownika.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§7. Prawa i obowiązki Użytkownika</h2>
        <p>7.1. Użytkownik zobowiązuje się korzystać z Serwisu zgodnie z prawem, dobrymi obyczajami i niniejszym Regulaminem.</p>
        <p>7.2. Zabronione jest:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>publikowanie treści bezprawnych, obraźliwych lub naruszających prawa osób trzecich,</li>
          <li>wgrywanie plików zawierających złośliwe oprogramowanie,</li>
          <li>podejmowanie działań zakłócających pracę Serwisu (ataki DDoS, scraping, automatyczne boty),</li>
          <li>udostępnianie dostępu do Konta Premium osobom trzecim.</li>
        </ul>
        <p>7.3. Użytkownik zachowuje prawa autorskie do wgrywanych przez siebie materiałów (wideo, nagrania) i udziela Usługodawcy nieodpłatnej licencji na ich przechowywanie i wyświetlanie wyłącznie w celu świadczenia usługi.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§8. Ograniczenia realizacji zamówienia</h2>
        <p>8.1. Serwis jest dostępny wyłącznie dla osób pełnoletnich (18+) zamieszkałych na terytorium Rzeczypospolitej Polskiej.</p>
        <p>8.2. Płatności obsługiwane są wyłącznie w walucie PLN.</p>
        <p>8.3. Usługodawca zastrzega prawo odmowy świadczenia usług w przypadku naruszenia Regulaminu lub przepisów prawa.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§9. Odpowiedzialność i gwarancja</h2>
        <p>9.1. Serwis jest narzędziem pomocniczym i nie zastępuje porad wykwalifikowanego trenera golfowego ani lekarza. Usługodawca nie odpowiada za decyzje treningowe podjęte na podstawie danych z Serwisu.</p>
        <p>9.2. Usługodawca zobowiązuje się do świadczenia usług bez wad. W przypadku stwierdzenia nieprawidłowości Użytkownik może zgłosić reklamację zgodnie z §10.</p>
        <p>9.3. Usługodawca dokłada starań w celu zapewnienia ciągłości działania Serwisu, jednak nie gwarantuje dostępności 24/7 i zastrzega prawo do przerw technicznych z wyprzedzającym powiadomieniem.</p>
        <p>9.4. Odpowiedzialność Usługodawcy wobec Użytkownika niebędącego konsumentem ograniczona jest do wysokości opłat uiszczonych za ostatnie 3 miesiące.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§10. Reklamacje</h2>
        <p>10.1. Reklamacje dotyczące usług należy składać drogą elektroniczną na adres <ObfuscatedEmail /> lub listownie na adres: EJDOS Patrycjusz Kowalski, ul. Parkowa 36, 83-330 Małkowo.</p>
        <p>10.2. Reklamacja powinna zawierać: dane Użytkownika (e-mail), opis problemu oraz oczekiwany sposób rozwiązania.</p>
        <p>10.3. Usługodawca rozpatruje reklamacje w terminie <strong>14 dni roboczych</strong> od jej otrzymania i informuje Użytkownika o sposobie rozpatrzenia drogą elektroniczną.</p>
        <p>10.4. Sposoby rozpatrzenia reklamacji: zwrot środków, przedłużenie okresu subskrypcji lub inny uzgodniony sposób.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§11. Rozwiązanie umowy i usunięcie konta</h2>
        <p>11.1. Użytkownik może usunąć Konto w dowolnym momencie z poziomu ustawień aplikacji lub wysyłając prośbę na adres <ObfuscatedEmail />. Usunięcie Konta jest nieodwracalne.</p>
        <p>11.2. Usługodawca może zablokować lub usunąć Konto w przypadku naruszenia Regulaminu, po uprzednim wezwaniu do zaprzestania naruszeń (chyba że naruszenie jest rażące).</p>
        <p>11.3. W przypadku rozwiązania umowy w trakcie okresu rozliczeniowego Użytkownikowi nie przysługuje zwrot proporcjonalnej części opłaty, chyba że przepisy prawa konsumenckiego stanowią inaczej.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">§12. Postanowienia końcowe</h2>
        <p>12.1. Regulamin podlega prawu polskiemu. W sprawach nieunormowanych stosuje się przepisy Kodeksu cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.</p>
        <p>12.2. Spory pomiędzy Usługodawcą a Użytkownikiem niebędącym konsumentem rozstrzygane są przez sąd właściwy dla siedziby Usługodawcy.</p>
        <p>12.3. Konsument może skorzystać z pozasądowych metod rozwiązywania sporów, w tym z platformy ODR dostępnej pod adresem ec.europa.eu/consumers/odr.</p>
        <p>12.4. Usługodawca zastrzega prawo do zmiany Regulaminu. O zmianach Użytkownicy zostaną poinformowani e-mailem lub komunikatem w aplikacji z co najmniej 14-dniowym wyprzedzeniem. Dalsze korzystanie z Serwisu po wejściu zmian w życie oznacza ich akceptację.</p>
        <p>12.5. Kontakt: <ObfuscatedEmail /> | tel. +48 513 050 797</p>
      </section>
    </div>
  )
}

export default function TermsOfService() {
  const { lang } = useLanguage()
  return lang === 'en' ? <TermsEN /> : <TermsPL />
}
