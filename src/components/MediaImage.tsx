"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type Props = { src: string; alt: string; className?: string; priority?: boolean; sizes?: string };

export function MediaImage({ src, alt, className = "", priority = false, sizes }: Props) {
  const [failed, setFailed] = useState(false);
  return <div className={`media-frame ${className}`}>
    {failed ? <div className="media-fallback" role="img" aria-label={alt}><Icon name="globe" size={54} /></div> :
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async" sizes={sizes} onError={() => setFailed(true)} />}
  </div>;
}
