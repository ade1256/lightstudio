import Image from "next/image";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/data/site-data";

export function HeroSection() {
  return (
    <header className="relative isolate min-h-[92vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=80"
        alt="Photographer framing a portrait"
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,oklch(0.15_0.02_50)/0.75,oklch(0.2_0.02_55)/0.45_45%,oklch(0.25_0.03_65)/0.2)]" />

      <Container className="relative flex min-h-[92vh] flex-col py-8 text-[oklch(0.96_0.01_85)]">
        <nav className="mb-auto flex items-center justify-between border-b border-white/20 pb-5">
          <p className="font-display text-2xl tracking-wide">Lumen Atelier</p>
          <ul className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="transition hover:text-[oklch(0.82_0.03_70)]" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-2xl pb-14 pt-28 sm:pt-32">
          <p className="mb-6 text-xs uppercase tracking-[0.26em] text-[oklch(0.84_0.02_80)]">Premium Photography Studio</p>
          <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
            Capture Your <span className="text-[oklch(0.86_0.06_70)]">Best Moments</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[oklch(0.9_0.01_80)]/90 sm:text-lg">
            Professional photography for weddings, portraits, events, and products—crafted with cinematic lighting,
            refined direction, and timeless post-production.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-[oklch(0.74_0.06_72)] px-7 py-3 text-sm font-medium text-[oklch(0.2_0.02_55)] transition hover:-translate-y-0.5 hover:bg-[oklch(0.78_0.05_72)]"
            >
              Book a Session
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-white/70"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
