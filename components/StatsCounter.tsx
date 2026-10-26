"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

type Stat = (typeof stats)[number];

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1800;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(stat.target * (1 - Math.pow(1 - p, 4)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [stat.target]);

  return (
    <div ref={ref}>
      <p className="font-display text-6xl font-bold leading-none tracking-tight sm:text-7xl">
        {value.toFixed(stat.decimals)}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-sm text-muted">{stat.label}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 gap-8 border-t border-line pt-8">
      {stats.map((s) => (
        <StatItem key={s.label} stat={s} />
      ))}
    </div>
  );
}
