@AGENTS.md

# Willoa Site

Corporate/service site for Willoa — an IT consulting point of contact for
sole proprietors and small businesses in Singapore. Built with Next.js
(App Router, TypeScript, Tailwind v4).

## Design system

The visual design (washi/willow-branch motif) was ported from a static
HTML mockup the client provided. All custom design tokens and component
classes (`.hero`, `.section`, `.plan-card`, `.contact-box`, etc.) live in
`src/app/globals.css` as plain CSS alongside Tailwind — this is
intentional, not a partial migration. Fonts (Shippori Mincho, Noto Sans
JP, JetBrains Mono) are loaded via `next/font/google` in
`src/app/layout.tsx` and exposed as `--font-display` / `--font-body` /
`--font-mono` CSS variables consumed by globals.css.

`Header` (`src/components/Header.tsx`) and `Footer` are shared across
pages. Header takes an `active` prop (`"about" | "service" | "contact" |
null`) to highlight the current nav item.

## Pages

- `/` — home. Hero is real copy; the `#service` and `#contact` sections
  are placeholders ("準備中") because the client has only supplied the
  About page content so far. Fill these in once real service/pricing/
  contact copy is provided — do not invent pricing or contact details.
- `/about` — 会社概要, ported verbatim from the client's HTML mockup.

## Production infra

This app runs on the same VPS as `sg-weekend-app` (hostname
`vmi3428590`, IP `194.233.82.43`), following the same deployment
pattern:

- **Process manager**: pm2, process name `willoa`, `npm run start` which
  runs `next start -p 3001`. `pm2 save` has been run so it survives
  reboots.
- **Reverse proxy / TLS**: nginx config at
  `/etc/nginx/sites-available/willoa.net` (symlinked into
  `sites-enabled`), proxies `willoa.net` / `www.willoa.net` on 443 to
  `localhost:3001`, with port 80 redirecting to https.
- **DNS**: `willoa.net` is on Cloudflare (nameservers `liv`/`curt.ns.cloudflare.com`).
  Both the apex and `www` A records point to `194.233.82.43` in
  **DNS only** mode (grey cloud, not proxied) — same as the existing
  `dosuru.app` setup on this box. If proxying is ever turned on, the
  Cloudflare SSL/TLS mode must be set to Full or Full (strict), or the
  redirect will loop.
- **Certificate**: Let's Encrypt via `certbot certonly --webroot -w
  /var/www/html` (the default nginx server block handles the HTTP-01
  challenge). Covers `willoa.net` + `www.willoa.net`, auto-renews via
  certbot's systemd timer. Issued 2026-08-24, expires 2026-11-22.
- **sudo**: this shell user (`masahiko`) has no passwordless sudo.
  Any command touching `/etc/nginx`, `/etc/letsencrypt`, or
  `systemctl` needs to be run by the user directly in their own
  terminal, not by an agent in this session.

## Repo

GitHub: `oguworld/willoa-site` (private), default branch `main`. Git
identity for commits in this repo is `oguworld` / `oguworld@gmail.com`,
matching `sg-weekend-app`.

## Open items

- Service/pricing content and real contact details (email, X/Twitter,
  etc.) are still needed to replace the placeholders on `/`.
- The client's original mockup referenced additional sections (phone
  mockup showcase, pain-point list, pricing plan grid) whose CSS is
  already in `globals.css` but has no corresponding page content yet —
  build these out once the copy arrives instead of re-deriving the
  styles.
