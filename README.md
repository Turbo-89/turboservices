# Turbo Services – V3 (Next.js + Tailwind + Rive + Chat + 24u-aanvraag)

## Start
npm i
npm run dev

## Pagina's
/ (home), /diensten, /prijzen, /boeken, /over-ons, /blog

## Rive
Plaats /public/mascot.riv met State Machine "TurboSM" (inputs: idle,wave,point,success,alert).

## API
POST /api/triage  – simpele triage-replies
POST /api/request – bewaart aanvraag (data/requests.json) + fake betaal-link (vervang met Stripe/Billit)

## SEO
- Server-rendered Next.js, schone URL's, content in /content voor blog/weetjes.
- Voeg Google Business, sitemap/robots en structured data toe voor LocalBusiness.
