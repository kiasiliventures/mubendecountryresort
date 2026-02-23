# Mubende Country Resort (Next.js 14)

A complete App Router website scaffold for Mubende Country Resort using Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Security TODOs

- [ ] Tighten Content Security Policy (CSP) with explicit `script-src`, `img-src`, `style-src`, and `connect-src` directives for production domains (Vercel analytics/speed insights + allowed media hosts).
- [ ] Add automated secret scanning in CI (for example: gitleaks on push/PR).
- [ ] Add dependency security checks in CI (`npm audit` and dependency update cadence).
- [ ] Review and enforce Cloudflare edge security controls (WAF, bot protection, rate limiting for any future form/API endpoints).
