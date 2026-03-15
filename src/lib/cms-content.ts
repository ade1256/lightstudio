import {BusinessSettings, PortfolioItem, PackageCategory} from '@/types'
import {businessSettings as fallbackSettings, portfolioItems as fallbackPortfolio} from '@/data/site-data'
import {sanityPricingCatalogSeed as fallbackPricing} from '@/sanity/data/pricingCatalog'
import {sanityReadClient} from '@/lib/sanity'

function hasSanityConfig() {
  return Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET)
}

export async function getPortfolioContent(): Promise<PortfolioItem[]> {
  if (!hasSanityConfig()) return fallbackPortfolio

  try {
    const data = await sanityReadClient.fetch<Array<{_id: string; title: string; category: string; imageUrl: string; alt?: string; order?: number}>>(
      `*[_type == "portfolioItem"] | order(order asc){_id,title,category,imageUrl,alt,order}`,
    )

    if (!data?.length) return fallbackPortfolio

    return data.map((item, i) => ({
      id: i + 1,
      title: item.title,
      category: item.category,
      src: item.imageUrl,
      alt: item.alt || item.title,
      width: 1000,
      height: 1300,
    }))
  } catch {
    return fallbackPortfolio
  }
}

export async function getPricingContent(): Promise<PackageCategory[]> {
  if (!hasSanityConfig()) return fallbackPricing

  try {
    const data = await sanityReadClient.fetch<PackageCategory[]>(
      `*[_type == "packageCategory"] | order(order asc){category, items[]{name,price,notes}}`,
    )
    return data?.length ? data : fallbackPricing
  } catch {
    return fallbackPricing
  }
}

export async function getBusinessSettingsContent(): Promise<BusinessSettings> {
  if (!hasSanityConfig()) return fallbackSettings

  try {
    const data = await sanityReadClient.fetch<BusinessSettings | null>(
      `*[_type == "businessSettings" && _id == "business-settings"][0]{whatsappUrl,email,phone,instagramUrl,instagramHandle,address,openHours}`,
    )
    return data || fallbackSettings
  } catch {
    return fallbackSettings
  }
}
