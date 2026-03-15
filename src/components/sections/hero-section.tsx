import Image from "next/image";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="section-gradient-soft border-b border-[var(--line)] py-12 sm:py-16 lg:py-20">
      <Container className="grid items-center gap-9 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <p className="mb-4 w-fit border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface)_86%,var(--brand)_14%)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Photostudio terbaik di Purwokerto
          </p>

          <h1 className="text-[clamp(2.3rem,6vw,5rem)] leading-[0.92] text-[var(--text)]">
            Abadikan momen pentingmu
            <br />
            dengan hasil foto
            <span className="text-[var(--brand)]"> yang lebih berkelas.</span>
          </h1>

          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Dari sesi personal, keluarga, sampai kebutuhan brand, Lightstudio membantu kamu mendapatkan foto yang
            terlihat profesional, rapi, dan siap dipakai. Pilih paket yang sesuai, lalu booking cepat via WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-[var(--brand)] px-7 py-3 text-sm font-semibold tracking-wide text-[var(--brand-ink)] transition hover:brightness-110"
            >
Cek Jadwal & Booking
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-7 py-3 text-sm font-medium tracking-wide text-[var(--text)] transition hover:border-[var(--brand)]"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-[color-mix(in_oklab,var(--brand)_58%,transparent)]" />
          <div className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 border-b-2 border-r-2 border-[color-mix(in_oklab,var(--brand)_58%,transparent)]" />
          <div className="overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
            <Image
              src="/images/model-2.heic"
              alt="Studio portrait setup"
              width={900}
              height={1100}
              className="h-[420px] w-full object-cover sm:h-[520px]"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
