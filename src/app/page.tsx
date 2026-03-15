import { AboutSection } from "@/components/sections/about-section";
import { BookingSection } from "@/components/sections/booking-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TopNav } from "@/components/ui/top-nav";
import { getPortfolioContent, getPricingContent } from "@/lib/cms-content";

export default async function Home() {
  const [portfolioItems, pricingCatalog] = await Promise.all([getPortfolioContent(), getPricingContent()]);

  return (
    <main className="site-background overflow-x-clip text-[var(--text)]">
      <TopNav />
      <HeroSection />
      <PortfolioSection items={portfolioItems} />
      <PricingSection pricingCatalog={pricingCatalog} />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
