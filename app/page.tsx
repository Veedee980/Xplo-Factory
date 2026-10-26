import Link from "next/link";
import BooksShowcase from "@/components/BooksShowcase";
import Button, { ArrowUpRight } from "@/components/Button";
import CTABanner from "@/components/CTABanner";
import DesignServices from "@/components/DesignServices";
import MaskLine from "@/components/MaskLine";
import Marquee from "@/components/Marquee";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import { featuredWork, gallery, images, newProducts, siteConfig, videos } from "@/lib/data";

const rowA = gallery.slice(0, 7);
const rowB = gallery.slice(7);
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

function GalleryCard({ src, i }: { src: string; i: number }) {
  return (
    <a
      href="#echibition"
      className={`group relative block h-56 w-44 shrink-0 overflow-hidden rounded-xl3 bg-cream shadow-card transition-transform duration-500 hover:z-10 hover:rotate-0 hover:scale-105 sm:h-72 sm:w-56 ${tilts[i % tilts.length]}`}
    >
      <SafeImage src={src} alt="Xplo Factory print work" />
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
        <div className="container-xplo text-center">
          <div className="fade-up flex justify-center" style={{ "--d": "0ms" } as React.CSSProperties}>
            <Link href="/new-products" className="chip transition-colors hover:border-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              New Product coming soon
            </Link>
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl lg:text-[5.5rem]">
            <MaskLine delay={100}>Printing, Branding</MaskLine>
            <MaskLine delay={220} className="text-accent">&amp; Custom</MaskLine>
            <MaskLine delay={340}>Products in Harare</MaskLine>
          </h1>

          <div className="fade-up mt-9 flex justify-center" style={{ "--d": "700ms" } as React.CSSProperties}>
            <Button href="/services" icon={<ArrowUpRight />}>
              Explore Our Sevices
            </Button>
          </div>
        </div>

        <div className="fade-up mt-16 space-y-4" style={{ "--d": "900ms" } as React.CSSProperties}>
          <Marquee speed={55}>
            {rowA.map((src, i) => (
              <GalleryCard key={src} src={src} i={i} />
            ))}
          </Marquee>
          <Marquee speed={65} reverse>
            {rowB.map((src, i) => (
              <GalleryCard key={src} src={src} i={i + 1} />
            ))}
          </Marquee>
        </div>
      </section>

      {/* ───────── Featured work ───────── */}
      <section id="echibition" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-xplo">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal className="max-w-xl">
              <span className="eyebrow">Featured Work</span>
              <h2 className="mt-3 text-4xl font-bold sm:text-6xl">What We Do!</h2>
              <p className="mt-4 text-muted">
                Explore practical, high-quality print and branding pieces made for businesses, schools, events and everyday moments.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Button href="/services" variant="outline">
                View Our Work
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWork.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90} className={i % 2 ? "lg:mt-12" : ""}>
                <ServiceCard service={s} tags={s.tags} tall />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BooksShowcase />

      {/* ───────── About ───────── */}
      <section className="py-20 sm:py-32">
        <div className="container-xplo grid items-center gap-14 lg:grid-cols-2">
          <Reveal scale>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl3 bg-cream">
              <div className="absolute inset-0 transition-transform duration-[1200ms] hover:scale-105">
                <SafeImage src={images.aboutA} alt="Xplo Factory workshop" />
              </div>
              <a
                href={siteConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="chip absolute bottom-5 left-5 transition-colors hover:bg-accent hover:text-paper"
              >
                Merchant House ↗
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">About Xplo Factory</span>
              <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Printing With Purpose.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                At Xplo Factory, we believe every print represents a brand, a business or a special memory. We combine creativity, quality materials and attention to detail to produce products that help our customers grow, promote and celebrate. Whether you need business branding, promotional products or personalized gifts, our team delivers excellent workmanship and reliable service.
              </p>
              <div className="mt-8">
                <Button href="/services" variant="outline">
                  Read More
                </Button>
              </div>
            </Reveal>
            <Reveal delay={150} className="mt-12">
              <StatsCounter />
            </Reveal>
          </div>
        </div>
      </section>

      <DesignServices />
      <Testimonials />
      <VideoSection src={videos.home} />

      {/* ───────── Upcoming products ───────── */}
      <section className="pb-20 sm:pb-32">
        <div className="container-xplo">
          <Reveal>
            <span className="eyebrow">Upcoming Products</span>
            <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Just In: Made by Xplo</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {newProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <Link href={`/new-products/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl3 bg-cream">
                    <div className="absolute inset-0 transition-transform duration-[1000ms] ease-[cubic-bezier(.2,.7,.1,1)] group-hover:scale-110">
                      <SafeImage src={p.image} alt={p.title} />
                    </div>
                    <span className="chip absolute left-4 top-4">{p.tag}</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold transition-colors group-hover:text-accent sm:text-3xl">{p.title}</h3>
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
        </div>
      </section>

      {/* ───────── Quote ───────── */}
      <section className="bg-cream py-20 sm:py-32">
        <div className="container-xplo grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Let’s Make It Happen</span>
            <h2 className="mt-3 text-4xl font-bold leading-[1.05] sm:text-6xl">Tell us what you’re creating.</h2>
            <p className="mt-5 max-w-md text-muted">
              From branded apparel and print runs to thoughtful gifts and large-format work, share the details and we’ll prepare a tailored quote.
            </p>
            <div className="relative mt-10 hidden aspect-[4/3] max-w-md overflow-hidden rounded-xl3 lg:block">
              <SafeImage src={images.quote} alt="Custom printed products" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="card p-6 sm:p-10">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
