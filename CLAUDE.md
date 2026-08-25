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

- `/` — home. Full content ported from the client's landing mockup:
  hero, pain-point list, three pricing tiers (`.plan-grid`) plus a
  one-off task price list (`.service-card` / `.mini-price-row`), and
  the contact section (`mailto:info@willoa.net`, `x.com/willoa_sg`).
  The scroll-driven branch line animation (`ScrollBranch.tsx`) and
  active-nav-on-scroll behavior are ported as a client component that
  manipulates the DOM directly by id, matching the original vanilla JS
  — this is intentional, not something to "fix" into React state.
- `/about` — 会社概要, ported verbatim from the client's HTML mockup.

Not yet built: the phone-mockup "showcase" section (`.showcase` /
`.phone-*` classes exist in globals.css but no page uses them) — no
case-study content has been provided for it yet.

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

## Email (info@willoa.net)

Decided against a paid mailbox or self-hosting. Current setup:

- **Cloudflare Email Routing** (dashboard → willoa.net → Email →
  Email Routing) forwards `info@willoa.net` → `oguworld@gmail.com`.
  Receiving only.
- Replies go out from `oguworld@gmail.com` as-is — there is no
  "send as info@willoa.net" capability. This was evaluated and
  rejected at each option:
  - Gmail's "Send mail as" for a non-Google-hosted custom domain
    requires real SMTP relay credentials; Cloudflare Email Routing is
    receive-only and has no SMTP submission service, so this doesn't
    work with just Cloudflare.
  - Microsoft 365 Family/Personal *can* do this via Outlook.com's
    custom-domain feature, but the user's Office is a one-time
    perpetual license, not an active subscription — not available.
  - Zoho Mail's free custom-domain plan appears to no longer be
    offered to new signups (confirmed live: only paid tiers shown,
    cheapest ~S$1.66/user/month) — not pursued.
  - Self-hosting a mail server on this VPS (Contabo) was considered
    and is technically feasible (IP `194.233.82.43` is not currently
    on Spamhaus/SpamCop), but rejected due to deliverability risk:
    budget-VPS IP ranges are commonly flagged by receiving providers'
    reputation systems independent of DNSBL status, which is an
    unacceptable risk for inbound business inquiries.
- If this needs revisiting, the cheapest reliable fix is a paid
  mailbox with real SMTP (Zoho Mail Lite ~S$20/year, or similar) —
  see the reasoning above before re-evaluating Microsoft/self-hosting.

## Repo

GitHub: `oguworld/willoa-site` (**public**, deliberately — user asked
to make it public), default branch `main`. Git identity for commits in
this repo is `oguworld` / `oguworld@gmail.com`, matching
`sg-weekend-app`.

## Contact form

`src/components/ContactForm.tsx` (client component) posts to
[Web3Forms](https://web3forms.com) — chosen because it needs no
account/backend, just a free access key tied to an email. Reads
`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` from env; until that's set, it
renders a fallback message pointing to email/WhatsApp instead of the
form. **Still pending**: user needs to get a key from web3forms.com
and give it to us to wire in (as an env var in the pm2/`.env.local`
setup, then rebuild + `pm2 restart willoa`).

## Open items

- SEO/meta polish not yet done: still using the create-next-app
  default favicon, no OGP image, no `sitemap.xml` / `robots.txt`, no
  custom 404 page.
- No analytics configured (GA4 or similar).
- No legal pages (privacy policy, 特定商取引法に基づく表記) — worth
  checking whether these are required given the fee-for-service
  structure.
- `public/*.svg` are unused create-next-app sample assets — safe to
  delete.
- Phone-mockup "showcase" section (see Pages above) — needs case-study
  content before it can be built.
