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
    <section id="portfolio" className="bg-[oklch(0.97_0.01_80)] py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="A curated gallery of emotion, detail, and light"
          description="Browse by category and open any image for an immersive close view."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-xs tracking-wide transition sm:text-sm ${
                activeCategory === category
                  ? "bg-[oklch(0.23_0.03_58)] text-[oklch(0.96_0.01_80)]"
                  : "bg-[oklch(0.93_0.01_80)] text-[oklch(0.35_0.02_58)] hover:bg-[oklch(0.9_0.02_75)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, idx) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              onClick={() => setSelectedId(item.id)}
              className="group relative mb-4 block w-full overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full rounded-sm object-cover transition duration-700 group-hover:scale-[1.025]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-left text-sm text-white opacity-0 transition group-hover:opacity-100">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-5xl"
            >
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                width={selectedItem.width}
                height={selectedItem.height}
                className="max-h-[90vh] w-auto rounded-md object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
