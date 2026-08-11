import Image from "next/image";

type VideoThumbnailProps = {
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
};

export function VideoThumbnail({
  href,
  imageSrc,
  imageAlt = "",
  eyebrow,
  title,
}: VideoThumbnailProps) {
  return (
    <a href={href} className="video-thumbnail">
      <div className="video-thumbnail-frame">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 720px) 100vw, 45vw"
            className="video-thumbnail-image"
          />
        ) : (
          <div className="media-placeholder">Video thumbnail placeholder</div>
        )}
        <span className="video-play" aria-hidden="true">
          ▶
        </span>
      </div>
      <div className="video-thumbnail-copy">
        {eyebrow ? <span className="section-label">{eyebrow}</span> : null}
        <strong>{title}</strong>
      </div>
    </a>
  );
}
