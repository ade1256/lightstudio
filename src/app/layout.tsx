import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Foto Studio Purwokerto | Lightstudio",
    template: "%s | Lightstudio",
  },
  description:
    "Lightstudio adalah foto studio Purwokerto untuk booking cepat via WhatsApp, lihat portfolio, dan cek paket foto studio lengkap.",
  keywords: [
    "Foto Studio Purwokerto",
    "Lightstudio",
    "Studio Foto Purwokerto",
    "Booking Foto Studio",
    "Paket Foto Purwokerto",
  ],
  openGraph: {
    title: "Foto Studio Purwokerto | Lightstudio",
    description:
      "Lightstudio melayani foto studio Purwokerto: family, graduation, couple, maternity, dan group session.",
    siteName: "Lightstudio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foto Studio Purwokerto | Lightstudio",
    description:
      "Booking foto studio Purwokerto lebih cepat di Lightstudio. Cek portfolio dan paket lengkap.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${display.variable} ${sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
