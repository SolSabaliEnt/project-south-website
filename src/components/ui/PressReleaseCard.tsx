import Link from "next/link";

type PressReleaseCardProps = {
  title: string;
  date: string;
  excerpt?: string;
  href: string;
};

export function PressReleaseCard({ title, date, excerpt, href }: PressReleaseCardProps) {
  return (
    <article className="press-release-card">
      <div className="press-release-meta">{date}</div>
      <h2 className="press-release-title">
        <Link href={href}>{title}</Link>
      </h2>
      {excerpt ? <p className="press-release-excerpt">{excerpt}</p> : null}
      <Link href={href} className="press-release-link">
        Read release <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
