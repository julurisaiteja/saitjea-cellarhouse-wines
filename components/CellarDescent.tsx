import Link from "next/link";
import { brand } from "@/lib/data";

export function CellarDescent() {
  return (
    <section className="border-y border-[#c4a574]/20 bg-[#1a0f14]">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:px-6">
        <div className="relative min-h-[320px] overflow-hidden border border-[#c4a574]/25 md:min-h-[380px]">
          <div className="hero-film" aria-hidden>
            <img className="hero-film-img" src={brand.heroImage} alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f14] via-[#1a0f14]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 space-y-2 p-6">
            {["Street level", "Barrel hall", "Private tasting"].map((step, i) => (
              <div
                key={step}
                className="flex items-center gap-3 text-[#f5e6d3]"
                style={{ opacity: 0.55 + i * 0.2 }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#c4a574]">0{i + 1}</span>
                <span className="font-display text-xl md:text-2xl">{step}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-[#c4a574]">Cellar descent</p>
          <h2 className="mt-3 font-display text-3xl text-[#f5e6d3] md:text-4xl">Down into the racks</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#f5e6d3]/75">
            A site journey through stone, oak, and low light — not a bottle turntable. Pairings and vintage notes wait below.
          </p>
          <Link href="/tasting" className="btn-primary mt-8 inline-flex">
            Enter tasting room
          </Link>
        </div>
      </div>
    </section>
  );
}
