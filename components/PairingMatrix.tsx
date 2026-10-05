"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "@/lib/data";

const FOODS = ["Roast chicken", "Grilled fish", "Mushroom risotto", "Aged cheese", "Charcuterie", "Shellfish"];

export function PairingMatrix() {
  const [food, setFood] = useState(FOODS[0]);

  const matches = useMemo(
    () => products.filter((p) => (p.specs as Record<string, string>).Pairing === food),
    [food]
  );
  const fallback = products.filter((p) => String(p.tasting).toLowerCase().includes("earth") || p.category === "Red").slice(0, 2);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h2 className="font-display text-3xl">Pairing matrix</h2>
      <p className="mt-2 text-sm text-brand-muted">Pick a dish — see bottles our somm team maps to it.</p>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-brand-border bg-brand-surface p-3 text-left font-medium text-brand-muted">Food</th>
              {["Red", "White", "Sparkling", "Rosé"].map((type) => (
                <th key={type} className="border border-brand-border bg-brand-surface p-3 text-left font-display">
                  {type}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FOODS.map((f) => (
              <tr key={f} className={food === f ? "bg-brand-primary/20" : ""}>
                <td className="border border-brand-border p-3">
                  <button
                    type="button"
                    onClick={() => setFood(f)}
                    className={`text-left font-semibold ${food === f ? "text-brand-fg" : "text-brand-muted hover:text-brand-fg"}`}
                  >
                    {f}
                  </button>
                </td>
                {["Red", "White", "Sparkling", "Rosé"].map((type) => {
                  const hit = products.find(
                    (p) => p.category === type && (p.specs as Record<string, string>).Pairing === f
                  );
                  return (
                    <td key={type} className="border border-brand-border p-3 text-brand-muted">
                      {hit ? (
                        <Link href={`/product/${hit.id}`} className="font-medium text-brand-fg hover:underline">
                          {hit.name}
                        </Link>
                      ) : (
                        <span className="opacity-40">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 panel-label rounded-sm p-4 text-sm">
        <p className="font-semibold">Tonight: {food}</p>
        <ul className="mt-2 space-y-1">
          {(matches.length ? matches : fallback).map((p) => (
            <li key={p.id}>
              <Link href={`/product/${p.id}`} className="underline">{p.name}</Link>
              <span className="opacity-70"> · {String(p.tasting)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
