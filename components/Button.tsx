import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type Variant = "dark" | "light" | "accent" | "outline";

type Props = {
  children: string;
  href?: string;
  external?: boolean;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  icon?: ReactNode;
};

const styles: Record<Variant, string> = {
  dark: "bg-ink text-paper hover:bg-accent",
  light: "bg-paper text-ink hover:bg-accent hover:text-paper",
  accent: "bg-accent text-paper hover:bg-ink",
  outline:
    "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
};

/** Pill button whose label rolls up on hover. Works as <Link>, <a> or <button>. */
export default function Button({
  children,
  href,
  external,
  variant = "dark",
  className = "",
  type = "button",
  disabled,
  onClick,
  icon,
}: Props) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 disabled:opacity-60 ${styles[variant]} ${className}`;

  const label = (
    <>
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(.2,.7,.1,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(.2,.7,.1,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      {icon}
    </>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {label}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {label}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

export function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
