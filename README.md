# portfolio

Personal developer portfolio for **Babatunde Abeeb Seun**, built to help business owners understand the work, see product projects and start a conversation.

## Experience and stack

- Next.js App Router, React and TypeScript.
- Custom CSS design tokens with equally considered light and dark themes.
- Motion for React (Framer Motion lineage) for tactile interactions and restrained reveals.
- Three.js, React Three Fiber and Drei for one deferred, interactive hero scene.
- Space Grotesk display typography and Inter body typography.

The light/dark choice follows the device preference on first visit and remembers a visitor's manual selection. The 3D scene has a lightweight CSS fallback and is skipped when reduced motion is preferred or WebGL is unavailable.

## Run locally

Requirements: Node.js 20.9 or later and npm.

    npm install
    npm run dev

Open http://localhost:3000.

Useful checks:

    npm run lint
    npm run typecheck
    npm run build

## Temporary assets and details

- The hero portrait is a replaceable placeholder. The professional photo and 3D-styled portrait will be added when the approved photo is ready.
- Ritewheel Autos and FixTrust use clearly labelled temporary concept artwork. Replace it with current product screenshots before launch.
- LinkedIn and X are shown as “updating soon” until the correct public profile URLs are supplied.
- The discovery-call button temporarily opens an email draft until the scheduling provider and booking URL are configured.
- WhatsApp and email currently use the contact details approved for this portfolio.

## Configuration

Update public links and contact details in src/data/site.ts. Do not put secrets in this file. Server-only secrets belong in environment variables and must never use a NEXT_PUBLIC_ prefix.

## Project documentation

See docs/ for the product brief, design and performance specification, content plan, technical architecture and implementation roadmap.
