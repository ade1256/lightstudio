"use client";

import { useMemo, useState } from "react";
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
          description="Semua paket tetap lengkap, tapi ditampilkan lebih clean supaya cepat dibaca."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {pricingCatalog.map((group) => (
            <button
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition sm:text-sm ${
                activeCategory === group.category
                  ? "border-[var(--brand)] bg-[var(--brand)] text-[var(--brand-ink)]"
                  : "border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--brand)] hover:text-[var(--text)]"
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {activeGroup.items.map((item) => (
            <article
              key={`${activeGroup.category}-${item.name}`}
              className="border border-[var(--line)] bg-[var(--surface)] p-5"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{item.name}</p>
              <p className="mt-2 text-3xl text-[var(--text)]">{item.price}</p>

              {item.notes?.length ? (
                <ul className="mt-4 space-y-1.5 border-t border-[var(--line)] pt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {item.notes.map((note) => (
                    <li key={note}>• {note}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
