# Integrations

**Analysis Date:** 2026-03-21

## External Services

### Google reCAPTCHA v2
- **Package:** `react-google-recaptcha` 3.1.0
- **Usage:** Form protection on `/app/contact/page.tsx`
- **Config:** Site key passed as prop to `<ReCAPTCHA>` component

### Google Apps Script Webhook
- **URL:** `https://script.google.com/macros/s/AKfycbz9NrugN5gc9DdCjeiBRjgf1jak-VtamyJKfgiE5LwgTqIS3JRFewDKYqPK1aZmpGUTPA/exec`
- **Purpose:** Form submission handler (contact form data)
- **Method:** POST with form data

### Pexels CDN
- **Domains:** `images.pexels.com`, `videos.pexels.com`
- **Usage:** Remote images configured in `next.config.ts` image domains
- **Purpose:** Stock imagery for marketing sections

### WhatsApp
- **Integration:** Deep link via `https://wa.me/` URLs
- **Component:** `components/WhatsAppButton.tsx`
- **Purpose:** Direct messaging CTA for visitors

### Email
- **Address:** `contact@betaai.ai`
- **Usage:** Contact information displayed in Footer

## Databases

None — static marketing site with no database.

## Authentication

None — public-facing marketing site.

## APIs Consumed

| Service | Protocol | Auth | Location |
|---------|----------|------|----------|
| Google Apps Script | HTTPS POST | None (public endpoint) | `app/contact/page.tsx` |
| Pexels CDN | HTTPS GET | None (public images) | `next.config.ts` |
| Google reCAPTCHA | Client-side widget | Site key | `app/contact/page.tsx` |

## APIs Exposed

None — no API routes defined in `app/api/`.
