import Image from "next/image";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/data/site-data";

export function HeroSection() {
  return (
    <header className="relative isolate min-h-[94vh] overflow-hidden border-b border-[oklch(0.78_0.04_40/0.4)]">
      <Image
        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=80"
        alt="Photographer framing a portrait"
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.14_0.03_38)/0.86,oklch(0.2_0.05_40)/0.72_42%,oklch(0.22_0.04_58)/0.45)]" />

      <Container className="relative flex min-h-[94vh] flex-col py-7 text-[oklch(0.97_0.008_82)]">
        <nav className="mb-auto flex items-center justify-between border-b border-white/25 pb-5">
          <p className="font-display text-[clamp(1.5rem,2.2vw,2rem)] tracking-wide">Lumen Atelier</p>
          <ul className="hidden items-center gap-7 text-sm md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="border-b border-transparent pb-1 transition hover:border-[oklch(0.84_0.08_38)] hover:text-[oklch(0.92_0.04_55)]" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-3xl pb-16 pt-24 sm:pt-28 lg:pt-32">
          <p className="editorial-divider relative mb-7 w-fit text-[0.7rem] uppercase tracking-[0.35em] text-[oklch(0.9_0.04_72)]">Premium Photography Studio</p>
          <h1 className="text-[clamp(2.8rem,8vw,6.6rem)] leading-[0.89] text-[oklch(0.98_0.01_85)]">
            Capture Your <span className="text-[oklch(0.82_0.13_33)]">Best Moments</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[oklch(0.92_0.02_77)] sm:text-lg">
            Professional photography for weddings, portraits, events, and products—crafted with cinematic lighting,
            refined direction, and timeless post-production.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-[oklch(0.82_0.13_33)] px-7 py-3 text-sm font-semibold tracking-wide text-[oklch(0.2_0.03_42)] transition hover:-translate-y-0.5 hover:bg-[oklch(0.86_0.1_34)]"
            >
              Book a Session
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-white/45 bg-white/5 px-7 py-3 text-sm font-medium tracking-wide text-[oklch(0.96_0.009_82)] transition hover:-translate-y-0.5 hover:border-[oklch(0.82_0.1_36)]"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
