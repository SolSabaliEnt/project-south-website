"use client";

import Link from "next/link";
import { useState } from "react";
import { donateHref, initiativeLinks } from "@/data/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [initiativesOpen, setInitiativesOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="mobile-menu" id="mobile-navigation">
      <Link href="/about" className="mobile-menu-row" onClick={onClose}>
        <span>About Us</span>
        <span aria-hidden="true">→</span>
      </Link>

      <button
        type="button"
        className="mobile-menu-row mobile-menu-button"
        aria-expanded={initiativesOpen}
        onClick={() => setInitiativesOpen((value) => !value)}
      >
        <span>Initiatives</span>
        <span aria-hidden="true">{initiativesOpen ? "−" : "+"}</span>
      </button>

      {initiativesOpen ? (
        <div className="mobile-submenu">
          {initiativeLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-submenu-row"
              onClick={onClose}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      ) : null}

      <Link href="/press-releases" className="mobile-menu-row" onClick={onClose}>
        <span>Press Releases</span>
        <span aria-hidden="true">→</span>
      </Link>

      <a href={donateHref} className="mobile-menu-donate" onClick={onClose}>
        Donate <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
