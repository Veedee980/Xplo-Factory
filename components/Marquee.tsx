import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  reverse?: boolean;
  /** seconds per full loop */
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  gap?: string;
};

/** Seamless infinite horizontal scroller. Children are rendered twice. */
export default function Marquee({
  children,
  reverse,
  speed = 40,
  pauseOnHover = true,
  className = "",
  gap = "gap-4",
}: Props) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${reverse ? "animate-marquee-reverse" : "animate-marquee"} ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className={`flex shrink-0 ${gap} pr-4`}>{children}</div>
        <div className={`flex shrink-0 ${gap} pr-4`} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
