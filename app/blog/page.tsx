import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import MaskLine from "@/components/MaskLine";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { ArrowUpRight } from "@/components/Button";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ideas, product launches and practical print tips from Xplo Factory.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <section className="pt-16 text-center sm:pt-24">
        <div className="container-xplo">
          <span className="eyebrow fade-up">Blog</span>
          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl">
            <MaskLine delay={100}>Ideas &amp;</MaskLine>
            <MaskLine delay={220} className="text-accent">Print Tips</MaskLine>
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-xplo">
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-xl3 bg-cream lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                <div className="absolute inset-0 transition-transform duration-[1000ms] group-hover:scale-105">
                  <SafeImage src={featured.cover} alt={featured.title} />
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-14">
                <span className="eyebrow">Latest</span>
                <h2 className="mt-4 text-3xl font-bold leading-tight transition-colors group-hover:text-accent sm:text-5xl">{featured.title}</h2>
                <p className="mt-4 text-muted">{featured.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                  Read article
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper transition-all group-hover:rotate-45 group-hover:bg-accent">
                    <ArrowUpRight />
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl3 bg-cream">
                    <div className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-110">
                      <SafeImage src={p.cover} alt={p.title} />
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug transition-colors group-hover:text-accent">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-semibold underline-offset-4 group-hover:underline">Read article →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
