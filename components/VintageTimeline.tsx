"use client";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";

function AgingCurve({ progress }: { progress: number }) {
  const w = 120;
  const h = 48;
  const peak = Math.min(100, progress + 15);
  const path = `M 0 ${h} Q ${w * 0.35} ${h - peak * 0.4} ${w * 0.55} ${h - peak * 0.55} T ${w} ${h - progress * 0.35}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 h-12 w-full text-brand-primary" aria-hidden>
      <path d={path} fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
      <line x1="0" y1={h - 1} x2={w} y2={h - 1} stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

export function VintageTimeline() {
  const sorted = [...products].sort(
    (a, b) => Number((a.specs as Record<string, string>).Vintage) - Number((b.specs as Record<string, string>).Vintage)
  );

  return (
    <section className="border-y border-brand-border bg-brand-surface/40 py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display text-3xl">Vintage timeline</h2>
        <p className="mt-2 text-sm text-brand-muted">Scroll the cellar by year — aging curves are illustrative.</p>
        <div className="mt-8 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
          {sorted.map((p) => {
            const specs = p.specs as Record<string, string>;
            const year = specs.Vintage;
            const aging = Number(p.aging) || 40;
            return (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="panel-label min-w-[200px] shrink-0 snap-start rounded-sm p-4 transition hover:opacity-95"
              >
                <p className="font-display text-3xl">{year}</p>
                <div className="relative mt-3 h-28 w-full overflow-hidden rounded-sm bg-[#1a0f14]/10">
                  <Image src={p.image} alt="" fill className="object-cover opacity-90" sizes="200px" />
                </div>
                <p className="mt-3 text-sm font-semibold leading-tight">{p.name}</p>
                <p className="text-xs opacity-70">{specs.Region}</p>
                <AgingCurve progress={aging} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
