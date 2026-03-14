import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingTiers } from "@/data/site-data";

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden border-y border-[oklch(0.84_0.02_70)] bg-[oklch(0.955_0.012_76)] py-[clamp(4.5rem,8vw,7.2rem)]">
      <div className="pointer-events-none absolute -right-20 top-8 h-64 w-64 rounded-full bg-[oklch(0.89_0.07_36/0.35)] blur-3xl" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple packages, premium output"
          description="Choose the session depth that best fits your timeline and story."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative border p-7 ${
                tier.recommended
                  ? "-translate-y-1 border-[oklch(0.46_0.11_34)] bg-[oklch(0.98_0.01_82)] shadow-[0_22px_58px_-36px_oklch(0.42_0.12_34/0.48)]"
                  : "border-[oklch(0.83_0.02_70)] bg-[oklch(0.97_0.008_82)]"
              }`}
            >
              {tier.recommended ? (
                <span className="absolute -top-3 left-6 bg-[oklch(0.46_0.11_34)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[oklch(0.98_0.008_82)]">
                  Recommended
                </span>
              ) : null}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.46_0.04_45)]">{tier.name}</p>
              <p className="mt-3 text-5xl text-[oklch(0.19_0.03_42)]">{tier.price}</p>
              <p className="mt-2 text-sm text-[oklch(0.42_0.02_52)]">{tier.duration}</p>
              <ul className="mt-7 space-y-2.5 border-t border-[oklch(0.84_0.02_70)] pt-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.02_50)]">
                    <Check className="h-4 w-4 text-[oklch(0.46_0.11_34)]" /> {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-8 inline-block px-5 py-2.5 text-sm font-medium tracking-wide transition ${
                  tier.recommended
                    ? "bg-[oklch(0.23_0.03_42)] text-[oklch(0.98_0.01_82)] hover:bg-[oklch(0.16_0.03_40)]"
                    : "border border-[oklch(0.64_0.05_40)] text-[oklch(0.24_0.03_42)] hover:border-[oklch(0.46_0.11_34)]"
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
