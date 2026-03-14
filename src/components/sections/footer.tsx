import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[oklch(0.82_0.03_64)] bg-[oklch(0.94_0.012_74)] py-11">
      <Container className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-2xl text-[oklch(0.2_0.03_42)]">Lumen Atelier</p>
          <p className="mt-2 text-sm text-[oklch(0.38_0.02_48)]">Premium photography studio for timeless storytelling.</p>
        </div>
        <div className="space-y-2 text-sm text-[oklch(0.33_0.02_47)]">
          <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[oklch(0.46_0.08_34)]" /> hello@lumenatelier.com</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[oklch(0.46_0.08_34)]" /> +1 (555) 123-4567</p>
        </div>
        <div className="space-y-2 text-sm text-[oklch(0.33_0.02_47)]">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[oklch(0.46_0.08_34)]" /> 84 Mercer Street, New York</p>
          <p>Mon - Sat · 9:00 AM - 7:00 PM</p>
        </div>
        <div className="text-sm text-[oklch(0.33_0.02_47)]">
          <a href="#" className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 transition hover:border-[oklch(0.46_0.1_34)] hover:text-[oklch(0.24_0.03_42)]">
            <Instagram className="h-4 w-4" /> @lumenatelier
          </a>
          <p className="mt-6 text-xs">© {new Date().getFullYear()} Lumen Atelier. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
