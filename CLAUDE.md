# GolfStats Landing Page

## Stack
- React 19 + Vite + TypeScript + Tailwind CSS v3
- Bez backendu — statyczna strona

## Uruchamianie
```bash
cd D:/Projekty_ClaudeCode/GolfStatsLanding
npx vite --port 5174
```

## Produkcja
- URL: `https://golfstats.pl`
- GitHub: `https://github.com/patrycjuszkowalski/GolfStats-Landing.git`
- VPS: `/var/www/landing/` na `root@45.93.138.3`
- Deploy: `ssh golfstats "cd /var/www/landing && git pull && npm run build"`

## Konfiguracja
- `APP_URL` w `App.tsx` wskazuje na `https://app.golfstats.pl`
- Tailwind v3 (nie v4)

## Dostępne narzędzia Claude Code

### Skills
- `/review` — code review ostatnich zmian (globalny)

### Sub-agenci
- `code-reviewer` — review kodu po zmianach
- `debugger` — diagnoza błędów

### MCP Serwery
- `fetch` → pobieranie URL
- `filesystem` → operacje na plikach w `D:/Projekty_ClaudeCode/`
