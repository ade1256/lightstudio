import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/site-data";

export function TestimonialsSection() {
  return (
    <section className="py-[clamp(4rem,8vw,7rem)]">
      <Container>
        <SectionHeading
          eyebrow="Client Voice"
          title="Dipilih karena kualitas, balik lagi karena pengalaman"
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex gap-1">
              {Array.from({ length: testimonials[0].rating }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-[var(--brand)] text-[var(--brand)]" />
              ))}
            </div>
            <p className="mt-4 text-2xl leading-snug text-[var(--text)]">“{testimonials[0].review}”</p>
            <div className="mt-6 flex items-center gap-3">
              <Image src={testimonials[0].avatar} alt={testimonials[0].name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-[var(--text)]">{testimonials[0].name}</p>
                <p className="text-xs uppercase tracking-wider text-[var(--muted)]">{testimonials[0].role}</p>
              </div>
            </div>
          </article>

          <div className="space-y-5">
            {testimonials.slice(1).map((item) => (
              <article key={item.name} className="border border-[var(--line)] bg-[var(--surface)] p-5">
                <p className="text-sm leading-relaxed text-[var(--muted)]">“{item.review}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <Image src={item.avatar} alt={item.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text)]">{item.name}</p>
                    <p className="text-[0.72rem] uppercase tracking-wider text-[var(--muted)]">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
