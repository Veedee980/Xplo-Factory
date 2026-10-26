import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";
import MaskLine from "@/components/MaskLine";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { blogPosts, getPost } from "@/lib/blog";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="pt-12 sm:pt-20">
        <div className="container-xplo">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="text-sm font-semibold text-muted transition-colors hover:text-accent">
              ← All articles
            </Link>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
              <MaskLine delay={100}>{post.title}</MaskLine>
            </h1>
            <p className="fade-up mt-5 text-lg text-muted" style={{ "--d": "400ms" } as React.CSSProperties}>
              {post.excerpt}
            </p>
          </div>

          <Reveal scale>
            <div className="relative mx-auto mt-12 aspect-[16/9] max-w-5xl overflow-hidden rounded-xl3 bg-cream">
              <SafeImage src={post.cover} alt={post.title} />
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-10 pb-20 sm:pb-28">
            {post.sections.map((s, i) => (
              <Reveal key={i}>
                {s.heading && <h2 className="text-2xl font-bold sm:text-3xl">{s.heading}</h2>}
                <div className="mt-3 space-y-4 text-lg leading-relaxed text-ink/75">
                  {s.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-xplo">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">More to read</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl3 bg-white">
                    <div className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-110">
                      <SafeImage src={p.cover} alt={p.title} />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold transition-colors group-hover:text-accent">{p.title}</h3>
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
