import Image from "next/image";

type PersonCardProps = {
  name: string;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  dark?: boolean;
  size?: "large" | "small";
};

export function PersonCard({
  name,
  title,
  imageSrc,
  imageAlt = "",
  imagePosition = "center 32%",
  dark = false,
  size = "small",
}: PersonCardProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article className={`person-card person-card-${size}${dark ? " person-card-dark" : ""}`}>
      <div className="person-card-image-wrap">
        <div className="person-card-ring" aria-hidden="true" />
        <div className="person-card-image-frame">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || name}
              fill
              sizes="220px"
              className="person-card-image"
              style={{ objectPosition: imagePosition }}
            />
          ) : (
            <div className="person-card-initials">{initials}</div>
          )}
        </div>
        <span className="person-card-dot" aria-hidden="true" />
      </div>

      <div className="person-card-label">
        <strong>{name}</strong>
        <span>{title}</span>
      </div>
    </article>
  );
}
