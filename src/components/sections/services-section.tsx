import { Camera, GraduationCap, Heart, Package, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/site-data";

const icons = { Camera, Heart, Sparkles, GraduationCap, Package } as const;

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-[var(--line)] bg-[var(--surface)] py-[clamp(4rem,8vw,7rem)]">
      <Container>
        <SectionHeading
          eyebrow="Layanan"
          title="Sesi yang dirancang sesuai tujuan visualmu"
          description="Bukan paket generik. Tiap layanan disusun supaya output foto tepat untuk kebutuhan pribadi atau bisnis."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <article key={service.title} className="grid grid-cols-[auto_1fr] gap-4 border-t border-[var(--line)] pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--brand)_55%,transparent)] bg-[color-mix(in_oklab,var(--brand)_14%,transparent)]">
                  <Icon className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">0{i + 1}</p>
                  <h3 className="mt-1 text-2xl text-[var(--text)]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
