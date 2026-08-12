"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { donateHref } from "@/data/navigation";
import { InitiativesDropdown } from "@/components/navigation/InitiativesDropdown";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { withBasePath } from "@/lib/site-path";

const logoSrc = "/brand/PS-Transparent-Logo-Red-2-1.webp";

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
          <span className="header-logo-wrap">
            <Image
              src={withBasePath(logoSrc)}
              alt="Project South"
              fill
              priority
              sizes="(max-width: 820px) 140px, 280px"
              className="header-logo-image"
            />
          </span>
        </Link>

        <button
          type="button"
          className={`mobile-menu-trigger${menuOpen ? " is-open" : ""}`}
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

        <a href={donateHref} className="donate-button" style={{ gridColumn: 3 }}>
          Donate <span aria-hidden="true">→</span>
        </a>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <style jsx global>{`
        .header-logo-wrap {
          position: relative;
          display: block;
          width: 280px;
          height: 62px;
        }

        .header-logo-image {
          object-fit: contain;
          object-position: left center;
          transform: scale(1.55);
          transform-origin: left center;
        }

        @media (max-width: 820px) {
          .brand-mark {
            min-width: 0;
          }

          .header-logo-wrap {
            width: 140px;
            height: 50px;
          }

          .header-logo-image {
            transform: scale(1.55);
          }

          .site-header-inner .mobile-menu-trigger {
            position: static;
            left: auto;
            top: auto;
            transform: none;
            grid-column: 2;
            grid-row: 1;
            justify-self: center;
            align-self: center;
          }

          .mobile-menu-trigger.is-open .mobile-menu-icon span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }

          .mobile-menu-trigger.is-open .mobile-menu-icon span:nth-child(2) {
            opacity: 0;
          }

          .mobile-menu-trigger.is-open .mobile-menu-icon span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }

          .mobile-menu-icon span {
            transition: transform 160ms ease, opacity 160ms ease;
          }
        }

        @media (max-width: 420px) {
          .header-logo-wrap {
            width: 136px;
            height: 50px;
          }

          .header-logo-image {
            transform: scale(1.55);
          }
        }
      `}</style>
    </header>
  );
}
