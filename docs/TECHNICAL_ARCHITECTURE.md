# Technical Architecture

## 1. Architecture overview

A mostly static, content-driven Next.js application with server-rendered pages and a small number of server endpoints for contact delivery. No database is required for v1.

Core principles:
- Server Components by default.
- Client Components only where interactivity is required.
- Static or dynamically rendered pages based on actual content needs.
- The portrait is an optimised static asset derived from the developer's real photograph.
- A separate interactive 3D hero scene may use WebGL, but it must be optional, lazy-loaded and backed by a lightweight fallback.
- The light/dark theme is applied before first paint and an explicit visitor choice is persisted.
- No client-side data fetching for content that can be rendered at build time.
- Keep third-party scripts and dependencies minimal.
- Use an external booking provider rather than building a scheduling system.

## 2. Proposed stack

| Concern | Choice | Rationale |
|---|---|---|
| Framework | Next.js App Router | Routing, metadata, server rendering, static generation and route handlers |
| Language | TypeScript | Typed content models and safer refactoring |
| Styling | Custom global CSS and design tokens | Bespoke visual system with a small dependency footprint |
| 3D | Three.js + React Three Fiber + Drei for one deferred hero scene; static 3D-styled portrait image + CSS fallback | Real depth in the hero without turning every section into a WebGL scene |
| Motion | Motion for React (Framer Motion lineage) + CSS transitions | Tactile press feedback, restrained reveals and interactive movement; no GSAP |
| Themes | CSS custom properties + a small client-side theme toggle and pre-hydration bootstrap | Light and dark themes share one component system without a flash on initial load |
| Icons | Text arrows and lightweight inline SVG | Avoid an icon package for a small number of visual cues |
| Forms | Native HTML controls initially | Keep the first contact experience simple; add a form library only if a form is implemented |
| Validation | Server-side validation if a form is added | Validate untrusted input at the server boundary |
| Email | Direct mailto link initially; provider integration only if a contact form is added | Avoid a backend until there is a demonstrated need |
| Booking | Calendly or an equivalent provider (to be selected) | Availability, booking confirmation and calendar handling without a custom backend |
| Direct contact | WhatsApp click-to-chat link | Simple alternative contact path |
| Hosting | Vercel | Next.js deployment and preview environments |
| Source control | GitHub | Versioning and collaboration |
| Analytics | Vercel Analytics (subject to consent/privacy review) | Lightweight traffic insight |
| E2E testing | Playwright | Key journey and responsive browser testing |
| Linting | ESLint | Static code quality checks |

Initial implementation baseline: Next.js 16.4.6, React 19.3.1 and TypeScript 5.9.x, with Node.js 20.9 or later. The project uses custom CSS rather than Tailwind and now includes Motion for React for selected interactions. The interactive Three.js / React Three Fiber hero scene is a subsequent implementation step; do not add its dependencies until that scene is built. No form library, Zod or Resend is installed. The exact dependency versions are recorded in package.json.

## 3. Rendering and component strategy

- Homepage and project content should be Server Components wherever possible.
- Project case studies should use static generation from typed local data.
- Keep page content server-rendered. The header uses a small client-side mobile-menu control and a theme switch.
- A small pre-hydration script reads the saved theme or the operating-system preference and applies `data-theme` before the page paints. The theme toggle stores an explicit choice in localStorage.
- Motion components are isolated in small client components for selected reveals and tactile links; ordinary page content remains server-rendered.
- The portrait is a static optimised image placed inside a CSS perspective composition.
- The interactive 3D hero scene is a separate client component, dynamically imported and deferred. Provide a CSS or static fallback when WebGL is unavailable or reduced motion is requested.
- Prefer CSS transitions for simple colour and focus states; do not use a JS animation library for every effect.
- Do not hydrate sections that do not need browser interaction.
- The booking CTA should normally be a normal external link. Consider an embedded scheduler only after measuring mobile performance and usability.

## 4. Routes

- / — homepage and core narrative.
- /projects — all selected projects.
- /projects/[slug] — detailed case study.
- /api/contact — POST endpoint for optional contact form submission.

Do not add a custom booking route or scheduler backend for v1. The booking action links to the selected provider when configured; until then it uses an email-draft fallback. WhatsApp uses a click-to-chat link. The homepage currently has direct email and WhatsApp actions; a contact form and its API endpoint remain optional future work.

## 5. Content model

Keep content in typed files under src/data.

### Project
- slug
- title
- shortDescription
- audienceProblem
- solution
- roleAndOwnership
- status (e.g. deployed, in-progress, prototype)
- technology[]
- keyFeatures[]
- architectureNotes
- challengesAndTradeoffs[]
- screenshots[]
- liveUrl (optional)
- sourceUrl (optional; omit for private repositories)
- disclaimer (optional)

### Skills
Group skills by actual experience area (frontend, backend, data, integrations, delivery). Avoid proficiency percentages unless defensible.

### Experience / About
Use factual timeline entries and explain self-directed product work accurately. Do not imply employment or commercial client engagements that did not occur.

### Public contact configuration
Keep public, non-secret contact destinations in one typed configuration module:
- Approved public display name.
- Discovery-call booking URL.
- WhatsApp phone number or click-to-chat URL.
- Approved email and professional/social profile URLs.
- CV document path.

These values are public website content, not secrets. Do not invent placeholder destinations that accidentally ship to production. The public name, email and WhatsApp number have been supplied and are centralised in src/data/site.ts. LinkedIn and X remain empty until final profile URLs are supplied. The discovery-call button currently uses an email-draft fallback; replace it with the selected scheduler URL before launch.

## 6. Contact endpoint

- Accept POST only.
- Validate request body with Zod on the server.
- Enforce payload size and field length limits.
- Normalise and validate email address.
- Add honeypot and rate limiting; select a production-appropriate rate-limit mechanism before launch.
- Keep Resend API key server-only.
- Never expose secrets with NEXT_PUBLIC_ variables.
- Return generic, useful success/error messages without exposing provider internals.
- Avoid collecting unnecessary personal data.
- Do not store contact submissions in a database for v1 unless a demonstrated requirement emerges.

## 7. Discovery-call booking and WhatsApp

### Booking provider
- Select Calendly or an equivalent scheduling provider before implementation.
- Configure available days/hours, meeting length, buffer, minimum notice and confirmation workflow.
- The booking page must use Africa/Lagos timezone availability and display timezone information clearly.
- Store the approved booking URL in typed public configuration.
- Prefer a link to the provider's booking page. If an inline embed is chosen, load it lazily and provide a normal link fallback.
- Let the provider own availability, confirmation, rescheduling and calendar invitations.
- Do not create local calendar logic, booking tables, authentication or a custom scheduling API.

### WhatsApp
- Build the click-to-chat link from the approved public phone number and encoded pre-filled message.
- Keep it as a secondary contact action beside the booking action.
- Verify the link from desktop and mobile, including devices without WhatsApp installed.
- The developer has approved +234 816 701 4764 for the public portfolio. Keep the number centralised in src/data/site.ts and verify the wa.me link before launch.

### Privacy
- Collect only information needed to arrange the conversation.
- Review the scheduling provider's privacy settings and data handling before launch.
- Do not send sensitive project details to analytics.
- Disclose third-party booking or analytics services in the site's privacy information if required.

## 8. CV delivery

- Store the approved PDF in public/documents/.
- Use a stable, human-readable filename.
- Confirm the PDF is current, ATS-readable and consistent with the portfolio.
- Test the download on desktop and mobile.
- Do not publish private contact details beyond those deliberately approved for public use.

## 9. Proposed folder structure

portfolio/
- public/ (images/, models/, textures/, icons/, documents/)
- docs/
- src/app/ (api/contact/, projects/[slug]/, projects/, layout, page, globals)
- src/components/ (layout/, sections/, projects/, ui/, forms/)
- src/features/hero-3d/
- src/data/
- src/lib/
- src/hooks/
- src/types/
- tests/
- .env.example
- README.md
- package.json

Structure may be adjusted to keep related code colocated; do not create empty abstraction layers just to match the diagram.

## 10. Environment variables

Initial expected server-side variable:
- RESEND_API_KEY

Additional values will be introduced only when the corresponding integration is selected. Document variable names in .env.example, never real values. Public booking and WhatsApp destinations belong in typed public configuration, not secret environment variables.

## 11. Deployment

- GitHub main branch connected to Vercel.
- Preview deployment for branches / pull requests.
- Production deploy from main after checks pass.
- Configure server secrets in Vercel environment settings.
- Verify metadata, canonical URL, contact delivery, booking journey, WhatsApp link, CV download, analytics and error states in production.
