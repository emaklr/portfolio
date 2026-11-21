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
| Hosting | Vercel | Next.js deployment and preview environments |
| Source control | GitHub | Versioning and collaboration |
| Analytics | Vercel Analytics (subject to consent/privacy review) | Lightweight traffic insight |
| E2E testing | Playwright | Key journey and responsive browser testing |
| Linting | ESLint | Static code quality checks |

Versions will be selected at project initialisation based on stable, mutually compatible releases. Avoid installing libraries until they are needed.

## 3. Rendering and component strategy

- Homepage and project content should be Server Components wherever possible.
- Project case studies should use static generation from typed local data.
- Navigation, contact form, theme toggle (if selected), and interactive 3D may be Client Components.
- Load the 3D scene with dynamic import and an explicit loading/fallback state.
- Prefer CSS transitions for simple hover/focus states; do not use a JS animation library for every effect.
- Do not hydrate sections that do not need browser interaction.

## 4. Routes

- `/` — homepage and core narrative.
- `/projects` — all selected projects.
- `/projects/[slug]` — detailed case study.
- `/api/contact` — POST endpoint for contact form submission.

Potential future routes, not part of v1: `/resume`, `/writing`, or individual service landing pages.

## 5. Content model

Keep content in typed files under `src/data`.

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

## 7. CV delivery

- Store the approved PDF in `public/documents/`.
- Use a stable, human-readable filename.
- Confirm the PDF is current, ATS-readable, and consistent with the portfolio.
- Test the download on desktop and mobile.
- Do not publish private contact details beyond those deliberately approved for public use.

## 8. Proposed folder structure

```text
portfolio/
├── public/
│   ├── images/
│   ├── models/
│   ├── textures/
│   ├── icons/
│   └── documents/
├── docs/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts
│   │   ├── projects/[slug]/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── projects/
│   │   ├── ui/
│   │   └── forms/
│   ├── features/
│   │   └── hero-3d/
│   ├── data/
│   ├── lib/
│   ├── hooks/
│   └── types/
├── tests/
├── .env.example
├── README.md
└── package.json
```

Structure may be adjusted to keep related code colocated; do not create empty abstraction layers just to match the diagram.

## 9. Environment variables

Initial expected server-side variable:
- `RESEND_API_KEY`

Additional values will be introduced only when the corresponding integration is selected. Document variable names in `.env.example`, never real values.

## 10. Deployment

- GitHub main branch connected to Vercel.
- Preview deployment for branches / pull requests.
- Production deploy from main after checks pass.
- Configure server secrets in Vercel environment settings.
- Verify metadata, canonical URL, contact delivery, CV download, analytics and error states in production.
