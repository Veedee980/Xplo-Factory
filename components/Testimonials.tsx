"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { testimonials } from "@/lib/data";

function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-accent" aria-hidden>
      <path d="M10 1.5l2.6 5.28 5.83.85-4.22 4.11.99 5.81L10 14.9l-5.2 2.65.99-5.81L1.57 7.63l5.83-.85L10 1.5z" />
    </svg>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${dir === "left" ? "rotate-180" : ""}`} aria-hidden>
      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Testimonials({ dark = false }: { dark?: boolean }) {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  const move = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("figure") as HTMLElement | null;
    const step = (card?.offsetWidth ?? 380) + 24;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Gentle auto-advance, paused while hovering/touching
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) move(1);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const btn = dark
    ? "border-paper/20 text-paper hover:bg-accent hover:border-accent"
    : "border-ink/15 text-ink hover:bg-ink hover:text-paper";

  return (
    <section id="testimonials" className={`py-20 sm:py-28 ${dark ? "bg-ink text-paper" : "bg-cream"}`}>
      <div className="container-xplo">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <span className="eyebrow">Customer Testimonials</span>
            <h2 className="mt-3 max-w-xl text-3xl font-bold sm:text-5xl">What our clients say</h2>
          </Reveal>
          <div className="flex gap-3">
            <button type="button" aria-label="Previous testimonial" onClick={() => move(-1)} className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${btn}`}>
              <Arrow dir="left" />
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => move(1)} className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${btn}`}>
              <Arrow dir="right" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={track}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onTouchStart={() => (paused.current = true)}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]"
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className={`flex w-[85vw] shrink-0 snap-start flex-col justify-between rounded-xl3 p-8 transition-transform duration-500 hover:-translate-y-1 sm:w-[420px] ${
              dark ? "bg-charcoal" : "bg-white shadow-card"
            }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <Star />
                <span className="text-sm font-semibold">{t.rating}</span>
              </div>
              <blockquote className="mt-5 font-display text-xl font-medium leading-snug">
                “{t.quote}”
              </blockquote>
            </div>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="relative block h-11 w-11 overflow-hidden rounded-full bg-line">
                <SafeImage src={t.avatar} alt={t.name} />
              </span>
              <span className="text-sm font-semibold">{t.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
