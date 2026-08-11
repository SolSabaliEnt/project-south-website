import Link from "next/link";
import { initiativeLinks } from "@/data/navigation";

type InitiativeLinksProps = {
  excludeHref?: string;
  label?: string;
};

export function InitiativeLinks({
  excludeHref,
  label = "Explore the other initiatives",
}: InitiativeLinksProps) {
  const links = initiativeLinks.filter((item) => item.href !== excludeHref);

  return (
    <section className="initiative-links-section">
      <div className="site-container">
        <div className="section-label">{label}</div>
        <div className="initiative-links-list">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="initiative-link-row">
              <span>{item.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
