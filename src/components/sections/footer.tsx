import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[oklch(0.9_0.01_78)] bg-[oklch(0.97_0.006_80)] py-10">
      <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-[oklch(0.24_0.03_58)]">Lumen Atelier</p>
          <p className="mt-2 text-sm text-[oklch(0.44_0.02_62)]">Premium photography studio for timeless storytelling.</p>
        </div>
        <div className="space-y-2 text-sm text-[oklch(0.4_0.02_60)]">
          <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@lumenatelier.com</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</p>
        </div>
        <div className="space-y-2 text-sm text-[oklch(0.4_0.02_60)]">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 84 Mercer Street, New York</p>
          <p>Mon - Sat · 9:00 AM - 7:00 PM</p>
        </div>
        <div className="text-sm text-[oklch(0.4_0.02_60)]">
          <a href="#" className="inline-flex items-center gap-2 transition hover:text-[oklch(0.28_0.03_58)]">
            <Instagram className="h-4 w-4" /> @lumenatelier
          </a>
          <p className="mt-6 text-xs">© {new Date().getFullYear()} Lumen Atelier. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
