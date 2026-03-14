import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingTiers } from "@/data/site-data";

export function PricingSection() {
  return (
    <section id="pricing" className="section-gradient-soft py-[clamp(4.2rem,8vw,7rem)]">
      <Container>
        <SectionHeading
          eyebrow="Paket Harga"
          title="Transparan dari awal, tanpa biaya kejutan"
          description="Pilih paket sesuai kebutuhan. Kalau bingung, mulai dari Signature karena paling seimbang untuk mayoritas kebutuhan klien."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`border p-6 ${
                tier.recommended
                  ? "border-[var(--brand)] bg-[color-mix(in_oklab,var(--brand)_10%,var(--surface))]"
                  : "border-[var(--line)] bg-[var(--surface)]"
              }`}
            >
              {tier.recommended ? (
                <p className="mb-4 inline-block border border-[var(--brand)] bg-[var(--brand)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--brand-ink)]">
                  Most chosen
                </p>
              ) : null}

              <h3 className="text-2xl text-[var(--text)]">{tier.name}</h3>
              <p className="mt-2 text-4xl text-[var(--text)]">{tier.price}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{tier.duration}</p>

              <ul className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <Check className="mt-0.5 h-4 w-4 text-[var(--brand)]" /> {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`mt-7 inline-block w-full px-5 py-3 text-center text-sm font-semibold tracking-wide transition ${
                  tier.recommended
                    ? "bg-[var(--brand)] text-[var(--brand-ink)] hover:brightness-110"
                    : "border border-[var(--line)] text-[var(--text)] hover:border-[var(--brand)]"
                }`}
              >
                Pilih {tier.name}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
