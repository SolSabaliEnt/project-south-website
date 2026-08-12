import Image from "next/image";
import { withBasePath } from "@/lib/site-path";

type MediaBlockProps = {
  src?: string;
  alt?: string;
  caption?: string;
  aspect?: "landscape" | "portrait" | "square";
  priority?: boolean;
};

export function MediaBlock({
  src,
  alt = "",
  caption,
  aspect = "landscape",
  priority = false,
}: MediaBlockProps) {
  return (
    <figure className="media-block">
      <div className={`media-frame media-frame-${aspect}`}>
        {src ? (
          <Image
            src={withBasePath(src)}
            alt={alt}
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
            className="media-image"
            priority={priority}
          />
        ) : (
          <div className="media-placeholder">Image placeholder</div>
        )}
      </div>
      {caption ? <figcaption className="media-caption">{caption}</figcaption> : null}
    </figure>
  );
}
