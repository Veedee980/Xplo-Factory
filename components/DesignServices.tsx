"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { designServices } from "@/lib/data";

/** Hover a row and a preview image follows the cursor. */
export default function DesignServices() {
  const [active, setActive] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent) => {
    if (preview.current) {
      preview.current.style.transform = `translate3d(${e.clientX + 24}px, ${e.clientY - 120}px, 0)`;
    }
  };

  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <div className="container-xplo">
        <Reveal>
          <span className="eyebrow">Design Services</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Xplo Design Services</h2>
        </Reveal>

        <ul className="mt-14 border-t border-paper/15" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
          {designServices.map((s, i) => (
            <li key={s.title} className="border-b border-paper/15">
              <Reveal delay={i * 70}>
                <Link
                  href="/contact"
                  onMouseEnter={() => setActive(i)}
                  className="group flex items-center gap-5 py-7 transition-all duration-500 hover:px-4 sm:py-9"
                >
                  <span className="w-8 text-xs font-semibold text-paper/40">0{i + 1}</span>
                  {/* Thumbnail for touch screens */}
                  <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-lg lg:hidden">
                    <SafeImage src={s.image} alt={s.title} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-2xl font-semibold transition-colors group-hover:text-accent sm:text-4xl lg:text-5xl">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-widest text-paper/50">{s.category}</span>
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent">
                    →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {/* Cursor-following preview (desktop) */}
      <div
        ref={preview}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
        style={{ transform: "translate3d(-999px,-999px,0)" }}
      >
        <div
          className={`relative h-60 w-72 overflow-hidden rounded-xl2 shadow-2xl transition-all duration-300 ${
            active === null ? "scale-75 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          {designServices.map((s, i) => (
            <div key={s.title} className={`absolute inset-0 transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-0"}`}>
              <SafeImage src={s.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
