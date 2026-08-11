import Link from "next/link";
import { donateHref, initiativeLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <Link href="/" className="footer-brand">
            PROJECT SOUTH
          </Link>
          <p className="footer-copy">
            Institute for the Elimination of Poverty and Genocide
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-links-column">
            <Link href="/about">About Us</Link>
            <Link href="/press-releases">Press Releases</Link>
            <a href={donateHref}>Donate</a>
          </div>
          <div className="footer-links-column">
            {initiativeLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer-meta">
        <span>Atlanta, Georgia · Est. 1986</span>
        <span>Project South</span>
      </div>
    </footer>
  );
}
