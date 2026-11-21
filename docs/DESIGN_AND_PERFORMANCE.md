# Design System and Performance Requirements

## 1. Design direction

The visual direction should feel premium, clear, confident, and modern. It must not resemble a generic developer template or an over-engineered 3D experiment.

### Theme exploration
Evaluate three directions before locking tokens:
- **Light:** clean, editorial, generous whitespace, strong typography, restrained accent.
- **Dark:** high contrast, deep neutral surfaces, restrained accent, deliberate depth.
- **Hybrid:** carefully selected contrast between sections, only if it improves hierarchy.

The final choice should be based on readability, brand fit, screenshot quality, and usability—not novelty.

### Visual principles
- Strong typographic hierarchy.
- Consistent spacing scale.
- Clear content width and grid.
- Predictable button and link behaviour.
- Consistent focus, hover, active, disabled, and error states.
- Colour contrast that meets WCAG AA for normal text.
- No important meaning conveyed by colour alone.

## 2. 3D and motion

3D should add identity and memorability to the hero, not obstruct the message or primary actions.

Possible hero concept: one restrained abstract 3D object with controlled pointer interaction on capable desktop devices.

Rules:
- Static hero content must render immediately.
- 3D must be a progressive enhancement.
- Defer loading until after critical content and only when useful.
- Use compressed geometry and textures; choose formats and model complexity based on measurements.
- Avoid expensive post-processing and excessive real-time shadows.
- Limit device pixel ratio and rendering resolution where necessary.
- Pause rendering when the scene is not visible.
- Disable pointer-driven effects on touch devices.
- Respect `prefers-reduced-motion`.
- Provide a static image/CSS fallback if WebGL is unavailable or the scene fails.
- Avoid scroll hijacking, forced intro screens, and animations that delay access to content.

## 3. Responsive strategy

Design and test from small screens upward:
- Small mobile: compact layout, readable text, touch-friendly controls, simplified visual effects.
- Large mobile: preserve spacing and avoid excessive vertical bloat.
- Tablet: adapt grids and navigation intentionally.
- Desktop: use whitespace and larger project imagery without stretching text measure.

Do not rely on horizontal scrolling for primary content. Avoid hover-only interactions.

## 4. Performance budgets and targets

Targets are acceptance criteria to measure, not claims to publish.

### Core Web Vitals
At the 75th percentile, target Google's good thresholds:
- LCP: <= 2.5 seconds.
- INP: <= 200 milliseconds.
- CLS: <= 0.1.

### Lighthouse
Aim for:
- Performance: 90+ mobile.
- Accessibility: 95+.
- Best Practices: 95+.
- SEO: 95+.

Lighthouse scores vary by environment. Use repeated production-build measurements and investigate regressions rather than optimising to one score.

### Implementation budgets
- Keep initial route JavaScript minimal.
- Do not include the 3D renderer in the critical initial bundle.
- Optimise images and provide responsive sizes.
- Use modern image formats when supported by the image pipeline.
- Reserve image and media dimensions to prevent layout shifts.
- Subset/localise fonts where practical; prefer a small number of font files.
- Avoid loading multiple font weights unnecessarily.
- Avoid large background videos.
- Third-party scripts must have a clear purpose and measured cost.

## 5. Accessibility

- Semantic landmarks and heading order.
- Keyboard-operable navigation and controls.
- Visible focus indicators.
- Correct labels and accessible validation feedback.
- Meaningful alternative text for informative images.
- Decorative imagery hidden from assistive technology.
- Sufficient contrast.
- Reduced motion support.
- No essential information available only through animation or hover.

## 6. Quality gates

Before release:
- Test at common mobile, tablet, and desktop viewport sizes.
- Test keyboard-only navigation.
- Test reduced-motion preference.
- Test with WebGL disabled or unavailable.
- Verify no horizontal overflow.
- Verify form validation and error/success states.
- Run production Lighthouse and Playwright checks.
- Inspect real-device behaviour where possible.
