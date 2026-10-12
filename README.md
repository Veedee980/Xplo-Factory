# Xplo Factory — Next.js 14 + TypeScript + Tailwind

Rebuild of https://xplofactory.framer.website

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages
`/` · `/about` · `/services` · `/services/[slug]` (11) · `/contact` · `/blog` · `/blog/[slug]` (4) · `/reviews` · `/new-products` · `/new-products/[slug]` (2) · custom 404

## Animations
Masked headline rise on load · scroll-reveal on every section · two opposing hero marquees (pause on hover) · hover-zoom cards · rolling button labels · cursor-following image list (Design Services) · fanned book covers · testimonial carousel (arrows + auto-advance) · video that scales/rounds on scroll · animated counters · scroll-progress bar · auto-hiding header + full-screen mobile menu · floating WhatsApp button. All respect `prefers-reduced-motion`.

## Where to edit things
| What | File |
|---|---|
| Contact details, hours, socials | `lib/data.ts` → `siteConfig` |
| Services, new products, testimonials, images, videos | `lib/data.ts` |
| Blog posts (**placeholder text — replace with real articles**) | `lib/blog.ts` |
| Colours / fonts | `tailwind.config.js`, Google Fonts `<link>` in `app/layout.tsx` |
| Stats numbers (Projects / Reach) | `lib/data.ts` → `stats` |

## Backend
Every form (contact, quote, newsletter) POSTs JSON to `app/api/contact/route.ts`.
It currently validates and logs; connect it to Resend / Nodemailer / your CRM.

## Images
Images load from Framer's CDN in the visitor's browser (`components/SafeImage.tsx`, with a
placeholder if one fails). To self-host, download them into `public/images/` and change the
URLs in `lib/data.ts`.
