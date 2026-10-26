import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowUpRight } from "@/components/Button";
import type { Service } from "@/lib/data";

/** Image card with hover-zoom, used on the home and services pages. */
export default function ServiceCard({
  service,
  tags,
  tall,
}: {
  service: Service;
  tags?: string[];
  tall?: boolean;
}) {
  return (
    <Link href={`/services/${service.slug}`} className="group block">
      <div className={`relative overflow-hidden rounded-xl3 bg-cream ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,.1,1)] group-hover:scale-110">
          <SafeImage src={service.image} alt={service.title} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="chip absolute left-4 top-4">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {service.status}
        </span>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-accent text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight />
        </span>
      </div>
      <div className="mt-4">
        {tags && (
          <p className="flex flex-wrap gap-x-3 text-[11px] font-semibold uppercase tracking-wide text-accent">
            {tags.map((t, i) => (
              <span key={t}>{i === 0 ? "● " : ""}{t}</span>
            ))}
          </p>
        )}
        <h3 className="mt-1 text-lg font-semibold leading-snug transition-colors group-hover:text-accent">{service.title}</h3>
      </div>
    </Link>
  );
}
