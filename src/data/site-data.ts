import { PortfolioItem, PricingTier, Service, Testimonial } from "@/types";

export const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Book", href: "#booking" },
];

export const portfolioCategories = [
  "All",
  "Wedding",
  "Graduation",
  "Family",
  "Studio Portrait",
  "Product Photography",
] as const;

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Golden Hour Vows", category: "Wedding", src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", alt: "Couple at sunset wedding", width: 900, height: 1300 },
  { id: 2, title: "Cap Toss", category: "Graduation", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80", alt: "Graduates celebrating outdoors", width: 1000, height: 700 },
  { id: 3, title: "Soft Morning", category: "Family", src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80", alt: "Family portrait in natural light", width: 900, height: 1200 },
  { id: 4, title: "Editorial Close-up", category: "Studio Portrait", src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80", alt: "Studio beauty portrait", width: 900, height: 1200 },
  { id: 5, title: "Minimal Product Frame", category: "Product Photography", src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80", alt: "Luxury watch product shot", width: 1000, height: 800 },
  { id: 6, title: "First Dance", category: "Wedding", src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1200&q=80", alt: "Couple first dance", width: 900, height: 1200 },
  { id: 7, title: "Proud Moment", category: "Graduation", src: "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?auto=format&fit=crop&w=1200&q=80", alt: "Graduation portrait", width: 1000, height: 1300 },
  { id: 8, title: "Studio Sibling", category: "Family", src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1200&q=80", alt: "Family siblings in studio", width: 1000, height: 700 },
  { id: 9, title: "Rembrandt Light", category: "Studio Portrait", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80", alt: "Classic portrait lighting", width: 900, height: 1300 },
  { id: 10, title: "Skincare Set", category: "Product Photography", src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80", alt: "Skincare product composition", width: 1000, height: 1200 },
];

export const services: Service[] = [
  {
    title: "Studio Portrait",
    description: "Editorial and personal portrait sessions crafted with refined lighting and direction.",
    icon: "Camera",
  },
  {
    title: "Wedding Photography",
    description: "Elegant visual storytelling from preparation to celebration with natural emotional coverage.",
    icon: "Heart",
  },
  {
    title: "Event Coverage",
    description: "Discreet documentary-style capture for corporate, private, and cultural gatherings.",
    icon: "Sparkles",
  },
  {
    title: "Graduation Photoshoot",
    description: "Timeless graduation portraits blending formal shots with candid celebratory moments.",
    icon: "GraduationCap",
  },
  {
    title: "Product Photography",
    description: "High-clarity product imagery optimized for catalog, web commerce, and campaigns.",
    icon: "Package",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$180",
    duration: "30 minute session",
    features: ["5 edited photos", "30 minute session"],
  },
  {
    name: "Standard",
    price: "$320",
    duration: "1 hour session",
    features: ["10 edited photos", "1 hour session"],
    recommended: true,
  },
  {
    name: "Premium",
    price: "$580",
    duration: "2 hour session",
    features: ["20 edited photos", "2 hour session", "Printed photos included"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ariana Lee",
    role: "Wedding Client",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review: "The photos feel cinematic and deeply personal. Every frame carries emotion without ever feeling staged.",
  },
  {
    name: "Malik Carter",
    role: "Brand Founder",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review: "Our product catalog looked instantly premium. Lighting, composition, and retouching were world class.",
  },
  {
    name: "Sophia Reyes",
    role: "Graduation Session",
    avatar: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review: "I felt guided the entire time and the final gallery exceeded everything I imagined.",
  },
];
