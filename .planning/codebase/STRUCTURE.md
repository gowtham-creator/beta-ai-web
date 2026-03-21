# Codebase Structure

**Analysis Date:** 2026-03-21

## Directory Layout

```
beta-ai-web/
├── app/                    # Next.js App Router pages and layout
│   ├── layout.tsx          # Root layout (metadata, global wrapper)
│   ├── page.tsx            # Homepage
│   ├── contact/page.tsx    # Contact form with reCAPTCHA
│   ├── about/page.tsx      # About page
│   ├── schools/page.tsx    # Schools offering
│   ├── colleges/page.tsx   # Colleges offering
│   ├── centres/page.tsx    # Learning centres
│   ├── ai-education/page.tsx # AI education info
│   ├── privacy/page.tsx    # Privacy policy
│   ├── terms/page.tsx      # Terms of service
│   ├── refund/page.tsx     # Refund policy
│   └── cookies/page.tsx    # Cookie policy
├── components/             # React components
│   ├── HeroSection.tsx     # Landing hero with video
│   ├── Navbar.tsx          # Navigation with scroll detection
│   ├── Footer.tsx          # Footer with newsletter signup
│   ├── WhatWeDoSection.tsx
│   ├── WhyBetaAISection.tsx
│   ├── ImpactSection.tsx
│   ├── WhyChooseUsSection.tsx
│   ├── AIForSchoolsSection.tsx
│   ├── AICentresSection.tsx
│   ├── ProgramsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CTASection.tsx
│   ├── BgDecorations.tsx   # Decorative SVG backgrounds
│   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   └── ui/                 # UI primitives
│       ├── scroll-animation.tsx
│       ├── background-gradient-animation.tsx
│       └── dot-pattern.tsx
├── lib/                    # Shared utilities
│   └── utils.ts            # cn() class merge helper
├── public/                 # Static assets
│   ├── images/             # Logos, photos
│   ├── assets/             # SVG decorations
│   └── media/              # Video files (hero-vid.mp4)
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
├── eslint.config.mjs
└── postcss.config.mjs
```

## Naming Conventions

- **Components:** PascalCase files (`HeroSection.tsx`, `Navbar.tsx`)
- **UI primitives:** kebab-case (`scroll-animation.tsx`, `dot-pattern.tsx`)
- **Utilities:** camelCase (`utils.ts`)
- **Routes:** lowercase directories (`app/contact/`, `app/schools/`)
- **Assets:** lowercase with hyphens (`bg-asset-1.svg`, `hero-vid.mp4`)

## Custom Styling Tokens

- Colors: `brand-purple`, `brand-purple-dark`, `brand-purple-light`
- Breakpoints: `sm` (640px), `lg` (1024px), `xl` (1280px)

## Where to Add New Code

| Type | Location | Pattern |
|------|----------|---------|
| New page | `app/[route]/page.tsx` | Compose section components |
| New section | `components/[Name]Section.tsx` | Self-contained with animations |
| UI primitive | `components/ui/[name].tsx` | Reusable, no business logic |
| Utility function | `lib/utils.ts` | Pure function, exported |
| Static asset | `public/assets/` or `public/images/` | Referenced via `/assets/...` |
| Interactive component | Add `"use client"` at top | useState/useEffect ok |
