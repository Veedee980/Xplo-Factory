import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import MaskLine from "@/components/MaskLine";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { ArrowUpRight } from "@/components/Button";
import { newProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "New Products",
  description: "Upcoming products made by Xplo Factory in Harare.",
};

export default function NewProductsPage() {
  return (
    <>
      <section className="pt-16 text-center sm:pt-24">
        <div className="container-xplo">
          <span className="eyebrow fade-up">Upcoming Products</span>
          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl">
            <MaskLine delay={100}>Just In:</MaskLine>
            <MaskLine delay={220} className="text-accent">Made by Xplo</MaskLine>
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-xplo grid gap-8 md:grid-cols-2">
          {newProducts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <Link href={`/new-products/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl3 bg-cream">
                  <div className="absolute inset-0 transition-transform duration-[1000ms] group-hover:scale-110">
                    <SafeImage src={p.image} alt={p.title} />
                  </div>
                  <span className="chip absolute left-4 top-4">{p.tag}</span>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold transition-colors group-hover:text-accent sm:text-3xl">{p.title}</h2>
                  <span className="flex shrink-0 items-center gap-2 text-sm font-semibold">
                    Place Your Order
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper transition-all group-hover:rotate-45 group-hover:bg-accent">
                      <ArrowUpRight />
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
