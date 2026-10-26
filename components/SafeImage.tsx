"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  contain?: boolean;
};

/**
 * Plain <img> that loads directly in the visitor's browser (no Next image
 * optimizer, no referrer sent) and falls back to a neutral placeholder if the
 * URL is blocked or dead. Fills its parent, so the parent needs `relative`
 * and a fixed size / aspect ratio.
 */
export default function SafeImage({ src, alt, className = "", contain }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex items-center justify-center bg-cream text-xs font-medium text-muted"
      >
        Xplo Factory
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full ${
        contain ? "object-contain" : "object-cover"
      } ${className}`}
    />
  );
}
