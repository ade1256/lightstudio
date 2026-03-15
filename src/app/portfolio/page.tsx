import { PortfolioPageClient } from "@/components/sections/portfolio-page-client";
import { getPortfolioContent } from "@/lib/cms-content";

export default async function PortfolioPage() {
  const items = await getPortfolioContent();
  return <PortfolioPageClient items={items} />;
}
