"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/site-data";

export function TestimonialsSection() {
  return (
    <section className="py-[clamp(4.4rem,8vw,7rem)]">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by couples, families, and ambitious brands"
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-[oklch(0.84_0.02_68)] bg-[oklch(0.98_0.009_82)] p-6"
            >
              <div className="flex items-center gap-3">
                <Image src={item.avatar} alt={item.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-[oklch(0.22_0.03_44)]">{item.name}</p>
                  <p className="text-xs uppercase tracking-wider text-[oklch(0.48_0.03_44)]">{item.role}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[oklch(0.79_0.12_72)] text-[oklch(0.79_0.12_72)]" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[oklch(0.41_0.02_52)]">“{item.review}”</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
