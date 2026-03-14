import { AboutSection } from "@/components/sections/about-section";
import { BookingSection } from "@/components/sections/booking-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <main className="site-background overflow-x-clip text-[var(--text)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface)_82%,var(--brand)_18%),var(--surface))]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <p className="font-display text-3xl">Lightstudio</p>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex">
            <a className="transition hover:text-[var(--text)]" href="#portfolio">Portfolio</a>
            <a className="transition hover:text-[var(--text)]" href="#pricing">Pricing</a>
            <a className="transition hover:text-[var(--text)]" href="#services">Services</a>
            <a className="transition hover:text-[var(--text)]" href="#about">About</a>
            <a className="transition hover:text-[var(--text)]" href="#booking">Booking</a>
          </nav>

          <a
            href="#booking"
            className="shrink-0 rounded-full border border-[var(--brand)] bg-[var(--brand)] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-ink)] shadow-[0_8px_26px_-12px_color-mix(in_oklab,var(--brand)_66%,black)]"
          >
            Book now
          </a>
        </div>
      </header>

      <div className="h-[84px]" aria-hidden />
      <HeroSection />
      <PortfolioSection />
      <PricingSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
