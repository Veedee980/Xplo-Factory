"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  // Hide on scroll down, reveal on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 160 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu after navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(.2,.7,.1,1)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Announcement bar */}
        <Link
          href="/new-products"
          className="group flex items-center justify-center gap-2 bg-accent px-4 py-2 text-center text-xs font-semibold text-paper"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-paper opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-paper" />
          </span>
          New Product coming soon
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>

        <div
          className={`border-b transition-colors duration-300 ${
            scrolled ? "border-line bg-paper/90 backdrop-blur" : "border-transparent bg-paper"
          }`}
        >
          <div className="container-xplo flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Xplo Factory home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-bold text-accent">
                X
              </span>
              <span className="font-display text-lg font-bold tracking-tight">Xplo Factory</span>
            </Link>

            <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group relative py-1 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                      isActive(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative py-1 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
              >
                Contact
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </nav>

            <div className="hidden md:block">
              <Button href="/services">Order Now</Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
            >
              <span
                className={`absolute h-0.5 w-4 bg-ink transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute h-0.5 w-4 bg-ink transition-transform duration-300 ${
                  open ? "-rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink text-paper transition-[clip-path] duration-700 ease-[cubic-bezier(.76,0,.24,1)] md:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <div className="container-xplo flex h-full flex-col justify-between pb-10 pt-32">
          <nav className="flex flex-col gap-2">
            {[...navLinks, { label: "Contact", href: "/contact" }].map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${250 + i * 80}ms` : "0ms" }}
                className={`font-display text-5xl font-bold transition-all duration-700 hover:text-accent ${
                  open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-4 text-sm text-paper/70">
            <Button href="/services" variant="accent" className="w-full">
              Order Now
            </Button>
            <p>{siteConfig.hours[0].label}: {siteConfig.hours[0].value}</p>
            <p>{siteConfig.hours[1].label}: {siteConfig.hours[1].value}</p>
            <a href={`mailto:${siteConfig.email}`} className="block hover:text-accent">
              {siteConfig.email}
            </a>
            <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="block hover:text-accent">
              {siteConfig.address}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
