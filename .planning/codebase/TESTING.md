# Testing

**Analysis Date:** 2026-03-21

## Current State

**No testing framework is currently installed or configured.**

- No Jest, Vitest, or Testing Library in dependencies
- No test files found in the codebase
- No test scripts in `package.json`
- No CI/CD pipeline for automated testing

## Type Safety

- TypeScript strict mode provides compile-time type checking
- ESLint with Next.js config catches common issues
- No runtime validation libraries (Zod, Yup, etc.)

## Quality Gaps

| Area | Status | Risk |
|------|--------|------|
| Unit tests | Missing | Medium — utility functions untested |
| Component tests | Missing | Medium — interactive components (Navbar, forms) untested |
| E2E tests | Missing | Low — marketing site with minimal interactivity |
| Visual regression | Missing | Low — but animation-heavy site could benefit |
| Accessibility testing | Missing | Medium — no a11y audit tooling |

## Recommendations

If testing is added, recommended approach:

- **Framework:** Vitest (fast, native ESM/TypeScript support)
- **Component testing:** React Testing Library
- **E2E:** Playwright (for cross-browser)
- **Co-location:** Test files alongside components (`Component.test.tsx`)
- **Priority targets:**
  1. `lib/utils.ts` — `cn()` function
  2. `components/Navbar.tsx` — scroll detection, mobile menu toggle
  3. `app/contact/page.tsx` — form submission, reCAPTCHA flow
  4. `components/ui/scroll-animation.tsx` — animation wrapper behavior
