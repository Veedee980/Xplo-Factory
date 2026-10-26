import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CTABanner from "@/components/CTABanner";
import MaskLine from "@/components/MaskLine";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import ServiceCard from "@/components/ServiceCard";
import { getService, services, waLink } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: `${s.title} — professionally made by Xplo Factory in Harare, Zimbabwe.`,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="pt-12 sm:pt-20">
        <div className="container-xplo">
          <Link href="/services" className="text-sm font-semibold text-muted transition-colors hover:text-accent">
            ← All Services
          </Link>
          <span className="chip fade-up mt-8">● {service.status}</span>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl">
            <MaskLine delay={100}>{service.title}</MaskLine>
          </h1>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-xplo grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal scale>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl3 bg-cream">
              <SafeImage src={service.image} alt={service.title} />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-2xl font-bold">Product Details</h2>
            <p className="mt-4 text-muted">
              {service.title} — custom made, built for you and produced at our Harare workshop. Tell us the size, quantity, colours and artwork and we&apos;ll prepare a tailored quote. No artwork yet? Our design team can create it with you.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Custom made", "Order today", "Built for you"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={waLink(`Hi Xplo Factory, I'd like a quote for: ${service.title}`)} external variant="accent">
                Order on WhatsApp
              </Button>
              <Button href="/contact" variant="outline">
                Get a Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-xplo">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">More from Xplo Factory</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
