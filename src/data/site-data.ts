import { PortfolioItem, Service, Testimonial } from "@/types";

export const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Paket", href: "#pricing" },
  { label: "Studio", href: "#about" },
  { label: "Booking", href: "#booking" },
];

export const portfolioCategories = [
  "All",
  "Photo Group",
  "Family Photo",
  "Graduation Package",
  "Special Session",
  "Maternity Photo Plan",
  "Outdoor Service",
] as const;

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "The Circle Session", category: "Photo Group", src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", alt: "Group photo session", width: 900, height: 1300 },
  { id: 2, title: "Couple Indoor Set", category: "Special Session", src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80", alt: "Couple studio portrait", width: 900, height: 1200 },
  { id: 4, title: "Premium Family", category: "Family Photo", src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80", alt: "Family photo in studio", width: 900, height: 1200 },
  { id: 5, title: "Outdoor Group", category: "Outdoor Service", src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80", alt: "Outdoor portrait sample", width: 1000, height: 800 },
  { id: 6, title: "Birthday Session", category: "Special Session", src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1200&q=80", alt: "Birthday photo setup", width: 900, height: 1200 },
  { id: 7, title: "Graduation Master", category: "Graduation Package", src: "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?auto=format&fit=crop&w=1200&q=80", alt: "Graduation package sample", width: 1000, height: 1300 },
  { id: 8, title: "Maternity Journey", category: "Maternity Photo Plan", src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1200&q=80", alt: "Maternity portrait sample", width: 1000, height: 700 },
];

export const services: Service[] = [
  {
    title: "Photo Group",
    description: "Paket untuk 2 sampai 45 orang (EL Starter, The Circle, The Squad) dengan output edit + cetak + file Google Drive.",
    icon: "Camera",
  },
  {
    title: "Family & Couple",
    description: "Sesi family, couple, birthday, dan personal dengan durasi ringkas, opsi background, serta paket print sesuai kebutuhan.",
    icon: "Heart",
  },
  {
    title: "Graduation Package",
    description: "Pilihan Elite, Master, Grandmaster, hingga Graduation Highschool dengan opsi cetak 8R/12R/16R dan kapasitas grup berbeda.",
    icon: "GraduationCap",
  },
  {
    title: "Maternity & Pass Photo",
    description: "Maternity Prologue/Journey dan pass photo Chapter Career/Chapter Two untuk kebutuhan personal maupun dokumen resmi.",
    icon: "Sparkles",
  },
  {
    title: "Outdoor & Studio Rent",
    description: "Layanan group outdoor per person serta sewa studio per jam lengkap fasilitas studio (tanpa kamera).",
    icon: "Package",
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
