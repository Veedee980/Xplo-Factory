import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import MaskLine from "@/components/MaskLine";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free quote from Xplo Factory. Our Harare team is ready to help with printing, branding, custom apparel and promotional projects.",
};

const cards = [
  { label: "WhatsApp", value: siteConfig.phoneLocal, href: siteConfig.whatsapp, external: true },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false },
  { label: "Address", value: siteConfig.address, href: siteConfig.mapsLink, external: true },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 text-center sm:pt-24">
        <div className="container-xplo">
          <span className="eyebrow fade-up">Get in Touch</span>
          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl">
            <MaskLine delay={100}>Request a</MaskLine>
            <MaskLine delay={220} className="text-accent">Free Quote</MaskLine>
          </h1>
          <p className="fade-up mx-auto mt-6 max-w-xl text-muted" style={{ "--d": "500ms" } as React.CSSProperties}>
            Tell us what you need and our Harare team will prepare a clear quotation for your printing, branding, custom apparel or promotional project. We’re ready to help you move from idea to finished product.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-xplo grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card group block p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{c.label}</p>
                  <p className="mt-2 break-words text-lg font-semibold transition-colors group-hover:text-accent">{c.value}</p>
                </a>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <div className="card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">Working Hours</p>
                <ul className="mt-2 space-y-1 text-sm text-muted">
                  {siteConfig.hours.map((h) => (
                    <li key={h.label}>{h.label}: {h.value}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>

        <div className="container-xplo mt-14">
          <Reveal scale>
            <div className="aspect-[16/8] w-full overflow-hidden rounded-xl3 border border-line">
              <iframe
                title="Xplo Factory location"
                src={siteConfig.mapsEmbed}
                className="h-full w-full border-0 grayscale transition-all duration-700 hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
