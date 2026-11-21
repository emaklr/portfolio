import { site } from "@/data/site";

const discoveryHref =
  site.bookingUrl ||
  "mailto:" + site.email + "?subject=Let%27s%20discuss%20a%20project";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" aria-label="Babatunde Abeeb Seun — home">
          BAS<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </nav>
        <a className="button button-small header-cta" href={discoveryHref}>
          Book a conversation <span aria-hidden="true">↗</span>
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href={discoveryHref}>Book a conversation ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
