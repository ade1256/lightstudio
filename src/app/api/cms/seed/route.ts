import { NextResponse } from "next/server";
import { assertCmsAccess, sanityWriteClient } from "@/lib/sanity";
import { portfolioItems, services, testimonials } from "@/data/site-data";
import { sanityPricingCatalogSeed } from "@/sanity/data/pricingCatalog";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function POST(req: Request) {
  if (!assertCmsAccess(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const tx = sanityWriteClient.transaction();

  portfolioItems.forEach((item, index) => {
    tx.createOrReplace({
      _id: `portfolio-${slugify(item.title)}-${index + 1}`,
      _type: "portfolioItem",
      title: item.title,
      category: item.category,
      imageUrl: item.src,
      alt: item.alt,
      order: index + 1,
    });
  });

  sanityPricingCatalogSeed.forEach((group, index) => {
    tx.createOrReplace({
      _id: `pricing-${slugify(group.category)}-${index + 1}`,
      _type: "packageCategory",
      category: group.category,
      order: index + 1,
      items: group.items.map((item) => ({
        _type: "packageItem",
        name: item.name,
        price: item.price,
        notes: item.notes || [],
      })),
    });
  });

  services.forEach((item, index) => {
    tx.createOrReplace({
      _id: `service-${slugify(item.title)}-${index + 1}`,
      _type: "serviceItem",
      title: item.title,
      description: item.description,
      icon: item.icon,
      order: index + 1,
    });
  });

  testimonials.forEach((item, index) => {
    tx.createOrReplace({
      _id: `testimonial-${slugify(item.name)}-${index + 1}`,
      _type: "testimonial",
      name: item.name,
      role: item.role,
      avatarUrl: item.avatar,
      rating: item.rating,
      review: item.review,
      order: index + 1,
    });
  });

  await tx.commit();

  return NextResponse.json({
    ok: true,
    seeded: {
      portfolio: portfolioItems.length,
      pricingCategories: sanityPricingCatalogSeed.length,
      services: services.length,
      testimonials: testimonials.length,
    },
  });
}
