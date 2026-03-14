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
    <main className="bg-[oklch(0.98_0.005_80)] text-[oklch(0.2_0.02_55)]">
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
