"use client";

import { useMemo, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingCatalog } from "@/data/site-data";

export function PricingSection() {
  const [activeCategory, setActiveCategory] = useState(
    pricingCatalog.find((group) => group.category === "Special Session")?.category ?? pricingCatalog[0]?.category ?? "",
  );

  const activeGroup = useMemo(
    () => pricingCatalog.find((group) => group.category === activeCategory) ?? pricingCatalog[0],
    [activeCategory],
  );

  return (
    <section id="pricing" className="section-gradient-soft py-[clamp(4.2rem,8vw,7rem)]">
      <Container>
        <SectionHeading
          eyebrow="Paket Harga"
          title="Pilih kategori, lalu pilih paket"
          description="Semua paket tetap lengkap, ditata lebih elegan biar cepat dipindai dan enak dibaca."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {pricingCatalog.map((group) => {
            const isActive = activeCategory === group.category;

            return (
              <button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition sm:text-sm ${
                  isActive
                    ? "border-[var(--brand)] bg-[var(--brand)] text-[var(--brand-ink)] shadow-[0_10px_24px_-14px_color-mix(in_oklab,var(--brand)_72%,black)]"
                    : "border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--brand)] hover:text-[var(--text)]"
                }`}
              >
                {group.category}
              </button>
            );
          })}
        </div>

        <div className="mt-7 flex items-center justify-between gap-4 border-y border-[var(--line)] py-3">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{activeGroup.category}</p>
          <p className="text-xs text-[var(--muted)]">{activeGroup.items.length} paket tersedia</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {activeGroup.items.map((item, index) => {
            const featured = index === 0;

            return (
              <article
                key={`${activeGroup.category}-${item.name}`}
                className={`relative border p-5 ${
                  featured
                    ? "border-[var(--brand)] bg-[color-mix(in_oklab,var(--brand)_11%,var(--surface))]"
                    : "border-[var(--line)] bg-[var(--surface)]"
                }`}
              >
                {featured ? (
                  <p className="mb-4 inline-flex items-center gap-1 border border-[var(--brand)] bg-[var(--brand)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--brand-ink)]">
                    <Sparkles className="h-3 w-3" /> Highlight
                  </p>
                ) : null}

                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{item.name}</p>
                <p className="mt-2 text-3xl leading-none text-[var(--text)]">{item.price}</p>

                {item.notes?.length ? (
                  <ul className="mt-4 space-y-2 border-t border-[var(--line)] pt-4 text-sm leading-relaxed text-[var(--muted)]">
                    {item.notes.map((note) => (
                      <li key={note} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
