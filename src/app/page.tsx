import { AboutSection } from "@/components/sections/about-section";
import { BookingSection } from "@/components/sections/booking-section";
import { Footer } from "@/components/sections/footer";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <main className="site-background overflow-x-clip text-[var(--text)]">
      <header className="border-b border-[var(--line)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface)_78%,var(--brand)_22%),var(--surface))]">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <p className="font-display text-3xl">Lightstudio</p>
          <a
            href="#booking"
            className="rounded-full border border-[var(--brand)] bg-[var(--brand)] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-ink)] shadow-[0_8px_26px_-12px_color-mix(in_oklab,var(--brand)_66%,black)]"
          >
            Book now
          </a>
        </div>
      </header>
      <AboutSection />
      <PricingSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
