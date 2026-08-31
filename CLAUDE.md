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

- `/` — a single-page site (no separate `/about` route; everything is
  scroll-anchored sections on the home page). Sections in order:
  hero → `#about` (事業概要) → `#service` (pain-list, spot-task price
  list, 4-tier `.plan-grid` including a free trial) → `#achievements`
  (おでかけNavi showcase, links to `/odekake-navi`) → `#contact`
  (`ContactForm`, no email/WhatsApp/X shown directly). Positioning is
  about IT isolation for people working abroad ("ひとりで、悩まない"),
  not "we teach you AI" — see git history if that framing drifts back,
  it was deliberately corrected once already.
- `/odekake-navi` + `/odekake-navi/privacy` — ported product page and
  privacy policy for the sg-weekend-app / おでかけNavi mobile app,
  because `about.dosuru.app` (which used to host them) was retired in
  favor of redirecting here. Screenshots/icon are referenced directly
  from `dosuru.app`, not duplicated into this repo's `public/`.

### Layout structure (full-bleed sections)

Each `<section className="section">` spans the full viewport width
with an alternating background (`:nth-of-type(odd)` = white,
`:nth-of-type(even)` = `--card`); the actual content sits in a nested
`.section-inner` (max-width 1160px, centered). Same pattern in the
hero via `.hero-inner`. This replaced an earlier single shared
`.branch-wrap` max-width container after two rounds of "the page
doesn't use the screen width" feedback — first widening the container
alone did nothing (text still capped ~560-580px, just left more dead
margin), so text-heavy sections like `#about` also got a decorative
branch-SVG accent on the right (mirrored copy of the hero's) to
visually balance the empty side, same idea as the hero's
text+decoration split. `ScrollBranch.tsx` only toggles `.is-active` /
nav-highlight classes by querying `.section` — it does not depend on
any wrapping element, so the section markup can be restructured freely.

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

### Taking screenshots (headless Chromium works, but needs setup)

Playwright's cached Chromium binaries exist under
`~/.cache/ms-playwright/`, but they're missing shared libs (libatk,
libcairo, libpango, libxkbcommon, libasound, etc.) that aren't
installed system-wide and can't be via `apt install` without sudo.
Fix: `apt-get download <pkg>` (no root needed, just writes a `.deb` to
cwd) each missing lib, `dpkg-deb -x <pkg>.deb <dir>` to extract it
without installing, then run Chromium with
`LD_LIBRARY_PATH=<dir>/usr/lib/x86_64-linux-gnu`. Expect 2-3 rounds of
this — extracting one batch reveals further transitive deps via `ldd
... | grep "not found"` — repeat until the grep is empty. Also add
`args: ['--no-sandbox']` to `chromium.launch()` (no user namespaces
available here). Once launched, use `playwright-core` (not the full
`playwright` package) with `executablePath` pointed at the cached
binary. This is worth doing before claiming a layout/visual fix is
correct — several past "fixes" in this project were wrong on the
first attempt because they were reasoned about from CSS alone instead
of actually screenshotted.

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

`src/components/ContactForm.tsx` posts to this app's own
`src/app/api/feedback/route.ts`, which pushes a message via the LINE
Messaging API — same pattern as `sg-weekend-app`'s `/api/feedback`
(`server.js`), which the user asked to match ("おでかけNaviと同じ
形"). Uses the same LINE channel: `LINE_CHANNEL_ACCESS_TOKEN` and
`LINE_USER_ID` were copied from `sg-weekend-app/.env` into this repo's
`.env.local` (gitignored, not committed). Both apps' feedback lands in
the same LINE thread; this app's messages are prefixed "Willoaサイト
にお問い合わせが届きました" to distinguish them.

An earlier version used Web3Forms (a third-party form-relay service)
before this LINE-based approach replaced it — don't reintroduce it,
this is simpler and needs no external account.

If `.env.local` is ever lost, regenerate it with:
```
grep -E "^LINE_CHANNEL_ACCESS_TOKEN=|^LINE_USER_ID=" \
  /home/masahiko/sg-weekend-app/.env > .env.local
```
then `npm run build && pm2 restart willoa --update-env`.

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
- 実績 (`#achievements`) only has one case study (おでかけNavi) — add
  more as they become available.
- Founder stays anonymous by choice (no photo) — if a nickname/avatar
  is decided later, wire it into the `#about` section.
