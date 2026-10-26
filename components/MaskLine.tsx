import type { CSSProperties, ReactNode } from "react";

/** One headline line that rises out of a mask on page load. */
export default function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`mask-line ${className}`}>
      <span style={{ "--d": `${delay}ms` } as CSSProperties}>{children}</span>
    </span>
  );
}
