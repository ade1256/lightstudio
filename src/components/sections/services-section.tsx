"use client";

import { Camera, GraduationCap, Heart, Package, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/site-data";

const icons = { Camera, Heart, Sparkles, GraduationCap, Package } as const;

export function ServicesSection() {
  return (
    <section id="services" className="py-[clamp(4.5rem,8vw,7.2rem)]">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Specialized sessions tailored to your story and style"
          description="Each package includes planning guidance, professional direction, and polished retouching."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -5 }}
                className="group relative border border-[oklch(0.84_0.02_68)] bg-[linear-gradient(165deg,oklch(0.985_0.006_82),oklch(0.965_0.01_78))] p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="h-5 w-5 text-[oklch(0.46_0.11_34)] transition group-hover:text-[oklch(0.35_0.12_34)]" />
                  <span className="h-px w-12 bg-[linear-gradient(90deg,oklch(0.6_0.09_36),transparent)]" />
                </div>
                <h3 className="text-2xl leading-tight text-[oklch(0.22_0.03_44)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[oklch(0.43_0.02_52)]">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
