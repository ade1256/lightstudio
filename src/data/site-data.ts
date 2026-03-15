import { PackageCategory, PortfolioItem, PricingTier, Service, Testimonial } from "@/types";

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

export const pricingCatalog: PackageCategory[] = [
  {
    category: "Photo Group",
    items: [
      { name: "EL Starter", price: "Rp 100.000", notes: ["Maks 2-5 person", "10 edited photo", "20 menit", "All file Google Drive", "Cetak 4R (5)"] },
      { name: "The Circle", price: "Rp 200.000", notes: ["Maks 6-10 person", "15 edited photo", "20 menit", "All file Google Drive", "Cetak 4R (10)"] },
      { name: "The Squad", price: "Rp 25.000 / person", notes: ["Maks 11-45 person", "25 edited file", "60 menit", "All file Google Drive", "Cetak 4R 2 pcs/person"] },
      { name: "Tambahan waktu", price: "Rp 35.000 / 10 menit", notes: ["Mengikuti kondisi di lapangan"] },
    ],
  },
  {
    category: "Family Photo",
    items: [
      { name: "Premium Family", price: "Rp 300.000", notes: ["Maks 7 person", "10 edited file", "20 menit", "1 background", "All file Google Drive", "Print 12R (1)"] },
      { name: "Deluxe Family", price: "Rp 40.000 / person", notes: ["8-24 person", "20 edited file", "30 menit", "1 background", "All file Google Drive", "Print 12R (1), 8R (2)"] },
    ],
  },
  {
    category: "Graduation Package",
    items: [
      { name: "Elite", price: "Rp 300.000", notes: ["Maks 5 person", "10 edited photo", "25 menit", "1 background", "All file Google Drive", "Print 12R (1)"] },
      { name: "Master", price: "Rp 400.000", notes: ["Maks 10 person", "15 edited photo", "25 menit", "1 background", "All file Google Drive", "Print 12R (1), 8R (1)"] },
      { name: "Grandmaster", price: "Rp 700.000", notes: ["Maks 15 person", "20 edited photo", "45 menit", "2 background", "All file Google Drive", "Print 12R (1), 16R (1), 8R (2)", "Add person Rp 20.000", "Bayi di bawah 3 tahun tidak dihitung"] },
      { name: "Graduation Highschool", price: "Rp 200.000", notes: ["10 edited photo", "1 background", "All file Google Drive", "Print 12R (1)"] },
    ],
  },
  {
    category: "Special Session",
    items: [
      { name: "Couple Photo", price: "Rp 150.000", notes: ["10 edited photo", "20 menit", "1 background", "Print 4R (4)", "All file Google Drive"] },
      { name: "Birthday Photo", price: "Rp 250.000", notes: ["Maks 4 person", "15 edited file", "20 menit", "Print 8R (2)", "All file Google Drive"] },
      { name: "Personal Photo", price: "Rp 200.000", notes: ["15 edited file", "20 menit", "1 background", "Print 8R (2)", "All file Google Drive"] },
    ],
  },
  {
    category: "Pass Photo",
    items: [
      { name: "Chapter Career", price: "Rp 50.000", notes: ["1 person", "10 menit", "Print 3x4 (6), 4x6 (6)", "All file Google Drive"] },
      { name: "Chapter Two", price: "Rp 100.000", notes: ["2 person", "15 menit", "Print 2x3 (6), 4x6 (6)", "All file Google Drive"] },
    ],
  },
  {
    category: "Maternity Photo Plan",
    items: [
      { name: "Prologue", price: "Rp 250.000", notes: ["15 edited file", "20 menit", "1 background", "Print 8R (2)"] },
      { name: "Journey", price: "Rp 400.000", notes: ["25 edited file", "30 menit", "2 background", "Print 12R (1), 8R (2)"] },
    ],
  },
  {
    category: "Outdoor Service",
    items: [
      { name: "Group Outdoor", price: "Rp 30.000 / person", notes: ["Minimal 20 person", "Maks 180 menit", "20 edited files", "All file Google Drive", "Print 4R 1 pcs/person", "Transport fee Rp 100.000 (exclude)"] },
    ],
  },
  {
    category: "Studio Rent",
    items: [{ name: "Studio Rent", price: "Rp 200.000 / hour", notes: ["Include semua fasilitas studio", "Tanpa kamera"] }],
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
