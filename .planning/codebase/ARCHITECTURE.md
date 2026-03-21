# Architecture

**Analysis Date:** 2026-03-21

## Pattern Overview

**Overall:** Next.js App Router with component-based UI architecture

**Key Characteristics:**
- File-system based routing using Next.js App Router
- Server-side rendered marketing website with selective client-side interactivity
- Modular section-based components composed into landing pages
- Framer Motion for scroll-triggered animations
- Tailwind CSS for styling with Tailwind Merge for dynamic class composition

## Layers

### Presentation Layer (Components)
- **Purpose:** Render UI sections and interactive elements
- **Location:** `components/`
- **Contains:** Section components (HeroSection, Footer, Navbar), UI primitives (scroll-animation.tsx, dot-pattern.tsx), utility components (BgDecorations, WhatsAppButton)
- **Depends on:** React, Next.js Image/Link, Framer Motion, Tailwind CSS

### Page/Routing Layer
- **Purpose:** Define route structure and compose sections into complete pages
- **Location:** `app/`
- **Contains:** Page components (`page.tsx` files) and root layout (`layout.tsx`)
- **Depends on:** Next.js App Router, presentation components

### Utility Layer
- **Purpose:** Provide shared utility functions
- **Location:** `lib/utils.ts`
- **Contains:** `cn()` helper for conditional class merging (clsx + tailwind-merge)

### Configuration Layer
- **Purpose:** App configuration and build setup
- **Location:** `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`

## Data Flow

1. User navigates to route (e.g., `/`)
2. Next.js router matches route to page component in `app/` directory
3. Root layout wraps page with global metadata and WhatsAppButton
4. Page component imports and composes section components in order
5. Section components render with Tailwind styling and Framer Motion animations
6. Client-side state (menu toggle, scroll detection) updates interactively
7. Scroll-triggered animations fire when components enter viewport

## State Management

- **Minimal** — only client components use React hooks (useState, useEffect)
- Navbar: scroll position tracking, mobile menu toggle
- Footer: newsletter email input
- Contact: form fields, reCAPTCHA token
- No global state management library needed

## Key Abstractions

- **ScrollElement:** `components/ui/scroll-animation.tsx` — HOC using Framer Motion whileInView
- **BgDecorations:** `components/BgDecorations.tsx` — Decorative SVGs with CSS filters
- **Section Components:** Self-contained page sections with backgrounds, content, animations
- **Client Component Marker:** `"use client"` directive for interactive components

## Entry Points

- **Root Layout:** `app/layout.tsx` — wraps all pages with metadata, global styles, WhatsAppButton
- **Home Page:** `app/page.tsx` — composes all marketing sections
- **Route Pages:** `app/[route]/page.tsx` — individual content pages
