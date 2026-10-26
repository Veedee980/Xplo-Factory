import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import Button from "@/components/Button";
import { bookImages, waLink } from "@/lib/data";

const tilt = ["-rotate-6", "-rotate-3", "rotate-0", "rotate-3", "rotate-6"];
const lift = ["translate-y-6", "translate-y-2", "-translate-y-2", "translate-y-2", "translate-y-6"];

/** Fan of book covers that straighten and rise on hover. */
export default function BooksShowcase({ heading = "Xplo Books" }: { heading?: string }) {
  return (
    <section className="overflow-hidden bg-cream py-20 sm:py-28">
      <div className="container-xplo">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">Boosting kids minds</span>
          <h2 className="mt-3 text-4xl font-bold sm:text-6xl">{heading}</h2>
        </Reveal>

        <Reveal delay={150} scale>
          <div className="mt-16 flex items-center justify-center -space-x-10 sm:-space-x-14 lg:-space-x-20">
            {bookImages.map((src, i) => (
              <div
                key={src}
                className={`${tilt[i]} ${lift[i]} relative z-0 aspect-[3/4] w-32 shrink-0 overflow-hidden rounded-xl2 border-4 border-paper bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(.2,.7,.1,1)] hover:z-10 hover:-translate-y-6 hover:rotate-0 hover:scale-110 sm:w-48 lg:w-64`}
              >
                <SafeImage src={src} alt="Xplo Books cover" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={250} className="mt-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">● Xplo Books</p>
          <p className="mt-2 text-muted">Where Learning Comes to Life</p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">I Can Write My Name Book</h3>
          <div className="mt-6">
            <Button href={waLink("Hi Xplo Factory, I'd like to order the I Can Write My Name Book.")} external>
              Order This Book
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
