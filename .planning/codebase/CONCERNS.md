# Concerns

**Analysis Date:** 2026-03-21

## Technical Debt

### No Testing Infrastructure
- **Severity:** Medium
- **Impact:** No automated verification of component behavior or regressions
- **Location:** Project-wide
- **Recommendation:** Add Vitest + React Testing Library for critical paths

### Hardcoded External URLs
- **Severity:** Low-Medium
- **Impact:** Google Apps Script webhook URL hardcoded in contact form; difficult to change per environment
- **Location:** `app/contact/page.tsx`
- **Recommendation:** Move to environment variables

### No Environment Configuration
- **Severity:** Medium
- **Impact:** reCAPTCHA site key and webhook URLs not configurable per environment
- **Location:** `app/contact/page.tsx`
- **Recommendation:** Use `.env.local` with `NEXT_PUBLIC_` prefix for client-side config

## Security

### reCAPTCHA Client-Side Only
- **Severity:** Medium
- **Impact:** reCAPTCHA token not verified server-side; form submissions could be spoofed
- **Location:** `app/contact/page.tsx`
- **Recommendation:** Add API route to verify token with Google before processing

### No Content Security Policy
- **Severity:** Low
- **Impact:** No CSP headers configured; relies on Next.js defaults
- **Location:** `next.config.ts`
- **Recommendation:** Add CSP headers for production

## Performance

### Multiple Animation Libraries
- **Severity:** Low
- **Impact:** Both GSAP (3.14.2) and Framer Motion (12.29.2) are bundled, increasing JS payload
- **Location:** `package.json`, various components
- **Recommendation:** Consolidate to one animation library if possible

### Large Video Asset
- **Severity:** Low
- **Impact:** Hero video (`public/media/hero-vid.mp4`) loads on homepage
- **Location:** `components/HeroSection.tsx`
- **Recommendation:** Ensure lazy loading and consider video compression/CDN

### Remote Images from Pexels
- **Severity:** Low
- **Impact:** External image loading depends on Pexels CDN availability
- **Location:** Various components via `next/image`
- **Recommendation:** Consider self-hosting critical images

## Fragile Areas

### Navbar Scroll Detection
- **Location:** `components/Navbar.tsx`
- **Risk:** Manual scroll event listener with threshold-based styling changes; could have edge cases on different viewports

### Google Apps Script Dependency
- **Location:** `app/contact/page.tsx`
- **Risk:** Form submission depends entirely on external Google Apps Script; no fallback or error handling if script is unavailable

## Missing Capabilities

- No analytics/tracking integration
- No SEO sitemap generation
- No internationalization (i18n)
- No accessibility (a11y) testing or ARIA audit
- No error monitoring (Sentry, etc.)
- No CI/CD pipeline
