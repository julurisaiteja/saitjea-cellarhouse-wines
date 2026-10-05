import Link from "next/link";
import { brand } from "@/lib/data";
import { VintageTimeline } from "@/components/VintageTimeline";
import { PairingMatrix } from "@/components/PairingMatrix";
import { Newsletter } from "@/components/Newsletter";
import { CellarDescent } from "@/components/CellarDescent";
import { HeroCinema } from "@/components/HeroCinema";

const SOMM_SCORES = [94, 91, 96];

export default function HomePage() {
  return (
    <>
      <section className="hero-cellar relative min-h-screen px-4 py-24 md:px-8">
        <HeroCinema video={brand.heroVideo} image={brand.heroImage} />
        <div className="relative z-10 mx-auto grid min-h-[80vh] max-w-6xl items-end gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-rise border-l border-[#c4a574]/50 pl-6 md:pl-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[#c4a574]">Volume XII · Cellar notes</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.1] md:text-7xl">{brand.name}</h1>
            <p className="mt-6 font-display text-xl italic text-[#f5e6d3]/85">{brand.tagline}</p>
            <p className="drop-cap mt-8 max-w-xl text-base leading-relaxed text-[#f5e6d3]/75">{brand.description}</p>
            <Link href="/shop" className="btn-primary mt-10 inline-flex animate-pulseSoft">Taste tonight</Link>
          </div>
          <aside className="animate-rise-delay space-y-6 border border-[#c4a574]/25 bg-[#1a0f14]/80 p-6 backdrop-blur">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c4a574]">Pull quote</p>
            <blockquote className="font-display text-2xl leading-snug text-[#f5e6d3]">
              “{brand.reviews[0]?.[2] || "A cellar that reads like a magazine."}”
            </blockquote>
            <footer className="text-sm text-[#c4a574]">{brand.reviews[0]?.[0]} · Sommelier desk</footer>
          </aside>
        </div>
      </section>
      <CellarDescent />
      <VintageTimeline />
      <PairingMatrix />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl animate-rise">Sommelier notes</h2>
        <ul className="editorial-col mt-8 stagger-children">
          {brand.reviews.map(([name, , text], i) => (
            <li key={name} className="mb-6 break-inside-avoid border-t border-[#c4a574]/25 pt-4">
              <p className="font-display text-4xl text-[#8b1e3f]">{SOMM_SCORES[i % SOMM_SCORES.length]}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#f5e6d3]/80">{text}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-[#c4a574]">{name}</p>
            </li>
          ))}
        </ul>
      </section>
      <Newsletter />
    </>
  );
}
