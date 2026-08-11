"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  src?: string;
  alt: string;
  caption?: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
};

export function ImageGallery({ images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  if (!active) return null;

  return (
    <div className="image-gallery">
      <div className="image-gallery-frame">
        {active.src ? (
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="(max-width: 720px) 100vw, 60vw"
            className="image-gallery-image"
          />
        ) : (
          <div className="media-placeholder">Gallery image {activeIndex + 1}</div>
        )}
        <span className="image-gallery-overlay-count" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>

      <div className="image-gallery-controls">
        <span className="image-gallery-caption">
          {active.caption || "From the field"}
        </span>
        <div className="image-gallery-dots" aria-label="Choose gallery image">
          {images.map((image, index) => (
            <button
              key={`${image.src || image.alt}-${index}`}
              type="button"
              className={`image-gallery-dot${index === activeIndex ? " is-active" : ""}`}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
