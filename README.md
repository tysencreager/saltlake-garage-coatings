# Salt Lake Garage Coatings

A high-performance, statically-rendered lead-generation site for a premium
epoxy & polyaspartic garage floor coating business targeting Salt Lake City, UT.

Built for local SEO and phone-call conversion: fast loads, clean semantic HTML,
LocalBusiness structured data, and prominent click-to-call CTAs throughout.

## Stack

- **[Astro](https://astro.build)** — static output for maximum speed.
- **React** — used only for the interactive lead-capture form island.
- **Tailwind CSS v4** — via the `@tailwindcss/vite` plugin.
- **Cloudflare Pages** — static deploy target.

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  components/   Header, Footer, Img (lazy wrapper), LeadForm (React island)
  data/site.ts  Single source of truth for NAP, phone, service areas
  layouts/      Layout.astro — SEO meta, OG tags, LocalBusiness JSON-LD
  pages/        index, services, about, contact, 404
  styles/       global.css — warm earthy Tailwind theme
public/
  images/       SVG placeholders (each carries the intended AI image prompt)
  _headers      Cloudflare caching + security headers
  robots.txt    Points to the generated sitemap
```

## Configuration

All business details (phone number, email, service areas) live in
`src/data/site.ts`. Update the phone number there and it propagates to every
CTA, the footer, and the structured data automatically.

The hero `og:image`, social card, and section graphics in `public/images/` are
lightweight SVG placeholders. Each file's `<!-- IMAGE PROMPT -->` comment
describes the soft, naturally-lit photo it should be replaced with at launch.

## Lead form

`src/components/LeadForm.jsx` validates client-side and shows a confirmation
state. It has no backend wired yet — connect the `handleSubmit` `fetch()` to a
[Cloudflare Pages Function](https://developers.cloudflare.com/pages/functions/),
Formspree, or your CRM endpoint before going live.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. The `public/_headers` file applies caching and security headers
   automatically.

Update the `site` URL in `astro.config.mjs` to the production domain so the
canonical tags and sitemap reflect the live address.

### Force HTTP → HTTPS

Cloudflare Pages' `_redirects` file only matches paths, not the URL scheme, so
the http→https 301 cannot live in this repo. Enable it in the Cloudflare
dashboard for the `saltlakegaragecoatings.com` zone:

1. Select the domain → **SSL/TLS → Edge Certificates**.
2. Turn on **Always Use HTTPS** (301s every `http://` request to `https://`).
3. Recommended: set **SSL/TLS → Overview** encryption mode to **Full (strict)**
   and enable **HSTS** under Edge Certificates once the redirect is confirmed.
