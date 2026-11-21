"use client";

import { useRef } from "react";
import { site } from "@/data/site";

const discoveryHref =
  site.bookingUrl ||
  "mailto:" + site.email + "?subject=Let%27s%20discuss%20a%20project";

export function MobileNav() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    menuRef.current?.removeAttribute("open");
  }

  return (
    <details className="mobile-nav" ref={menuRef}>
      <summary aria-label="Open navigation menu">
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#process" onClick={closeMenu}>Process</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href={discoveryHref} onClick={closeMenu}>Book a conversation ↗</a>
      </nav>
    </details>
  );
}
