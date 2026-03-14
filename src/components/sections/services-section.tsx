"use client";

import { Camera, GraduationCap, Heart, Package, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/site-data";

const icons = { Camera, Heart, Sparkles, GraduationCap, Package } as const;

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Specialized sessions tailored to your story and style"
          description="Each package includes planning guidance, professional direction, and polished retouching."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group border border-[oklch(0.9_0.01_78)] bg-[oklch(0.985_0.004_80)] p-6 transition hover:border-[oklch(0.82_0.03_72)]"
              >
                <Icon className="mb-4 h-5 w-5 text-[oklch(0.45_0.04_65)] transition group-hover:text-[oklch(0.32_0.06_62)]" />
                <h3 className="font-display text-2xl text-[oklch(0.23_0.03_58)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[oklch(0.45_0.02_63)]">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
