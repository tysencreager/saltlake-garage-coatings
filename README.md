# Salt Lake Garage Coatings — UNPUBLISHED

This site has been taken offline. The build now produces only:

- `/` — a minimal "site no longer available" placeholder (noindex).
- `/404` — served for every former page URL.
- `robots.txt` — disallows all crawling; the sitemap is gone.
- `_headers` — sends `X-Robots-Tag: noindex, nofollow` on every response so
  search engines drop the pages from their indexes.

## Fully removing the site from the web

Merging this state and letting Cloudflare Pages redeploy blanks the content,
but the deployment itself still exists. To finish unpublishing, in the
Cloudflare dashboard:

1. **Workers & Pages** → select the Pages project → **Settings** →
   **Delete project**. This removes the deployment and detaches
   `saltlakegaragecoatings.com` from it.
2. Optionally delete the DNS records for the domain (or let the domain
   registration lapse) so the hostname stops resolving entirely.
3. Optionally disconnect the GitHub integration so future pushes never
   redeploy anything.

The full site source remains available in git history if it's ever needed
again (`git log` — everything prior to the unpublish commit).
