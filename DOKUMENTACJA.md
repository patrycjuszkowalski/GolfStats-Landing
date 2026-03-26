# GolfStats Landing Page — Dokumentacja Techniczna

> Ostatnia aktualizacja: marzec 2026

---

## Spis treści

1. [Przegląd projektu](#1-przegląd-projektu)
2. [Stack technologiczny](#2-stack-technologiczny)
3. [Struktura plików](#3-struktura-plików)
4. [Architektura kodu](#4-architektura-kodu)
5. [Lazy loading — code splitting](#5-lazy-loading--code-splitting)
6. [Stałe i konfiguracja](#6-stałe-i-konfiguracja)
7. [Komponenty shared](#7-komponenty-shared)
8. [Sekcje lazy-loaded](#8-sekcje-lazy-loaded)
9. [Routing hash-based](#9-routing-hash-based)
10. [Optymalizacje wydajnościowe](#10-optymalizacje-wydajnościowe)
11. [SEO i meta tagi](#11-seo-i-meta-tagi)
12. [Obrazy i zasoby statyczne](#12-obrazy-i-zasoby-statyczne)
13. [Nginx — cache i kompresja](#13-nginx--cache-i-kompresja)
14. [Deployment](#14-deployment)
15. [Wyniki PageSpeed](#15-wyniki-pagespeed)
16. [Lokalne uruchomienie](#16-lokalne-uruchomienie)

---

## 1. Przegląd projektu

Strona marketingowa aplikacji GolfStats (`golfstats.pl`). Single Page Application w React,
zoptymalizowana pod PageSpeed ≥97. Zawiera sekcje informacyjne, cennik, strony prawne
(polityka prywatności, regulamin, kontakt) obsługiwane przez hash routing.

| URL | Zawartość |
|-----|-----------|
| `golfstats.pl` | Strona główna (Hero → Features → DlaKogo → Cennik → CTA) |
| `golfstats.pl/#/polityka-prywatnosci` | Polityka prywatności |
| `golfstats.pl/#/regulamin` | Regulamin serwisu |
| `golfstats.pl/#/kontakt` | Strona kontaktowa |

**Aplikacja docelowa:** `https://app.golfstats.pl`

---

## 2. Stack technologiczny

| Warstwa | Technologia |
|---------|-------------|
| Framework | React 19 |
| Build | Vite 5 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Hosting | VPS Hostinger, Nginx |
| SSL | Let's Encrypt (certbot) |

---

## 3. Struktura plików

```
GolfStatsLanding/
├── index.html                          # HTML shell z meta tagami, preload, JSON-LD
├── vite.config.ts                      # port 5174 dev
├── tailwind.config.js
├── src/
│   ├── main.tsx                        # ReactDOM.createRoot
│   ├── index.css                       # @tailwind base/components/utilities
│   ├── constants.ts                    # glass, APP_URL, APP_REGISTER, APP_LOGIN
│   ├── App.tsx                         # routing + Suspense wrapper (47 linii)
│   │
│   └── components/
│       ├── Logo.tsx                    # Logo img z width/height (SEO)
│       ├── Navbar.tsx                  # Fixed navbar z hamburger menu
│       ├── Footer.tsx                  # Stopka z linkami do stron prawnych
│       ├── CookieBanner.tsx            # RODO baner, stan w localStorage
│       ├── CheckIcon.tsx               # Zielony ✓ reused w DlaKogo i Cennik
│       ├── ObfuscatedEmail.tsx         # Email skladany z części (anti-spam)
│       │
│       ├── Hero/
│       │   ├── index.tsx               # Sekcja hero z FlowArrow, mockupami SVG
│       │   └── CyclingQuestions.tsx    # Animowane pytania z dots nawigacją
│       │
│       └── sections/                   # Lazy-loaded (osobne JS chunki)
│           ├── Features.tsx            # 4 karty funkcji z expandable panelem
│           ├── DlaKogo.tsx             # Dwie kolumny: amatorzy vs trenerzy
│           ├── Cennik.tsx              # Toggle miesięcznie/rocznie, 3 plany
│           ├── CTASection.tsx          # App Store / Google Play CTA
│           ├── PrivacyPolicy.tsx       # Polityka prywatności (RODO)
│           ├── TermsOfService.tsx      # Regulamin serwisu
│           └── ContactPage.tsx         # Dane kontaktowe
│
└── public/
    ├── favicon.svg                     # SVG favicon
    ├── logo_golfstats.png              # Apple touch icon
    ├── og-image.png                    # Open Graph image (1407×768)
    ├── site.webmanifest                # PWA manifest
    ├── robots.txt                      # Allow all + Sitemap link
    ├── sitemap.xml                     # Pojedyncze URL golfstats.pl, priority 1.0
    ├── hero-bg.webp                    # Tło sekcji hero (LCP element)
    ├── hero-bg.jpg                     # Oryginał (kopia zapasowa)
    ├── Analiza_gry_1.webp / .png
    ├── Analiza_gry_2.webp / .png
    ├── Komunikacja.webp / .png
    ├── Rundy_3_telefony.webp / .png
    ├── Rundy_nagrywanie_mowy.webp / .png
    ├── cele.webp / .png
    ├── dbanie.webp / .png
    ├── poprawa.webp / .png
    └── radosc.webp / .png
```

---

## 4. Architektura kodu

### Podział na main bundle vs lazy chunks

**Main bundle** (ładowany zawsze, natychmiast):

| Komponent | Uzasadnienie |
|-----------|--------------|
| `Navbar` | Fixed top, widoczny na każdej stronie |
| `Hero` + `CyclingQuestions` | Above the fold — viewport 1, LCP element |
| `Footer` | Renderowany na każdej stronie |
| `CookieBanner` | Overlay pojawia się przy starcie |
| `Logo` | Używany w Navbar i Footer |
| `CheckIcon` | Mały helper — minimalizuje duplikację |
| `ObfuscatedEmail` | Używany w 3 lazy-loaded stronach |
| `constants.ts` | Stałe URL i klasy CSS |

**Lazy chunks** (pobierane na żądanie):

| Chunk | Trigger | Rozmiar (gzip) |
|-------|---------|----------------|
| `Features.tsx` | Scroll poniżej Hero | 4.81 kB |
| `TermsOfService.tsx` | Route `#/regulamin` | 4.13 kB |
| `PrivacyPolicy.tsx` | Route `#/polityka-prywatnosci` | 2.61 kB |
| `Cennik.tsx` | Scroll | 1.67 kB |
| `DlaKogo.tsx` | Scroll | 1.26 kB |
| `CTASection.tsx` | Scroll | 1.29 kB |
| `ContactPage.tsx` | Route `#/kontakt` | 0.72 kB |

### Dlaczego `CheckIcon` i `ObfuscatedEmail` są w main bundle?

`ObfuscatedEmail` jest importowany przez `PrivacyPolicy`, `TermsOfService` i `ContactPage`.
Gdyby był lazy razem z nimi, Vite mógłby go zduplikować lub niepotrzebnie
wciągnąć do wielu chunków. Umieszczenie go w `components/` (poza `sections/`)
sprawia, że trafia do main bundle i jest współdzielony bez duplikacji.

Identycznie `CheckIcon` — używany w `DlaKogo` i `Cennik`.

---

## 5. Lazy loading — code splitting

### Implementacja w App.tsx

```tsx
import { lazy, Suspense } from 'react'

const Features   = lazy(() => import('./components/sections/Features'))
const DlaKogo    = lazy(() => import('./components/sections/DlaKogo'))
const Cennik     = lazy(() => import('./components/sections/Cennik'))
const CTASection = lazy(() => import('./components/sections/CTASection'))
const PrivacyPolicy  = lazy(() => import('./components/sections/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./components/sections/TermsOfService'))
const ContactPage    = lazy(() => import('./components/sections/ContactPage'))
```

### Fallback

Używamy `<Suspense fallback={<div />}>` — pusty div zamiast spinnera.
Tło strony jest `#1d262d` (dark), więc brak zawartości nie powoduje widocznego
"skoku" — użytkownik widzi ciemne tło do momentu załadowania chunka.

### Strona główna

```tsx
return shell(
  <>
    <Hero />   {/* synchronicznie — LCP */}
    <Suspense fallback={<div />}><Features /></Suspense>
    <Suspense fallback={<div />}><DlaKogo /></Suspense>
    <Suspense fallback={<div />}><Cennik /></Suspense>
    <Suspense fallback={<div />}><CTASection /></Suspense>
  </>
)
```

Każda sekcja ma własny `<Suspense>`, dzięki czemu załadowane sekcje renderują się
niezależnie — DlaKogo może być gotowe zanim Features skończy parsować.

---

## 6. Stałe i konfiguracja

Plik: `src/constants.ts`

```ts
export const glass = 'bg-white/[0.03] backdrop-blur-md border border-white/10'
export const APP_URL = 'https://app.golfstats.pl'
export const APP_REGISTER = `${APP_URL}/register`
export const APP_LOGIN    = `${APP_URL}/login`
```

**`glass`** — klasa Tailwind dla kart szklanych (glassmorphism). Używana w:
`Features`, `DlaKogo`, `Cennik`, `Hero`, `Navbar` (mobile menu).

**`APP_REGISTER`** i **`APP_LOGIN`** — linki do aplikacji. Zmienić tu, gdy zmieni
się domena app. Używane w `Navbar`, `DlaKogo`, `Cennik`.

---

## 7. Komponenty shared

### `Logo.tsx`
Renderuje `<img src="/logo_golfstats.webp">` z `width={180} height={48}`.
Prop `small` zmniejsza rozmiar (użycie w Footer).
Atrybuty `width`/`height` zapobiegają CLS (Cumulative Layout Shift).

### `Navbar.tsx`
- Fixed top, `z-50`, `backdrop-blur-md`
- Hamburger menu dla mobile (stan `menuOpen`)
- Linki: O aplikacji `#o-aplikacji`, Dla kogo `#dla-kogo`, Cennik `#cennik`
- Przyciski: Logowanie → `APP_LOGIN`, DOŁĄCZ TERAZ → `APP_REGISTER`
- `aria-label` na przycisku hamburger (wymagany przez Lighthouse Accessibility)

### `CookieBanner.tsx`
- Pokazuje się gdy `localStorage.getItem('cookie-consent')` jest null
- Przycisk "Rozumiem, akceptuję" ustawia `localStorage.setItem('cookie-consent', 'accepted')`
- Używa `useState(() => !localStorage.getItem(...))` — inicjalizacja lazy (unikamy
  niepotrzebnego re-renderu)

### `ObfuscatedEmail.tsx`
Składa adres e-mail z trzech zmiennych, by utrudnić scrapowanie przez boty:
```tsx
const u = 'kontakt', d = 'golfstats', t = 'pl'
return <span>{u}{'@'}{d}{'.'}{t}</span>
```
Wyświetla: `kontakt@golfstats.pl`. Używany w PrivacyPolicy, TermsOfService, ContactPage.

### `CheckIcon.tsx`
Mały `<span>` z `✓` w kolorze `text-accent`. Używany w listach w DlaKogo i Cennik.

### `Hero/index.tsx`
Zawiera lokalnie (single-use) trzy komponenty SVG:
- `FlowArrow` — animowane punkty przepływu (lewo/prawo)
- `ChartMockup` — SVG wykresu statystyk (96×96)
- `PlannerMockup` — SVG planu treningu z paskiem postępu

Sekcja hero ma tło z `hero-bg.webp` jako CSS background + `<link rel="preload">` w index.html.

### `Hero/CyclingQuestions.tsx`
4 pytania zmieniające się co 5s z animacją fade + slide.
Dots nawigacji mają wrapper `button` z `minWidth/Height: 28px` (wymaganie Lighthouse
— touch target ≥24×24px), wewnątrz wizualny `<span>` z aktualnym rozmiarem.

---

## 8. Sekcje lazy-loaded

### `Features.tsx`
- Lokalnie definiuje 4 komponenty SVG ikon: `IconScore`, `IconAnalysis`, `IconCoach`, `IconTraining`
- Stała `FEATURES: Feature[]` — tablica z danymi (tytuł, opis, body, obrazy, nagłówki)
- Stan `openIdx` — index aktywnie otwartej karty
- Layout desktop (lg+): panel pod siatką (`id="feature-panel"`)
- Layout mobile/tablet: panel inline między kartami (`id="inline-panel-{i}"`)
- `imagesLeft` — flaga do odwrócenia kolejności kolumn w panelu desktop

### `DlaKogo.tsx`
Dwie karty: amatorzy/zawodnicy (`STUDENT`) i trenerzy (`TRAINER`).
Linki rejestracji z query `?role=STUDENT` / `?role=TRAINER`.

### `Cennik.tsx`
- Stan `annual` — toggle miesięcznie/rocznie
- Stała `PRICES` z cenami promo i standardowymi dla planów Start i Full
- 3 karty: Free, Start (wyróżniony, `scale-105`), Full
- Plan Free zawsze `0 zł/mies.` — bez toggle

### `CTASection.tsx`
Sekcja z przyciskami App Store i Google Play (oba oznaczone "Aplikacja wkrótce").
SVG logotypów sklepów inlinowane (bez zewnętrznych zależności).

### `PrivacyPolicy.tsx` / `TermsOfService.tsx` / `ContactPage.tsx`
Strony prawne. Importują `ObfuscatedEmail` z `../ObfuscatedEmail`.
Renderowane tylko gdy odpowiedni hash jest aktywny.

---

## 9. Routing hash-based

`App.tsx` słucha `hashchange` i ustawia stan `page`:

| Hash | page |
|------|------|
| (brak / `#`) | `'home'` |
| `#/polityka-prywatnosci` | `'privacy'` |
| `#/regulamin` | `'terms'` |
| `#/kontakt` | `'contact'` |

Hash routing wybrany celowo — SPA hostowana jako pliki statyczne na Nginx
bez server-side routing. Nginx nie musi przekierowywać 404 → index.html
(brak konieczności `try_files $uri /index.html`), bo hash nie jest wysyłany
do serwera.

Funkcja `shell()` opakowuje treść wspólnym layoutem: `Navbar + main + Footer + CookieBanner`.

---

## 10. Optymalizacje wydajnościowe

### LCP (Largest Contentful Paint)

Problem: `hero-bg` był serwowany z Google CDN jako CSS `background-image`.
Przeglądarka odkrywa CSS background późno (po parsowaniu CSS + layoutu),
co dawało LCP ≈ 8.1s.

Rozwiązanie:
1. Obraz pobrany lokalnie, skonwertowany do WebP (`cwebp -q 85`)
2. Dodany `<link rel="preload" as="image" href="/hero-bg.webp">` w `<head>` —
   przeglądarka pobiera obraz równolegle z HTML, zanim CSS zostanie sparsowany
3. Wynik: LCP ≈ 2.0s

### White flash przed renderem React

Inline `<style>body{background:#081210;margin:0}</style>` w `<head>`.
Kolor `#081210` to ciemna zieleń — tło strony zanim React zamontuje komponent.
Zapobiega bieleniu ekranu przy FCP.

### Obrazy WebP

Wszystkie obrazy skonwertowane z PNG/JPG do WebP komendą `cwebp -q 82` na VPS:

| Plik | Przed | Po | Oszczędność |
|------|-------|-----|-------------|
| hero-bg | 376 kB | 32 kB | −91% |
| Rundy_nagrywanie_mowy | 728 kB | 52 kB | −93% |
| Rundy_3_telefony | 764 kB | 52 kB | −93% |
| Analiza_gry_2 | 436 kB | 36 kB | −92% |
| Komunikacja | 344 kB | 32 kB | −91% |

Oryginały `.png`/`.jpg` zachowane w `public/` jako kopia zapasowa.

### Lazy loading obrazów

Wszystkie obrazy poniżej hero mają `loading="lazy"`:
```tsx
<img src={src} alt={alt} loading="lazy" />
```
Wyjątek: `hero-bg.webp` (LCP) — bez lazy, z preload.

### Logo width/height

`<img width={180} height={48}>` na Logo — zapobiega CLS gdy font/layout
nie jest jeszcze załadowany.

### Touch targets

Quiz dots w `CyclingQuestions` miały rozmiar 8×8px (zbyt mały).
Rozwiązanie: przycisk-wrapper `minWidth: 28, minHeight: 28, background: transparent`,
wewnątrz wizualny `<span>` z faktycznym rozmiarem kropki.

### Code splitting (24 kB oszczędność)

Przed refaktoryzacją: monolityczny `App.tsx` 1401 linii — wszystko w jednym bundlu,
przeglądarka parsowała kod Regulaminu nawet gdy użytkownik go nie odwiedził.

Po: main bundle 159 kB (gzip: 51 kB), sekcje w osobnych plikach JS pobieranych
na żądanie. Oszczędność przy pierwszym renderze: ~24 kB nieużywanego JS.

---

## 11. SEO i meta tagi

Wszystkie meta tagi w `index.html`:

### Podstawowe
```html
<title>GolfStats – Aplikacja dla golfistów i trenerów</title>
<meta name="description" content="..."/>
<link rel="canonical" href="https://golfstats.pl"/>
<meta name="robots" content="index, follow"/>
```

### Open Graph / Twitter Card
```html
<meta property="og:type" content="website"/>
<meta property="og:image" content="https://golfstats.pl/og-image.png"/>
<!-- + og:title, og:description, og:url, og:site_name, og:locale -->
<meta name="twitter:card" content="summary_large_image"/>
```

`og-image.png` — 1407×768px, obraz social sharing.

### JSON-LD Structured Data

Schema.org `SoftwareApplication`:
```json
{
  "@type": "SoftwareApplication",
  "name": "GolfStats",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": { "price": "0", "priceCurrency": "PLN" }
}
```
Walidacja: Google Rich Results Test — 2 valid items (SoftwareApplication + Offer).

### PWA Manifest

`public/site.webmanifest`:
```json
{
  "name": "GolfStats",
  "short_name": "GolfStats",
  "theme_color": "#0a4d3c",
  "display": "standalone"
}
```

### robots.txt i sitemap.xml

`public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://golfstats.pl/sitemap.xml
```

`public/sitemap.xml` — jeden URL (`golfstats.pl`), `priority: 1.0`,
`lastmod: 2026-03-26`, `changefreq: monthly`.

> Przy publikacji nowych podstron zaktualizować `sitemap.xml`.

---

## 12. Obrazy i zasoby statyczne

Wszystkie zasoby w `public/` — Vite kopiuje je do `dist/` bez przetwarzania.

### Konwersja do WebP (komendy VPS)

```bash
apt install webp
cwebp -q 85 hero-bg.jpg -o hero-bg.webp
cwebp -q 82 Komunikacja.png -o Komunikacja.webp
# itd.
```

### Favicon

`public/favicon.svg` — SVG z logo (skaluje się na wszystkich rozdzielczościach).
`public/logo_golfstats.png` — Apple touch icon (180×180px).

---

## 13. Nginx — cache i kompresja

Plik konfiguracji: `/etc/nginx/sites-available/golfstats` (blok dla `golfstats.pl`).

### Gzip

```nginx
gzip on;
gzip_vary on;
gzip_comp_level 6;
gzip_min_length 256;
gzip_types
  text/plain text/css text/xml text/javascript
  application/javascript application/json application/xml
  image/svg+xml;
```

### Cache headers

```nginx
# JS i CSS — 1 rok, immutable (Vite generuje hashe w nazwach plików)
location ~* \.(js|css)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# Obrazy i fonty — 30 dni
location ~* \.(png|jpg|jpeg|gif|webp|svg|ico|woff|woff2)$ {
  expires 30d;
  add_header Cache-Control "public";
}
```

> `immutable` na JS/CSS jest bezpieczne bo Vite dodaje content hash do nazwy
> (np. `index-BK5vi03R.js`) — zmiana kodu = nowa nazwa = wymuszony re-download.

---

## 14. Deployment

### Repo

GitHub: `https://github.com/patrycjuszkowalski/GolfStats-Landing.git`

### Lokalne zmiany → produkcja

```bash
# 1. Build lokalny (weryfikacja)
npx vite build

# 2. Commit i push
git add src/ index.html public/
git commit -m "opis zmian"
git push origin main

# 3. Deploy na VPS
ssh root@golfstats.pl
cd /var/www/landing
git pull
npx vite build
# Nginx serwuje z dist/ — nie trzeba restartować
```

### Ścieżki na VPS

| Zasób | Ścieżka |
|-------|---------|
| Repozytorium | `/var/www/landing/` |
| Zbudowane pliki | `/var/www/landing/dist/` |
| Config Nginx | `/etc/nginx/sites-available/golfstats` |
| Certyfikat SSL | certbot (Let's Encrypt, auto-renew) |

### Uprawnienia node_modules (problem historyczny)

Jeśli `npx vite build` zwraca `tsc: Permission denied`:
```bash
chmod +x /var/www/landing/node_modules/.bin/*
```

---

## 15. Wyniki PageSpeed

Pomiary po wdrożeniu wszystkich optymalizacji (PageSpeed Insights, mobile):

| Metryka | Przed | Po |
|---------|-------|-----|
| Performance | 70 | **97** |
| Accessibility | 78 | **95** |
| Best Practices | 100 | **100** |
| SEO | 100 | **100** |
| FCP | ~2.4s | ~1.8s |
| LCP | 8.1s | **2.0s** |
| TBT | 0ms | 0ms |
| CLS | 0 | 0 |

### Co dało największy efekt

1. **LCP 8.1s → 2.0s** — preload + lokalne WebP zamiast Google CDN
2. **Performance 70 → 84** — WebP obrazy (−91% rozmiar), lazy loading
3. **Performance 84 → 97** — code splitting (−24 kB JS), touch targets, logo width/height
4. **Accessibility 78 → 95** — aria-label na hamburger, touch targets 28px

---

## 16. Lokalne uruchomienie

```bash
cd d:/Projekty_ClaudeCode/GolfStatsLanding

# Dev server
npx vite --port 5174
# → http://localhost:5174

# Build produkcyjny
npx vite build
# → dist/

# Podgląd builda
npx vite preview
```

### Zmiana URL aplikacji

Edytuj `src/constants.ts`:
```ts
export const APP_URL = 'https://app.golfstats.pl'
```
Wszystkie linki (Logowanie, DOŁĄCZ TERAZ, Wybierz plan, etc.) zaktualizują się automatycznie.

### Dodanie nowej sekcji

1. Stwórz `src/components/sections/NowaSekacja.tsx`
2. W `App.tsx` dodaj:
   ```tsx
   const NowaSekcja = lazy(() => import('./components/sections/NowaSekcja'))
   // ...
   <Suspense fallback={<div />}><NowaSekcja /></Suspense>
   ```
3. Jeśli sekcja używa `glass` lub linków → importuj z `../../constants`
4. Jeśli używa `CheckIcon` lub `ObfuscatedEmail` → importuj z `../CheckIcon` itp.

### Dodanie nowej strony (route)

1. Stwórz komponent w `sections/`
2. Dodaj lazy import w `App.tsx`
3. Dodaj case w `useEffect` obsługującym `hashchange`
4. Dodaj link w `Footer.tsx` z odpowiednim `href="#/nowa-strona"`
5. Zaktualizuj `sitemap.xml` jeśli strona ma być indeksowana
