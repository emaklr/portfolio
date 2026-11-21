# Implementation Roadmap

## Phase 0 — Planning and content verification
- [ ] Confirm target audience and positioning.
- [ ] Compare light, dark, and hybrid visual directions.
- [ ] Finalise site map and homepage narrative.
- [ ] Verify Ritewheel and FixTrust feature/status claims.
- [ ] Gather screenshots and project links.
- [ ] Prepare current CV PDF.
- [ ] Finalise visual references and design tokens.

**Exit condition:** Product, content, and visual direction are approved before implementation.

## Phase 1 — Project foundation
- [ ] Initialise Next.js App Router with TypeScript.
- [ ] Configure Tailwind and global design tokens.
- [ ] Configure ESLint and formatting conventions.
- [ ] Establish metadata, fonts, and base layout.
- [ ] Add reusable buttons, links, containers, and section primitives.
- [ ] Add CI checks for lint, typecheck, and build.

**Exit condition:** Clean production build and responsive foundation.

## Phase 2 — Core homepage
- [ ] Build navigation and mobile menu.
- [ ] Build hero content and primary CTAs.
- [ ] Implement selected-project cards.
- [ ] Build about and capabilities sections.
- [ ] Build process and contact sections.
- [ ] Add footer and social links.

**Exit condition:** All key information is available and usable without 3D.

## Phase 3 — 3D and motion enhancement
- [ ] Prototype hero visual independently.
- [ ] Measure loading and runtime impact.
- [ ] Add dynamic loading and fallback.
- [ ] Add reduced-motion and touch-device behaviour.
- [ ] Add restrained transitions and scroll reveals.

**Exit condition:** Visual enhancement does not degrade core page performance or usability.

## Phase 4 — Project case studies and CV
- [ ] Build typed project content model.
- [ ] Implement project listing route.
- [ ] Implement dynamic case-study route.
- [ ] Add verified screenshots and project links.
- [ ] Add downloadable CV and test it.

**Exit condition:** Featured projects are clear, accurate, and demonstrable.

## Phase 5 — Contact and integrations
- [ ] Implement contact form.
- [ ] Add server-side Zod validation.
- [ ] Configure Resend securely.
- [ ] Add rate limiting and spam protection.
- [ ] Add lightweight analytics after privacy review.

**Exit condition:** Enquiries can be reliably delivered without exposing secrets.

## Phase 6 — Quality assurance and launch
- [ ] Run Playwright tests for navigation, project routes, contact, and CV.
- [ ] Test keyboard navigation and focus.
- [ ] Test mobile and tablet layouts.
- [ ] Test reduced motion and no-WebGL fallback.
- [ ] Check SEO metadata and social previews.
- [ ] Measure production Lighthouse and Core Web Vitals.
- [ ] Verify production contact email and CV download.
- [ ] Deploy to Vercel and verify custom domain if available.

**Exit condition:** Production site is fast, accessible, responsive, accurate, and ready to share.

## Scope discipline

Do not add CMS, database, authentication, blog, dashboard, or extra AI features in v1 without a demonstrated user need. Every new dependency must justify its maintenance and performance cost.
