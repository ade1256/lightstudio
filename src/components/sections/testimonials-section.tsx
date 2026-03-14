"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/site-data";

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by couples, families, and ambitious brands"
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-[oklch(0.9_0.01_78)] bg-[oklch(0.98_0.004_80)] p-6"
            >
              <div className="flex items-center gap-3">
                <Image src={item.avatar} alt={item.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-[oklch(0.24_0.03_58)]">{item.name}</p>
                  <p className="text-xs text-[oklch(0.45_0.02_60)]">{item.role}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[oklch(0.76_0.11_85)] text-[oklch(0.76_0.11_85)]" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[oklch(0.42_0.02_62)]">“{item.review}”</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
