import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";

interface FooterProps {
  email: string;
  phone: string;
  instagramUrl: string;
  instagramHandle: string;
  address: string;
  openHours: string;
}

export function Footer({ email, phone, instagramUrl, instagramHandle, address, openHours }: FooterProps) {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] pt-10">
      <Container className="grid gap-8 pb-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl text-[var(--text)]">Lightstudio</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Booking cepat untuk hasil foto studio yang clean, elegan, dan siap pakai.</p>
        </div>

        <div className="space-y-2 text-sm text-[var(--muted)]">
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[var(--brand)]" /> {email}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[var(--brand)]" /> {phone}
          </p>
        </div>

        <div className="space-y-2 text-sm text-[var(--muted)]">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--brand)]" /> {address}
          </p>
          <p>{openHours}</p>
        </div>

        <div className="text-sm text-[var(--muted)]">
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 transition hover:border-[var(--brand)]">
            <Instagram className="h-4 w-4" /> {instagramHandle}
          </a>
        </div>
      </Container>

      <div className="w-full border-t border-[var(--line)] py-4 text-center text-xs text-[var(--muted)]">
        © 2026 Lightstudio. All rights reserved.
      </div>
    </footer>
  );
}
