# Implementation Roadmap

## Phase 0 — Planning and content verification

- [x] Confirm target audience and positioning.
- [x] Lock personal-brand direction and secondary Abeeb Digital Studio mention.
- [x] Lock the dual-theme luxury direction: cinematic dark mode and refined light mode.
- [x] Lock balanced Motion for React interactions; no GSAP.
- [x] Agree on a deferred interactive 3D hero scene and a replaceable real-photo portrait workflow.
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
- [x] Add shared light and dark CSS design tokens and responsive base styles (custom CSS; no Tailwind dependency).
- [x] Add a theme toggle, system-preference default and persisted visitor choice with pre-paint initialization.
- [x] Add Motion for React and reusable reveal/tactile-action components.
- [x] Configure ESLint.
- [x] Establish metadata, Space Grotesk / Inter font loading and root layout.
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

## Phase 3 — Hero 3D and motion refinement

- [x] Design and implement one interactive Three.js / React Three Fiber hero visual.
- [x] Lazy-load the 3D scene; provide a CSS fallback when WebGL is unavailable or reduced motion is enabled.
- [x] Add subtle pointer response and slow movement without distracting from the headline.
- [ ] Create a 3D-styled rendered portrait from the approved professional photograph.
- [ ] Replace the initials placeholder without changing the hero layout.
- [ ] Optimise the final portrait image and provide responsive dimensions.
- [x] Add the first pass of Motion entrance, hover and press interactions across the site.
- [ ] Test reduced-motion behaviour and verify the page remains complete without animation.

**Current status:** The orbital scene is implemented as a lazy-loaded R3F canvas, animates only near the viewport, pauses when the tab is hidden, and is skipped for reduced-motion users or unsupported WebGL. Local build, device testing and visual tuning remain.

**Exit condition:** The hero feels distinctive and tactile while remaining responsive, accessible and usable without WebGL or animation.

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
- [ ] Test both themes, persistence, reduced motion and no-WebGL fallback.
- [ ] Check SEO metadata and social previews.
- [ ] Measure production Lighthouse and Core Web Vitals.
- [ ] Verify production email delivery, booking confirmation, WhatsApp link and CV download.
- [ ] Deploy to Vercel and verify custom domain if available.

**Exit condition:** Production site is fast, accessible, responsive, accurate and ready to share.

## Scope discipline

Do not add CMS, database, authentication, custom booking backend, blog, dashboard or extra AI features in v1 without a demonstrated user need. Every new dependency must justify its maintenance and performance cost.
