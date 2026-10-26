import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CTABanner from "@/components/CTABanner";
import MaskLine from "@/components/MaskLine";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { getNewProduct, newProducts, waLink } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return newProducts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getNewProduct(params.slug);
  if (!p) return {};
  return { title: p.title, description: `${p.title} — a new product from Xplo Factory, Harare.` };
}

export default function NewProductPage({ params }: Props) {
  const product = getNewProduct(params.slug);
  if (!product) notFound();

  return (
    <>
      <section className="pt-12 sm:pt-20">
        <div className="container-xplo">
          <Link href="/new-products" className="text-sm font-semibold text-muted transition-colors hover:text-accent">
            ← All new products
          </Link>
          <span className="chip fade-up mt-8">{product.tag}</span>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl">
            <MaskLine delay={100}>{product.title}</MaskLine>
          </h1>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-xplo grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal scale>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl3 bg-cream">
              <SafeImage src={product.image} alt={product.title} />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-2xl font-bold">Coming soon from Xplo</h2>
            <p className="mt-4 text-muted">
              {product.title} is launching soon from the Xplo Factory workshop in Harare. Place your order early to be first in line.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={waLink(`Hi Xplo Factory, I'd like to place an order for: ${product.title}`)} external variant="accent">
                Place Your Order
              </Button>
              <Button href="/contact" variant="outline">
                Ask a Question
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
