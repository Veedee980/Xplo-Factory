import Button from "@/components/Button";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { images } from "@/lib/data";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      {/* Giant looping headline behind the content */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.07]">
        <Marquee speed={45} pauseOnHover={false} gap="gap-12">
          {[0, 1, 2].map((i) => (
            <span key={i} className="whitespace-nowrap font-display text-[12rem] font-bold leading-none">
              Bring Your Ideas To Life •
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-xplo relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Visit Today</span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-6xl">Bring Your Ideas To Life</h2>
          <div className="mt-8">
            <Button href="/services" variant="accent">
              Get a Quote
            </Button>
          </div>
        </Reveal>
        <Reveal delay={150} scale>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rotate-3 overflow-hidden rounded-xl3 border border-paper/10 bg-charcoal shadow-2xl transition-transform duration-700 hover:rotate-0">
            <SafeImage src={images.cta} alt="Bring your ideas to life" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
