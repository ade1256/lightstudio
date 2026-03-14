"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioCategories, portfolioItems } from "@/data/site-data";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof portfolioCategories)[number]>("All");

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="portfolio" className="py-[clamp(4.2rem,8vw,7.5rem)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Kualitas yang bisa kamu lihat, bukan sekadar janji"
            description="Setiap frame dipilih untuk menunjukkan kualitas cahaya, warna kulit, dan detail retouch dari Lightstudio."
          />

          <div className="flex flex-wrap gap-2.5 lg:justify-end">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition sm:text-sm ${
                  activeCategory === category
                    ? "border-[var(--brand)] bg-[var(--brand)] text-[var(--brand-ink)]"
                    : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--brand)] hover:text-[var(--text)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filteredItems.map((item) => (
            <article key={item.id} className="mb-5 break-inside-avoid overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover"
              />
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <p className="text-sm font-semibold text-[var(--text)]">{item.title}</p>
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted)]">{item.category}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
