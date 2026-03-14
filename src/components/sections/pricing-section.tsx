import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingTiers } from "@/data/site-data";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[oklch(0.965_0.01_75)] py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple packages, premium output"
          description="Choose the session depth that best fits your timeline and story."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative border p-7 ${
                tier.recommended
                  ? "border-[oklch(0.62_0.06_68)] bg-[oklch(0.99_0.01_80)] shadow-[0_18px_60px_-35px_oklch(0.5_0.05_68/0.45)]"
                  : "border-[oklch(0.88_0.01_75)] bg-[oklch(0.985_0.003_82)]"
              }`}
            >
              {tier.recommended ? (
                <span className="absolute -top-3 left-6 rounded-full bg-[oklch(0.62_0.06_68)] px-3 py-1 text-xs text-white">
                  Recommended
                </span>
              ) : null}
              <p className="text-sm uppercase tracking-widest text-[oklch(0.45_0.02_60)]">{tier.name}</p>
              <p className="mt-3 font-display text-5xl text-[oklch(0.2_0.02_55)]">{tier.price}</p>
              <p className="mt-2 text-sm text-[oklch(0.45_0.02_60)]">{tier.duration}</p>
              <ul className="mt-6 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[oklch(0.38_0.02_60)]">
                    <Check className="h-4 w-4 text-[oklch(0.55_0.04_68)]" /> {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-7 inline-block rounded-full px-5 py-2.5 text-sm transition ${
                  tier.recommended
                    ? "bg-[oklch(0.24_0.03_58)] text-white hover:bg-[oklch(0.18_0.02_58)]"
                    : "border border-[oklch(0.82_0.02_70)] text-[oklch(0.28_0.03_58)] hover:border-[oklch(0.64_0.03_65)]"
                }`}
              >
                Choose {tier.name}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
