# Implementation Roadmap

## Phase 0 — Planning and content verification

- [x] Confirm target audience and positioning.
- [x] Lock personal-brand direction and secondary Abeeb Digital Studio mention.
- [x] Lock light-first visual direction and restrained 3D approach.
- [x] Establish core service areas: websites, web applications, backend/APIs and AI integration.
- [x] Establish primary booking CTA and WhatsApp alternative.
- [x] Define homepage, project and case-study experience.
- [ ] Confirm public display name and approve professional avatar asset.
- [ ] Verify Ritewheel and FixTrust feature/status claims.
- [ ] Gather current screenshots and project links.
- [ ] Prepare current CV PDF.
- [ ] Select booking provider and configure Africa/Lagos availability.
- [ ] Approve WhatsApp number and pre-filled message.
- [ ] Confirm public email, professional/social links and domain.
- [ ] Finalise exact 3D visual asset/concept and design tokens against approved references.

**Exit condition:** Product, content and visual requirements are approved; required assets and external contact destinations are available before implementation.

## Phase 1 — Project foundation

- [ ] Initialise Next.js App Router with TypeScript.
- [ ] Configure Tailwind and global design tokens from the approved light-first system.
- [ ] Configure ESLint and formatting conventions.
- [ ] Establish metadata, fonts and base layout.
- [ ] Add reusable buttons, links, containers and section primitives.
- [ ] Add typed public contact configuration.
- [ ] Add CI checks for lint, typecheck and build.

**Exit condition:** Clean production build and responsive foundation.

## Phase 2 — Core homepage

- [ ] Build navigation and mobile menu.
- [ ] Build hero content, avatar composition and primary CTAs.
- [ ] Implement capability summary and service sections.
- [ ] Implement selected-project cards.
- [ ] Build About section and CV link.
- [ ] Build process and final contact sections.
- [ ] Add footer and approved social links.

**Exit condition:** All key information and contact paths are available and usable without 3D.

## Phase 3 — 3D and motion enhancement

- [ ] Prototype the restrained modular 3D hero visual independently.
- [ ] Measure loading and runtime impact.
- [ ] Add dynamic loading and static fallback.
- [ ] Add reduced-motion and touch-device behaviour.
- [ ] Add restrained transitions and scroll reveals.
- [ ] Remove or simplify any effect that meaningfully harms performance.

**Exit condition:** Visual enhancement does not degrade core page performance or usability.

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
- [ ] Add WhatsApp click-to-chat with the approved number and pre-filled message.
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
