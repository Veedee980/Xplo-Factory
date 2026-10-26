"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

/** Full-width looping video that scales up and rounds off as it scrolls into view. */
export default function VideoSection({ src, className = "" }: { src: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.9)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={ref} style={{ "--p": 0 } as CSSProperties} className={`overflow-hidden py-16 sm:py-24 ${className}`}>
      <div
        className="mx-auto aspect-video w-[min(94vw,1400px)] overflow-hidden bg-ink will-change-transform"
        style={{
          transform: "scale(calc(0.8 + var(--p) * 0.2))",
          borderRadius: "calc(56px - var(--p) * 32px)",
        }}
      >
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
