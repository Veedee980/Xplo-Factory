"use client";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-paper/60 transition-colors hover:text-accent"
    >
      Back to top
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-paper/20 transition-transform group-hover:-translate-y-1">
        ↑
      </span>
    </button>
  );
}
