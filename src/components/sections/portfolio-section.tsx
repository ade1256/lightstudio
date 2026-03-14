"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioCategories, portfolioItems } from "@/data/site-data";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof portfolioCategories)[number]>("All");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const selectedItem = portfolioItems.find((item) => item.id === selectedId) ?? null;

  return (
    <section id="portfolio" className="relative bg-[oklch(0.97_0.01_82)] py-[clamp(4.5rem,9vw,8rem)]">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="A curated gallery of emotion, detail, and light"
          description="Browse by category and open any image for an immersive close view."
          align="center"
        />

        <div className="mt-11 flex flex-wrap justify-center gap-2.5">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition sm:text-sm ${
                activeCategory === category
                  ? "border-[oklch(0.45_0.12_32)] bg-[oklch(0.45_0.12_32)] text-[oklch(0.98_0.01_85)]"
                  : "border-[oklch(0.82_0.02_68)] text-[oklch(0.36_0.02_52)] hover:border-[oklch(0.58_0.07_38)] hover:text-[oklch(0.26_0.04_42)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-11 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, idx) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              onClick={() => setSelectedId(item.id)}
              className="group relative mb-5 block w-full overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.16_0.03_40/0.88)] to-transparent p-4 text-left text-sm text-white opacity-0 transition group-hover:opacity-100">
                {item.title}
              </span>
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.12_0.02_40/0.87)] p-4"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-5xl border border-white/20"
            >
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                width={selectedItem.width}
                height={selectedItem.height}
                className="max-h-[90vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
