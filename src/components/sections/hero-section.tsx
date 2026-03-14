import Image from "next/image";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--line)]">
      <Image
        src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=2200&q=80"
        alt="Photographer directing studio portrait"
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(102deg,oklch(0.13_0.02_190)/0.86,oklch(0.2_0.02_190)/0.72_48%,oklch(0.35_0.03_190)/0.2)]" />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl text-[oklch(0.96_0.008_190)]">
          <p className="mb-4 w-fit border border-white/30 bg-black/20 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em]">
            Lightstudio Jakarta
          </p>
          <h1 className="text-[clamp(2.4rem,7vw,5.8rem)] leading-[0.9]">
            Booking studio foto
            <br />
            cepat, hasil
            <br />
            <span className="text-[var(--brand)]">premium.</span>
          </h1>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[oklch(0.92_0.01_190)] sm:text-lg">
            Cek kualitas portofolio, pilih paket, lalu booking langsung via WhatsApp. Ringkas untuk klien, rapi untuk
            hasil akhir.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-[var(--brand)] px-7 py-3 text-sm font-semibold tracking-wide text-[var(--brand-ink)] transition hover:brightness-110"
            >
              Booking via WhatsApp
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-white/45 bg-black/10 px-7 py-3 text-sm font-medium tracking-wide transition hover:border-[var(--brand)]"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
