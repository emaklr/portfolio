# Implementation Roadmap

## Phase 0 — Planning and content verification

- [x] Confirm target audience and positioning.
- [x] Lock personal-brand direction and secondary Abeeb Digital Studio mention.
- [x] Lock light-first visual direction and restrained 3D approach.
- [x] Establish core service areas: websites, web applications, backend/APIs and AI integration.
- [x] Establish primary booking CTA and WhatsApp alternative.
- [x] Define homepage, project and case-study experience.
- [x] Confirm public display name: Babatunde Abeeb Seun.
- [ ] Supply and approve the professional portrait; convert it into a 3D-styled rendered image.
- [ ] Verify Ritewheel and FixTrust feature/status claims.
- [ ] Gather current screenshots and project links.
- [ ] Prepare current CV PDF.
- [ ] Select booking provider and configure Africa/Lagos availability.
- [x] Approve WhatsApp number (+234 816 701 4764) and pre-filled message.
- [x] Confirm public email (seundavid357@gmail.com).
- [ ] Supply LinkedIn and X profile URLs and confirm the portfolio domain.
- [ ] Finalise exact 3D visual asset/concept and design tokens against approved references.

**Exit condition:** Product, content and visual requirements are approved; required assets and external contact destinations are available before implementation.

## Phase 1 — Project foundation

- [x] Initialise Next.js App Router with TypeScript.
- [x] Add the light-first global CSS design tokens and responsive base styles (custom CSS; no Tailwind dependency).
- [x] Configure ESLint.
- [x] Establish metadata, Manrope font loading and root layout.
- [x] Add reusable navigation and project-card components.
- [x] Add typed public content and contact configuration.
- [ ] Add CI checks for lint, typecheck and build.
- [ ] Run and confirm local lint, typecheck and production build.

**Exit condition:** Clean production build and responsive foundation.

## Phase 2 — Core homepage

- [x] Build responsive navigation and mobile menu.
- [x] Build hero content, replaceable portrait composition and primary CTAs.
- [x] Implement capability summary and service sections.
- [x] Implement selected-project cards with temporary illustrations.
- [x] Build About section; add the CV link when the approved PDF is available.
- [x] Build process and final contact sections.
- [x] Add footer and temporary LinkedIn/X placeholders.

**Current status:** The first responsive homepage is in place. The hero portrait is a CSS placeholder, and the booking CTA still uses an email fallback.

**Exit condition:** All key information and contact paths are available and usable without 3D.

## Phase 3 — Portrait asset and motion refinement

- [ ] Create a 3D-styled rendered portrait from the approved professional photo.
- [ ] Replace the initials placeholder without changing the hero layout.
- [ ] Optimise the final portrait image and provide responsive dimensions.
- [ ] Review CSS perspective details and simplify them on mobile.
- [ ] Add motion only where it improves feedback or hierarchy.
- [ ] Test reduced-motion behaviour and verify the page remains complete without animation.

**Exit condition:** The personal portrait feels distinctive while remaining a lightweight static asset; no WebGL runtime is required for the portrait.

## Phase 4 — Project case studies and CV

- [ ] Build typed project content model.
- [ ] Implement project listing route.
- [ ] Implement case-study route.
- [ ] Add verified screenshots and project links.
- [ ] Accurately label each project's status and feature maturity.
- [ ] Add downloadable CV and test it.

**Exit condition:** Featured projects are clear, accurate and demonstrable.

## Phase 5 — Booking, contact and integrations

- [ ] Select and configure the external booking provider.
- [ ] Add the Book a Discovery Call action to the header, hero and contact section.
- [ ] Verify scheduler timezone, availability, booking questions and confirmation.
- [x] Add WhatsApp click-to-chat with the approved number and pre-filled message.
- [ ] Implement optional contact form.
- [ ] Add server-side Zod validation.
- [ ] Configure Resend securely.
- [ ] Add rate limiting and spam protection.
- [ ] Add lightweight analytics after privacy review.

**Exit condition:** Visitors can book a conversation, use WhatsApp or submit an enquiry; no secrets are exposed.

## Phase 6 — Quality assurance and launch

- [ ] Run Playwright tests for navigation, project routes, booking, WhatsApp, contact and CV.
- [ ] Test keyboard navigation and visible focus.
- [ ] Test mobile and tablet layouts.
- [ ] Test reduced motion and no-WebGL fallback.
- [ ] Check SEO metadata and social previews.
- [ ] Measure production Lighthouse and Core Web Vitals.
- [ ] Verify production email delivery, booking confirmation, WhatsApp link and CV download.
- [ ] Deploy to Vercel and verify custom domain if available.

**Exit condition:** Production site is fast, accessible, responsive, accurate and ready to share.

## Scope discipline

Do not add CMS, database, authentication, custom booking backend, blog, dashboard or extra AI features in v1 without a demonstrated user need. Every new dependency must justify its maintenance and performance cost.
