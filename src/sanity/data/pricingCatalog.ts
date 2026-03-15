import { PackageCategory } from "@/types";

export const sanityPricingCatalogSeed: PackageCategory[] = [
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
