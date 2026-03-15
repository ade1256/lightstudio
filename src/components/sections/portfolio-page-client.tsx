"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { TopNav } from "@/components/ui/top-nav";
import { PortfolioItem } from "@/types";

interface PortfolioPageClientProps {
  items: PortfolioItem[];
}

export function PortfolioPageClient({ items }: PortfolioPageClientProps) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((item) => item.category)))], [items]);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredItems = useMemo(
    () => (activeCategory === "All" ? items : items.filter((item) => item.category === activeCategory)),
    [activeCategory, items],
  );

  return (
    <main className="site-background min-h-screen text-[var(--text)]">
      <TopNav />

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <div className="mb-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Portfolio</p>
            <h1 className="mt-2 text-[clamp(2rem,5vw,4rem)] leading-[0.95]">Galeri lengkap Lightstudio</h1>
          </div>

          <div className="mb-6 flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition sm:text-sm ${
                  activeCategory === category
                    ? "border-[var(--brand)] bg-[var(--brand)] text-[var(--brand-ink)]"
                    : "border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--brand)] hover:text-[var(--text)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filteredItems.map((item) => (
              <article key={item.id} className="mb-4 break-inside-avoid overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
                <Image src={item.src} alt={item.alt} width={item.width} height={item.height} className="h-auto w-full object-cover" />
                <div className="flex items-center justify-between gap-3 px-3 py-2.5">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <span className="text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">{item.category}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
