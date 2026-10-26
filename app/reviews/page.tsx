import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import MaskLine from "@/components/MaskLine";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What schools, businesses and families say about Xplo Factory.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="pt-16 text-center sm:pt-24">
        <div className="container-xplo">
          <span className="eyebrow fade-up">Customer Testimonials</span>
          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl">
            <MaskLine delay={100}>Loved by our</MaskLine>
            <MaskLine delay={220} className="text-accent">customers</MaskLine>
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-xplo columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90} className="break-inside-avoid">
              <figure className="card p-8 transition-transform duration-500 hover:-translate-y-1">
                <p className="text-sm font-semibold text-accent">★ {t.rating}</p>
                <blockquote className="mt-4 font-display text-xl font-medium leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="relative block h-11 w-11 overflow-hidden rounded-full bg-line">
                    <SafeImage src={t.avatar} alt={t.name} />
                  </span>
                  <span className="text-sm font-semibold">{t.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
