import Image from "next/image";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/data/site-data";

export function HeroSection() {
  return (
    <header className="relative isolate overflow-hidden border-b border-[var(--line)]">
      <Image
        src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=2000&q=80"
        alt="Photographer directing model in studio"
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(102deg,oklch(0.13_0.02_190)/0.9,oklch(0.2_0.02_190)/0.74_48%,oklch(0.35_0.03_190)/0.22)]" />

      <Container className="relative min-h-[94vh] py-6 text-[oklch(0.96_0.006_190)]">
        <nav className="flex items-center justify-between border-b border-white/20 pb-5">
          <p className="font-display text-[clamp(1.7rem,2vw,2.2rem)] tracking-wide">Lightstudio</p>
          <ul className="hidden items-center gap-7 text-sm md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="border-b border-transparent pb-1 transition hover:border-[var(--brand)]" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid min-h-[80vh] items-end py-12 lg:grid-cols-[1.2fr_0.8fr] lg:py-18">
          <div className="max-w-3xl">
            <p className="mb-5 w-fit border border-white/28 bg-black/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
              Studio Photography • Jakarta
            </p>
            <h1 className="text-[clamp(2.7rem,8vw,6.8rem)] leading-[0.88]">
              Booking Foto Studio
              <br />
              <span className="text-[var(--brand)]">cepat, hasil premium.</span>
            </h1>
            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[oklch(0.92_0.01_190)] sm:text-lg">
              Untuk klien yang ingin proses ringkas tanpa mengorbankan kualitas visual. Cek portfolio, pilih paket,
              lalu booking dalam hitungan menit.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="rounded-full bg-[var(--brand)] px-7 py-3 text-sm font-semibold tracking-wide text-[var(--brand-ink)] transition hover:brightness-110"
              >
                Book Sekarang
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-white/45 bg-black/10 px-7 py-3 text-sm font-medium tracking-wide transition hover:border-[var(--brand)]"
              >
                Lihat Portfolio
              </a>
            </div>
          </div>

          <aside className="mt-10 border border-white/25 bg-black/25 p-6 backdrop-blur-sm lg:mt-0">
            <p className="text-xs uppercase tracking-[0.2em] text-[oklch(0.9_0.01_190)]">Fast booking lane</p>
            <ol className="mt-4 space-y-3 text-sm text-[oklch(0.94_0.01_190)]">
              <li>1. Pilih paket sesuai kebutuhan</li>
              <li>2. Tentukan tanggal sesi</li>
              <li>3. Konfirmasi via WhatsApp</li>
            </ol>
            <p className="mt-5 border-t border-white/20 pt-4 text-sm text-[oklch(0.9_0.01_190)]">
              Respon admin rata-rata &lt; 15 menit pada jam operasional.
            </p>
          </aside>
        </div>
      </Container>
    </header>
  );
}
