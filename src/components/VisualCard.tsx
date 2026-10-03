import Link from "next/link";
import type { Card } from "@/content/pages";
import { media } from "@/content/media";
import { Icon } from "./Icon";
import { MediaImage } from "./MediaImage";

export function VisualCard({ card, index = 0 }: { card: Card; index?: number }) {
  const hasExternalImage = !!card.imageSrc;
  const hasLocalImage = !!card.image;
  
  const body = (
    <>
      {/* 1. Render External or Local Image if available */}
      {(hasExternalImage || hasLocalImage) ? (
        <div className="card-image-wrapper">
          {hasExternalImage ? (
            <img
              src={card.imageSrc}
              alt={card.title + " illustration"}
              className="card-image"
              loading="lazy"
            />
          ) : (
            <MediaImage
              src={media[card.image!]}
              alt={card.title + " illustration"}
              className="card-image"
            />
          )}
        </div>
      ) : (
        /* 2. Fallback to Original SVG/Orbit Art if no image is provided */
        <div
          className={`card-art card-art-${index % 4} ${card.icon === "coin" ? "card-art-coin" : ""}`}
          aria-hidden="true"
        >
          <span className="card-orbit" />
          <span className="card-orbit card-orbit-small" />
          <Icon name={card.icon} size={58} />
          {["growth", "chart", "coin"].includes(card.icon) && (
            <svg viewBox="0 0 180 70" className="card-growth" aria-hidden="true">
              <path d="M3 62c29-2 32-31 58-28s28 15 51 3 27-29 65-35" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="190" />
              <circle cx="177" cy="2" r="3" fill="currentColor" />
            </svg>
          )}
        </div>
      )}

      <div className="visual-card-copy">
        <span className="card-number">
          0{index + 1} <Icon name={card.icon} size={18} />
        </span>
        <h3>{card.title}</h3>
        <p>{card.body}</p>
        {card.href && (
          <span className="text-link">
            Explore <Icon name="arrow" size={18} />
          </span>
        )}
      </div>
    </>
  );

  return card.href ? (
    <Link href={card.href} className="visual-card">
      {body}
    </Link>
  ) : (
    <article className="visual-card">{body}</article>
  );
}