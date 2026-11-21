# Design System, Experience Specification and Performance Requirements

## 1. Design direction — locked

The portfolio uses a **light-first, premium editorial interface**. It should feel clear, confident, thoughtful and modern: a distinctive personal brand, not a generic developer template, an agency landing-page clone or a 3D experiment.

The visual system uses:
- A warm near-white canvas, white surfaces and deep ink typography.
- A restrained cobalt-blue accent for primary actions and key details.
- Strong editorial typography, generous whitespace and clear hierarchy.
- Large, carefully composed product imagery.
- A professional avatar as the human focal point.
- One restrained 3D hero enhancement that supports the message rather than competing with it.

The light-first direction is settled. Do not reopen the light/dark/hybrid decision or add a theme switcher to v1.

## 2. Brand and visual identity

### Personal brand
- The site is the developer's personal portfolio, presented under the approved public name.
- Use a clean text wordmark; a complicated logo is not required.
- Abeeb Digital Studio is a separate business founded by the developer. Mention it discreetly in the About section or footer; it must not replace the personal identity in the header, hero, metadata or primary calls to action.
- Use one approved professional photograph consistently in the hero and About section. It should look polished, approachable and credible, not like a caricature or stiff corporate stock portrait. Prefer a natural expression, modern smart-casual styling and a clean neutral treatment. Do not fabricate a likeness.
- The current hero uses a clearly labelled initials placeholder inside a CSS perspective card. Keep this slot the same size when the real photo arrives so replacing the asset does not require redesigning the layout.
- Once the photo is supplied, create a polished 3D-styled portrait image from that actual photo and use it as an optimised static asset. This is a rendered image, not a promise of a rigged, interactive 3D character. Keep the 3D treatment lightweight; do not introduce WebGL merely to display the portrait.

### Colour tokens

| Token | Value | Use |
|---|---|---|
| Page background | #F7F8FA | Main canvas |
| Surface | #FFFFFF | Cards, navigation and forms |
| Primary text | #151B2B | Headings and important copy |
| Secondary text | #626D80 | Supporting copy |
| Accent | #3659E3 | Primary actions, links and highlights |
| Accent hover | #2948C7 | Hover and pressed state |
| Accent soft | #EEF2FF | Quiet emphasis and selected tags |
| Border | #E4E8EF | Dividers, card edges and input borders |
| Success | #18794E | Confirmation states |
| Error | #B42318 | Validation and error states |

Keep the accent restrained. Do not use gradients as a substitute for hierarchy. A subtle accent gradient may appear inside the 3D visual only if it survives contrast and performance checks.

### Typography and layout
- Use Manrope as the primary type family with a system sans-serif fallback.
- Load only the font weights actually used.
- Use bold, compact display typography for the hero; body copy must remain highly readable.
- Use sentence case for headings and buttons; avoid excessive uppercase labels.
- Suggested responsive scale: hero headline clamp(2.7rem, 6.2vw, 5.6rem); page title clamp(2.3rem, 4.5vw, 4rem); section heading clamp(1.8rem, 3vw, 2.8rem); body 1rem–1.125rem.
- Content max width: approximately 1200px. Main gutters: clamp(20px, 5vw, 76px).
- Use a consistent 4px-based spacing scale, with 8px as the common rhythm.
- Keep paragraph line length around 60–75 characters.
- Use restrained card radii of approximately 16–22px and consistent smaller radii for buttons and fields.
- Avoid excessive glassmorphism, floating cards, decorative blobs and nested containers.

## 3. Navigation and information architecture

Use a compact sticky header with the personal-name wordmark, Work, Services, Process and About links, and a prominent **Book a Discovery Call** action. Work links to the project listing; the other links can target homepage sections. Do not add empty pages just to fill navigation.

The mobile menu must be keyboard-operable, have a clear open/close state and close after navigation.

Routes:
- / — complete homepage.
- /projects — selected work index.
- /projects/[slug] — individual project case study.

A separate About, Services, Contact or booking application is not required for v1.

## 4. Homepage experience — section specification

Keep the homepage in this order unless usability testing gives a clear reason to change it.

### A. Header
Keep the header visually quiet and immediately understandable. Use a solid or lightly translucent surface with a subtle bottom border when sticky. The booking action must remain easy to find without overpowering the wordmark or navigation.

### B. Hero
The first screen must answer who the developer is, what they build and what the visitor should do next.

Draft content direction:
- Eyebrow: “FULL-STACK DEVELOPER · WEB APPLICATIONS · AI INTEGRATION”
- Headline: “I turn business ideas into useful digital products.”
- Supporting copy: “I design and build fast, reliable websites and web applications, connect the systems businesses depend on, and add AI where it creates real value.”
- Primary CTA: “Book a Discovery Call”
- Secondary CTA: “Explore My Work”

Composition:
- Desktop: message and actions on one side; the 3D-styled professional portrait sits inside the supporting visual composition on the other.
- The portrait is the human focal point. Use restrained CSS perspective, soft light and a few geometric layers to suggest depth without creating a full-screen 3D environment.
- Do not use a generic spinning globe, floating code symbols, random cubes or gratuitous WebGL effects.
- Mobile: message and primary action first; keep the portrait visible and simplify the surrounding composition.
- Message, portrait image and links must render immediately; no scene loader is needed for a static portrait.

### C. Capability summary
Follow the hero with a short, scannable summary of Website Development, Web Applications, Backend & APIs, and AI Integration. This is not a row of invented client logos, metrics or testimonials.

### D. Selected work
Feature Ritewheel Autos and FixTrust as the initial projects, subject to a fresh content and status check before publication.

Each card includes a project image, project name, one-sentence explanation, problem addressed, developer's role, factual status label where useful, and a case-study link when the case study exists. The initial Ritewheel Autos and FixTrust cards use custom illustrated temporary preview artwork, labelled as placeholders. Replace these with real current screenshots before launch. Include a live product link only when the destination and current functionality have been verified.

Use large editorial cards with consistent image ratios and restrained hover effects. Do not use mockups that obscure the real product. Do not invent clients, customers, revenue, adoption, testimonials or business impact.

### E. Services and capabilities
Present four outcome-led service groups:
1. **Website development** — professional responsive websites that help a business explain its offer and establish an effective online presence.
2. **Web application development** — custom platforms, marketplaces, dashboards, booking flows and internal business tools.
3. **Backend and API development** — application logic, data modelling, API design, integrations and secure workflows.
4. **AI integration** — practical AI capabilities and workflow automation where they solve a real user or business problem.

Explain tools in supporting detail, not as the headline. Only list technologies supported by actual project experience.

### F. How I work
Use a simple five-step process:
1. Discover — understand the business, users and problem.
2. Define — agree on scope, priorities, constraints and a delivery plan.
3. Build — deliver in visible, reviewable increments.
4. Test and refine — check real workflows, edge cases and usability.
5. Launch and hand over — deploy, document and explain what happens next.

The copy should reassure non-technical clients that they will understand what is happening and be involved. Do not promise timelines before scope is understood.

### G. About
Use a concise introduction and the same approved avatar, with a link to the CV. Explain the developer's practical product-building approach and full-stack focus. Present Abeeb Digital Studio as a separate business founded by the developer, with a discreet link or short note. Keep the biography factual and concise.

### H. Contact and final conversion section
Use a direct invitation such as “Have an idea you want to bring to life?” Explain that the first conversation is to understand the problem and explore what should be built, not pressure the visitor into a predefined package.

Provide two clear paths:
- Primary: **Book a Discovery Call** — opens the selected scheduling provider.
- Secondary: **Chat on WhatsApp** — opens WhatsApp with a short pre-filled introduction.

Keep any enquiry form optional and short. Do not require an account or a long project questionnaire before contact.

### I. Footer
Include the personal wordmark, concise role statement, navigation, approved professional/social links, CV link and another route to book a call or start a WhatsApp chat. Keep Abeeb Digital Studio secondary.

## 5. Projects index and case-study experience

### Projects index
Introduce selected work with a clear title and short explanation. Use consistent cards with prominent screenshots. Let visitors open the case study or verified live product. Do not add filters until there are enough projects for filters to help.

### Case-study page
Use the same narrative structure on every project:
1. Overview — what the product is and who it is for.
2. Problem — the user or business need.
3. Product approach — the solution and user journey.
4. My contribution — what the developer personally built, integrated or maintained.
5. Features — only verified functionality.
6. Technical decisions — architecture, tools and meaningful trade-offs.
7. Challenges and lessons — concrete engineering problems and how they were handled.
8. Current status — clearly labelled deployed, in progress, prototype or another accurate status.
9. Links — current live product and public source where appropriate.

Use real screenshots, short captions and a sensible image sequence. On mobile, images must fit the viewport and the product story must come before deep technical detail.

## 6. Booking and WhatsApp interaction

### Discovery call
- The primary booking CTA is wired to a configurable external scheduling URL. Until that URL is configured, it temporarily opens an email draft to the approved address. Select Calendly or an equivalent provider and replace the fallback before public launch.
- Prefer a clean booking page or a lightweight embedded scheduler only if the embed performs well on mobile. A normal external booking link is the fallback.
- The scheduler must show availability in the Africa/Lagos timezone and display the visitor's timezone clearly where supported.
- Meeting duration, weekly availability, buffer time, booking notice and confirmation settings must be configured before launch; do not invent these values.
- Ask only for details useful to prepare for the conversation, such as name, email and an optional short description of what they want to build.
- Let the provider handle availability, confirmation, rescheduling and calendar invitations. Do not build a custom scheduling backend for v1.
- Test the full journey, including unavailable dates, mobile layout and confirmation.

### WhatsApp
- The secondary WhatsApp action opens the approved contact number using a wa.me link.
- Use a short pre-filled message such as: “Hi Seun, I found your portfolio and would like to discuss a project.”
- The approved WhatsApp contact number is +234 816 701 4764. Keep it centralised in the site configuration and verify the click-to-chat link from desktop and mobile.
- WhatsApp must not be the only contact route. Booking and approved email remain available.

## 7. Motion and 3D rules

Motion should explain hierarchy, give feedback or add a small amount of personality. It must never delay reading or navigation.

- Use CSS for simple hover, focus and state transitions.
- Use the motion library only where it adds clear value.
- Restrict scroll reveals to subtle, once-only entrances; content must remain visible when animation is disabled.
- Avoid parallax on essential content, scroll hijacking, animated counters, autoplay video and forced intro sequences.
- Treat the 3D-styled portrait as a static optimised image asset; it does not need a WebGL renderer.
- Keep CSS perspective layers decorative and lightweight. The portrait and core content must remain visible with CSS effects disabled.
- Only consider a separate interactive 3D scene later if it adds a clear user benefit and passes performance testing.
- Respect prefers-reduced-motion and provide an equally complete non-animated experience.

## 8. Responsive behaviour

Design from small screens upward:
- **Small mobile:** single-column content, message-first hero, visible primary CTA, simplified avatar/3D composition, touch targets of at least 44px and no horizontal overflow.
- **Large mobile:** preserve comfortable gutters and avoid oversized empty media areas.
- **Tablet:** use intentional two-column layouts only where text remains readable; adapt project cards instead of squeezing desktop cards.
- **Desktop:** use whitespace and large project imagery while maintaining a readable text measure.

No essential action may depend on hover. Test navigation, hero, project cards, case studies, booking, WhatsApp and CV download at real viewport sizes.

## 9. Accessibility and interaction states

- Use semantic landmarks and a logical heading hierarchy.
- All navigation, buttons, forms and booking links must work by keyboard.
- Show visible focus states.
- Give every form control a programmatic label and associate validation errors with the relevant field.
- Use meaningful alt text for informative images; mark decorative 3D content as decorative.
- Meet WCAG AA contrast for normal text.
- Do not rely on colour alone to communicate project status or form errors.
- Respect reduced motion.
- Provide clear loading, success and error feedback for form interactions.
- Ensure menu and interactive states are announced appropriately to assistive technology.

## 10. Performance targets and budgets

Targets are acceptance criteria to measure, not claims to publish.

Core Web Vitals at the 75th percentile:
- LCP: <= 2.5 seconds.
- INP: <= 200 milliseconds.
- CLS: <= 0.1.

Lighthouse aims:
- Performance: 90+ mobile.
- Accessibility: 95+.
- Best Practices: 95+.
- SEO: 95+.

Scores vary by environment. Use repeated production-build measurements and investigate regressions rather than optimising to one score.

Implementation rules:
- Keep initial route JavaScript minimal.
- Do not put the 3D renderer in the critical initial bundle.
- Optimise images and serve responsive dimensions.
- Reserve image/media space to prevent layout shifts.
- Prefer a small number of font files and weights.
- Avoid large background videos and unnecessary third-party scripts.
- Load analytics only after the privacy approach is reviewed.
- Measure on mobile-class hardware and throttled connections, not only a high-end desktop.
- If 3D styling causes a meaningful performance or readability regression, simplify or remove it; content and portrait remain the priority.

## 11. Reusable component inventory

- Header, desktop navigation and mobile navigation.
- Primary, secondary and text buttons.
- Section heading and content container.
- Project card and project-status label.
- Service card and process step.
- Technology tag, used sparingly.
- Avatar frame and 3D hero wrapper/fallback.
- Booking CTA and WhatsApp CTA.
- Contact field, validation message and confirmation state.
- Footer and social link.

Do not create an abstraction for every text block. Reuse should make the system more consistent, not harder to understand.

## 12. Release acceptance checklist

- [ ] Light-first visual direction, personal identity and accent system are consistent across routes.
- [ ] Homepage hierarchy and conversion paths work without 3D.
- [ ] Avatar and project assets are approved and optimised.
- [ ] Navigation and mobile menu work.
- [ ] Project facts, statuses, screenshots and live links are verified.
- [ ] Discovery-call scheduler works in Africa/Lagos timezone.
- [ ] WhatsApp link uses the approved number and pre-filled message.
- [ ] Keyboard, contrast and reduced-motion checks pass.
- [ ] No horizontal overflow at supported viewport sizes.
- [ ] Production Lighthouse and Core Web Vitals are measured.
- [ ] Booking, CV and contact journeys are tested on mobile and desktop.
