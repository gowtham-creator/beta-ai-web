# Conventions

**Analysis Date:** 2026-03-21

## Code Style

- **Indentation:** 2 spaces
- **Quotes:** Double quotes in JSX, single quotes in imports
- **Semicolons:** Consistent usage
- **Line length:** No strict limit, but lines generally kept readable
- **Linting:** ESLint 9 with `eslint-config-next`
- **TypeScript:** Strict mode enabled

## Naming Patterns

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `HeroSection`, `WhatsAppButton` |
| Functions | camelCase | `handleSubmit`, `toggleMenu` |
| Variables | camelCase | `isScrolled`, `menuOpen` |
| CSS classes | Tailwind utilities | `bg-brand-purple text-white` |
| Files (components) | PascalCase | `HeroSection.tsx` |
| Files (utilities) | camelCase/kebab-case | `utils.ts`, `scroll-animation.tsx` |
| Directories | lowercase | `components/`, `app/contact/` |

## Import Organization

1. Next.js imports (`next/image`, `next/link`)
2. Third-party libraries (`framer-motion`, `gsap`, `react-google-recaptcha`)
3. Local imports with `@/*` path alias (`@/components/...`, `@/lib/utils`)

## Component Patterns

### Client vs Server Components
- **Default:** Server components (no directive needed)
- **Interactive:** `"use client"` at file top for components using hooks/events
- **Client components:** `Navbar.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`, scroll animations

### Section Component Structure
```tsx
"use client"; // if interactive

export default function FeatureSection() {
  return (
    <section className="relative py-20 ...">
      <BgDecorations ... />
      <div className="max-w-7xl mx-auto px-4 ...">
        <ScrollElement direction="up">
          {/* Content */}
        </ScrollElement>
      </div>
    </section>
  );
}
```

### Page Composition
```tsx
// app/page.tsx
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
// ...

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      {/* More sections in order */}
    </>
  );
}
```

## Styling Patterns

- **Approach:** Tailwind utility classes directly in className
- **Dynamic classes:** `cn()` utility from `lib/utils.ts` for conditional merging
- **Responsive:** Mobile-first with `sm:`, `lg:`, `xl:` breakpoint prefixes
- **Brand colors:** Custom tokens in Tailwind config
- **No CSS modules or styled-components**

## Error Handling

- Simple early returns and null checks
- HTML5 `required` attribute for form validation
- No try-catch patterns observed (no API routes or complex async)
- No error boundary components

## Animation Patterns

- **Scroll animations:** `<ScrollElement direction="up|left|right" delay={0.2}>` wrapper
- **Navbar transitions:** Framer Motion for mobile menu, CSS transitions for scroll styling
- **GSAP:** Used for more complex timeline animations
- **Viewport triggers:** Framer Motion `whileInView` with configurable threshold
