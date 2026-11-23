import { ActionLink } from "@/components/action-link";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
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
        <ThemeToggle />
        <ActionLink className="button button-small header-cta" href={discoveryHref}>
          Book a conversation <span aria-hidden="true">↗</span>
        </ActionLink>
        <MobileNav />
      </div>
    </header>
  );
}
