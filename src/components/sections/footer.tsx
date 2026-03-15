import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] pt-10">
      <Container className="grid gap-8 pb-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl text-[var(--text)]">Lightstudio</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Booking cepat untuk hasil foto studio yang clean, elegan, dan siap pakai.</p>
        </div>

        <div className="space-y-2 text-sm text-[var(--muted)]">
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[var(--brand)]" /> hello@lightstudio.id
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[var(--brand)]" /> +62 812-3456-7890
          </p>
        </div>

        <div className="space-y-2 text-sm text-[var(--muted)]">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--brand)]" /> Purwokerto, Jawa Tengah
          </p>
          <p>Senin - Sabtu · 09:00 - 20:00</p>
        </div>

        <div className="text-sm text-[var(--muted)]">
          <a href="#" className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 transition hover:border-[var(--brand)]">
            <Instagram className="h-4 w-4" /> @lightstudio.id
          </a>
        </div>
      </Container>

      <div className="w-full border-t border-[var(--line)] py-4 text-center text-xs text-[var(--muted)]">
        © 2026 Lightstudio. All rights reserved.
      </div>
    </footer>
  );
}
