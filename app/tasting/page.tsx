import Link from "next/link";
import { CellarDescent } from "@/components/CellarDescent";
import { PairingMatrix } from "@/components/PairingMatrix";

export default function TastingPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c4a574]">Tasting room</p>
        <h1 className="mt-2 font-display text-5xl">Editorial pours</h1>
        <p className="mt-3 max-w-xl text-sm text-[#f5e6d3]/70">Descend the cellar in story form — no bottle spinner.</p>
        <Link href="/shop" className="btn-primary mt-6 inline-flex">Shop wines</Link>
      </div>
      <CellarDescent />
      <PairingMatrix />
    </div>
  );
}
