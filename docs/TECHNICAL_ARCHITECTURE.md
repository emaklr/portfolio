# Technical Architecture

## 1. Architecture overview

A mostly static, content-driven Next.js application with server-rendered pages and a small number of server endpoints for contact delivery. No database is required for v1.

Core principles:
- Server Components by default.
- Client Components only where interactivity is required.
- Static or dynamically rendered pages based on actual content needs.
- 3D and animation code split into optional, deferred bundles.
- No client-side data fetching for content that can be rendered at build time.
- Keep third-party scripts and dependencies minimal.
- Use an external booking provider rather than building a scheduling system.

## 2. Proposed stack

| Concern | Choice | Rationale |
|---|---|---|
| Framework | Next.js App Router | Routing, metadata, server rendering, static generation and route handlers |
| Language | TypeScript | Typed content models and safer refactoring |
| Styling | Tailwind CSS | Consistent responsive implementation |
| 3D | Three.js + React Three Fiber + Drei | Optional hero-level 3D experience |
| Motion | Motion | Focused UI animation and interaction |
| Icons | Lucide React | Consistent icon system |
| Forms | React Hook Form | Contact form state and validation UX |
| Validation | Zod | Shared schema and server-side validation |
| Email | Resend | Contact enquiry delivery |
| Booking | Calendly or an equivalent provider (to be selected) | Availability, booking confirmation and calendar handling without a custom backend |
| Direct contact | WhatsApp click-to-chat link | Simple alternative contact path |
| Hosting | Vercel | Next.js deployment and preview environments |
| Source control | GitHub | Versioning and collaboration |
| Analytics | Vercel Analytics (subject to consent/privacy review) | Lightweight traffic insight |
| E2E testing | Playwright | Key journey and responsive browser testing |
| Linting | ESLint | Static code quality checks |

Versions will be selected at project initialisation based on stable, mutually compatible releases. Avoid installing libraries until they are needed.

## 3. Rendering and component strategy

- Homepage and project content should be Server Components wherever possible.
- Project case studies should use static generation from typed local data.
- Navigation, contact form and interactive 3D may be Client Components.
- Load the 3D scene with dynamic import and an explicit static fallback.
- Prefer CSS transitions for simple hover/focus states; do not use a JS animation library for every effect.
- Do not hydrate sections that do not need browser interaction.
- The booking CTA should normally be a normal external link. Consider an embedded scheduler only after measuring mobile performance and usability.

## 4. Routes

- / — homepage and core narrative.
- /projects — all selected projects.
- /projects/[slug] — detailed case study.
- /api/contact — POST endpoint for optional contact form submission.

Do not add a custom booking route or scheduler backend for v1. The booking action links to the selected provider. WhatsApp uses a click-to-chat link.

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

These values are public website content, not secrets. Do not invent placeholder destinations that accidentally ship to production. The booking URL, WhatsApp number and public identity must be approved before launch.

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
- Do not expose a personal number until the developer explicitly approves it for public use.

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
