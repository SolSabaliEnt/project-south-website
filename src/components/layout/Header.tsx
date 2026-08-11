"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { donateHref } from "@/data/navigation";
import { InitiativesDropdown } from "@/components/navigation/InitiativesDropdown";
import { MobileMenu } from "@/components/navigation/MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-mark" aria-label="Project South home">
          <span className="brand-mark-primary">PROJECT SOUTH</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-trigger"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="mobile-menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/about" className="nav-link">
            About Us
          </Link>
          <InitiativesDropdown />
          <Link href="/press-releases" className="nav-link">
            Press Releases
          </Link>
        </nav>

        <a href={donateHref} className="donate-button">
          Donate <span aria-hidden="true">→</span>
        </a>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
