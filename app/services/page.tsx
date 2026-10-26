import type { Metadata } from "next";
import BooksShowcase from "@/components/BooksShowcase";
import CTABanner from "@/components/CTABanner";
import MaskLine from "@/components/MaskLine";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Printing, branding, custom apparel and promotional products from Xplo Factory in Harare, Zimbabwe.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 text-center sm:pt-24">
        <div className="container-xplo">
          <span className="eyebrow fade-up">Services</span>
          <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-bold leading-[1.02] sm:text-7xl">
            <MaskLine delay={100}>Discover Art That</MaskLine>
            <MaskLine delay={220}>Inspires and <span className="text-accent">Transforms</span></MaskLine>
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-xplo grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="container-xplo">
        <Reveal>
          <span className="eyebrow">Permanent Collections</span>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-5xl">87,000 Works Across Five Millennia</h2>
        </Reveal>
      </div>
      <BooksShowcase />

      <CTABanner />
    </>
  );
}
