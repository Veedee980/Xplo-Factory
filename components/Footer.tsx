import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import NewsletterForm from "@/components/NewsletterForm";
import { footerLinks, siteConfig } from "@/lib/data";

function Col({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-paper/90">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-paper/60 transition-colors hover:text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* Newsletter */}
      <div className="border-b border-paper/10">
        <div className="container-xplo flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center">
          <div className="max-w-md">
            <h3 className="font-display text-3xl font-semibold">Get Xplo Factory Updates</h3>
            <p className="mt-2 text-sm text-paper/60">
              Occasional ideas, product launches and practical print tips for growing brands.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="container-xplo grid grid-cols-2 gap-10 py-16 md:grid-cols-12">
        <div className="col-span-2 md:col-span-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper text-sm font-bold text-ink">X</span>
            <span className="font-display text-lg font-bold">Xplo Factory</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-paper/60">
            From ideas to finished products, Xplo Factory brings creativity, quality and craftsmanship together..
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {siteConfig.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-paper/15 px-4 py-2 text-xs font-medium text-paper/70 transition-colors hover:border-accent hover:bg-accent hover:text-paper"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <Col title="Quick Links" links={footerLinks.quick} />
        </div>
        <div className="md:col-span-2">
          <Col title="Explore" links={footerLinks.explore} />
          <div className="mt-8">
            <Col title="Support" links={footerLinks.support} />
          </div>
        </div>

        <div className="col-span-2 md:col-span-4">
          <h4 className="text-sm font-semibold text-paper/90">Contact Info</h4>
          <ul className="mt-4 space-y-3 text-sm text-paper/60">
            <li>
              <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                {siteConfig.address}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneRaw}`} className="transition-colors hover:text-accent">
                {siteConfig.phone}
              </a>{" "}
              |{" "}
              <a href="tel:+263714877015" className="transition-colors hover:text-accent">
                {siteConfig.phoneSecondary}
              </a>
            </li>
          </ul>
          <h4 className="mt-8 text-sm font-semibold text-paper/90">Working Hours</h4>
          <ul className="mt-3 space-y-1 text-sm text-paper/60">
            {siteConfig.hours.map((h) => (
              <li key={h.label}>
                {h.label}: {h.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden className="pointer-events-none select-none px-4 text-center font-display text-[22vw] font-bold leading-[0.8] tracking-tighter text-paper/[0.04]">
        XPLO
      </div>

      <div className="border-t border-paper/10">
        <div className="container-xplo flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-paper/40">© {new Date().getFullYear()} Xplo Factory. All rights reserved.</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
