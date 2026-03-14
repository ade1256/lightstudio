import { PortfolioItem, PricingTier, Service, Testimonial } from "@/types";

export const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Paket", href: "#pricing" },
  { label: "Studio", href: "#about" },
  { label: "Booking", href: "#booking" },
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
  { id: 1, title: "Evening Ceremony", category: "Wedding", src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", alt: "Wedding portrait at sunset", width: 900, height: 1300 },
  { id: 2, title: "White Studio Portrait", category: "Studio Portrait", src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80", alt: "Minimal studio beauty portrait", width: 900, height: 1200 },
  { id: 3, title: "Milestone Day", category: "Graduation", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80", alt: "Graduate celebrating", width: 1000, height: 700 },
  { id: 4, title: "Family Sunday", category: "Family", src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80", alt: "Warm family photo", width: 900, height: 1200 },
  { id: 5, title: "Hero Product", category: "Product Photography", src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80", alt: "Watch product close up", width: 1000, height: 800 },
  { id: 6, title: "Reception Mood", category: "Wedding", src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1200&q=80", alt: "Wedding first dance", width: 900, height: 1200 },
  { id: 7, title: "Studio Graduation", category: "Graduation", src: "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?auto=format&fit=crop&w=1200&q=80", alt: "Graduation portrait", width: 1000, height: 1300 },
  { id: 8, title: "Sibling Story", category: "Family", src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1200&q=80", alt: "Family siblings in studio", width: 1000, height: 700 },
];

export const services: Service[] = [
  {
    title: "Portrait Session",
    description: "Sesi personal dengan arahan pose dan pencahayaan yang clean, cocok untuk personal branding atau hadiah.",
    icon: "Camera",
  },
  {
    title: "Wedding Coverage",
    description: "Dokumentasi hari pernikahan dengan gaya sinematik yang tetap natural dan emosional.",
    icon: "Heart",
  },
  {
    title: "Graduation Session",
    description: "Foto wisuda formal dan candid dalam satu alur sesi yang efisien.",
    icon: "GraduationCap",
  },
  {
    title: "Family Session",
    description: "Sesi keluarga yang hangat, diarahkan agar tetap nyaman untuk anak maupun orang tua.",
    icon: "Sparkles",
  },
  {
    title: "Product Shoot",
    description: "Visual produk yang tajam dan premium untuk katalog, ads, dan social commerce.",
    icon: "Package",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Quick",
    price: "Rp 750K",
    duration: "30 menit · 1 look",
    features: ["5 foto edit", "1 backdrop", "Soft retouch"],
  },
  {
    name: "Signature",
    price: "Rp 1.450K",
    duration: "60 menit · 2 look",
    features: ["12 foto edit", "2 backdrop", "Priority editing", "Private online gallery"],
    recommended: true,
  },
  {
    name: "Campaign",
    price: "Rp 2.900K",
    duration: "120 menit · multi look",
    features: ["25 foto edit", "Creative direction", "Commercial usage basic", "Assist lighting setup"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Nabila Rahma",
    role: "Wedding Client",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review: "Brief kami diterjemahkan tepat. Hasil fotonya premium dan tetap terasa personal.",
  },
  {
    name: "Rayhan Putra",
    role: "Skincare Brand Owner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review: "Foto produk jadi jauh lebih meyakinkan buat iklan. Konversi katalog juga naik.",
  },
  {
    name: "Shinta Amelia",
    role: "Graduation Session",
    avatar: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    review: "Proses booking cepat, sesi terarah, hasilnya rapi banget. Recommended.",
  },
];
