export type PortfolioCategory =
  | "Wedding"
  | "Graduation"
  | "Family"
  | "Studio Portrait"
  | "Product Photography";

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

export interface PackageItem {
  name: string;
  price: string;
  notes?: string[];
}

export interface PackageCategory {
  category: string;
  items: PackageItem[];
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
}
