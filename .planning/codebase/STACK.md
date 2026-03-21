# Stack

**Analysis Date:** 2026-03-21

## Languages & Runtime

- **Primary Language:** TypeScript 5.x
- **Runtime:** Node.js with npm
- **JSX:** React 19.2.3

## Frameworks

- **Web Framework:** Next.js 16.1.6 (App Router)
- **CSS Framework:** Tailwind CSS 4.x via PostCSS
- **Animation:** GSAP 3.14.2, Framer Motion 12.29.2

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.1.6 | Web framework (App Router) |
| react | 19.2.3 | UI library |
| react-dom | 19.2.3 | React DOM renderer |
| tailwindcss | 4.x | Utility-first CSS |
| framer-motion | 12.29.2 | Declarative animations |
| gsap | 3.14.2 | High-performance animations |
| react-google-recaptcha | 3.1.0 | reCAPTCHA v2 integration |
| clsx | - | Conditional class strings |
| tailwind-merge | - | Merge Tailwind classes without conflicts |

## Dev Dependencies

- **TypeScript:** ~5.x
- **ESLint:** 9.x with `eslint-config-next`
- **PostCSS:** With Tailwind plugin
- **@tailwindcss/postcss:** PostCSS integration for Tailwind v4

## Configuration

- **TypeScript:** `tsconfig.json` — strict mode, path alias `@/*` → project root
- **Next.js:** `next.config.ts` — Pexels image domain allowlist
- **ESLint:** `eslint.config.mjs` — Next.js recommended rules
- **PostCSS:** `postcss.config.mjs` — Tailwind plugin
- **Tailwind:** Custom brand colors (`brand-purple`, `brand-purple-dark`, `brand-purple-light`)

## Build & Scripts

- `npm run dev` — Development server
- `npm run build` — Production build
- `npm run start` — Production server
- `npm run lint` — ESLint check
