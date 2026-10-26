import type { Metadata } from "next";
import Button from "@/components/Button";
import CTABanner from "@/components/CTABanner";
import MaskLine from "@/components/MaskLine";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import { creativeWorlds, images, team, videos } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2015 as a home-based printing business, Xplo Factory has grown into a trusted printing and branding company serving Zimbabwe.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 text-center sm:pt-24">
        <div className="container-xplo">
          <span className="eyebrow fade-up">About Xplo Factory</span>
          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl lg:text-8xl">
            <MaskLine delay={100}>Your Creative</MaskLine>
            <MaskLine delay={220} className="text-accent">Partner</MaskLine>
          </h1>
        </div>
      </section>

      <VideoSection src={videos.aboutHero} />

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="container-xplo grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">About Us</span>
            <h2 className="mt-3 text-4xl font-bold sm:text-6xl">The Story Xplo Factory</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Founded in <strong className="text-ink">2015</strong> as a home-based printing business, Xplo Factory has grown through passion, creativity and a commitment to quality. What started with simple printing services has evolved into a trusted printing and branding company serving businesses, schools and individuals across Zimbabwe.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Today, we proudly operate from <strong className="text-ink">Harare CBD</strong>, offering professional printing, branding, embroidery, personalized gifts and promotional products that help our customers stand out.
            </p>
            <p className="mt-8 rounded-xl2 border-l-4 border-accent bg-cream p-6 text-lg font-semibold">
              At Xplo Factory, we don&apos;t just print we help brands grow, businesses stand out and memories last.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            <Reveal scale>
              <div className="relative aspect-[3/5] overflow-hidden rounded-xl3 bg-cream">
                <SafeImage src={images.aboutA} alt="Xplo Factory print work" />
              </div>
            </Reveal>
            <Reveal scale delay={150}>
              <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-xl3 bg-cream">
                <SafeImage src={images.aboutB} alt="Xplo Factory branded products" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Purpose + stats */}
      <section className="bg-cream py-16 sm:py-28">
        <div className="container-xplo grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">About Xplo Factory</span>
            <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Printing With Purpose.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              At Xplo Factory, we believe every print represents a brand, a business or a special memory. We combine creativity, quality materials and attention to detail to produce products that help our customers grow, promote and celebrate. Whether you need business branding, promotional products or personalized gifts, our team delivers excellent workmanship and reliable service.
            </p>
            <div className="mt-8">
              <Button href="/services" variant="outline">Read More</Button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <StatsCounter />
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-28">
        <div className="container-xplo grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our Mission &amp; Vision</span>
            <h2 className="mt-3 text-4xl font-bold leading-[1.05] sm:text-6xl">More Than a Brand. A Creative Factory.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Xplo Factory brings creativity, design, print, apparel and visual storytelling under one roof. From an idea on paper to a finished product, we create practical, professional and memorable solutions for individuals, businesses and brands.
            </p>
            <h3 className="mt-10 text-2xl font-semibold">One Factory. Multiple Creative Worlds</h3>
            <p className="mt-3 text-muted">
              Our work extends across <strong className="text-ink">Xplo Designs &amp; Print</strong>, <strong className="text-ink">Xplo Gear</strong> and <strong className="text-ink">Xplo Pictures</strong>—each with its own creative focus, but all powered by the same Xplo Factory vision. Whether you need a brand designed and printed, custom apparel made, or a professional photoshoot captured, we turn ideas into things you can see, wear and share.
            </p>
            <ul className="mt-8 space-y-3">
              {creativeWorlds.map((w, i) => (
                <Reveal key={w.name} delay={i * 100}>
                  <li className="card flex gap-4 p-5 transition-transform duration-300 hover:-translate-y-1">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>
                      <strong className="block">{w.name}</strong>
                      <span className="text-sm text-muted">{w.description}</span>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>
          <Reveal scale delay={150}>
            <div className="relative aspect-square overflow-hidden rounded-xl3 bg-cream">
              <div className="absolute inset-0 transition-transform duration-[1200ms] hover:scale-105">
                <SafeImage src={images.mission} alt="Xplo Factory creative worlds" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <VideoSection src={videos.aboutTeam} />

      {/* Team */}
      <section id="team" className="scroll-mt-24 overflow-hidden pb-20 sm:pb-32">
        <div className="container-xplo">
          <Reveal>
            <span className="eyebrow">Our Team</span>
            <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Meet The Team</h2>
          </Reveal>
        </div>
        <Marquee speed={50} className="mt-14">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-60 shrink-0 sm:w-72">
              <div className="relative aspect-square overflow-hidden rounded-xl3 bg-cream">
                <SafeImage src={team[0].image} alt={team[0].name} />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent">{team[0].role}</p>
              <p className="text-lg font-semibold">{team[0].name}</p>
            </div>
          ))}
        </Marquee>
      </section>

      <CTABanner />
    </>
  );
}
