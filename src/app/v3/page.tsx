import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MessageCircleMore } from "lucide-react";
import { TopNav } from "@/components/ui/top-nav";
import { portfolioItems, pricingTiers, services } from "@/data/site-data";

export default function HomeV3() {
  return (
    <main className="site-background overflow-x-clip text-[var(--text)]">
      <TopNav />

      <section className="border-b border-[var(--line)] py-10 sm:py-14">
        <div className="mx-auto grid max-w-[1180px] gap-7 px-5 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-10 lg:items-end">
          <div>
            <p className="mb-4 w-fit border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Lightstudio · V3 Aesthetic
            </p>
            <h1 className="text-[clamp(2.2rem,6.8vw,5.6rem)] leading-[0.88]">
              Visual yang terasa
              <br />
              mahal, proses booking
              <br />
              <span className="text-[var(--brand)]">tetap simpel.</span>
            </h1>
            <p className="mt-5 max-w-[60ch] text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Konsep halaman ini dibuat lebih editorial: ritme layout tegas, teks ringkas, dan fokus utama tetap ke
              keputusan booking via WhatsApp.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-ink)]"
              >
                Booking now <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/portfolio"
                className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em]"
              >
                Lihat galeri
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Image
              src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80"
              alt="Studio setup"
              width={700}
              height={900}
              className="col-span-2 h-[230px] w-full border border-[var(--line)] object-cover sm:h-[280px]"
              priority
            />
            <Image
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80"
              alt="Lens detail"
              width={500}
              height={500}
              className="h-[125px] w-full border border-[var(--line)] object-cover sm:h-[150px]"
            />
            <Image
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
              alt="Photographer with camera"
              width={500}
              height={500}
              className="h-[125px] w-full border border-[var(--line)] object-cover sm:h-[150px]"
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-gradient-soft py-10 sm:py-12">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="text-[clamp(1.6rem,4vw,3rem)]">Portfolio preview</h2>
            <Link href="/portfolio" className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)] hover:text-[var(--text)]">
              Lihat semua
            </Link>
          </div>

          <div className="columns-2 gap-3 lg:columns-4">
            {portfolioItems.slice(0, 8).map((item) => (
              <article key={item.id} className="mb-3 break-inside-avoid overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
                <Image src={item.src} alt={item.alt} width={item.width} height={item.height} className="h-auto w-full object-cover" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-10 sm:py-12">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={`border p-5 ${
                  tier.recommended
                    ? "border-[var(--brand)] bg-[color-mix(in_oklab,var(--brand)_12%,var(--surface))]"
                    : "border-[var(--line)] bg-[var(--surface)]"
                }`}
              >
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{tier.name}</p>
                <p className="mt-2 text-4xl">{tier.price}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{tier.duration}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {tier.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[var(--brand)]" /> {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-gradient-soft border-y border-[var(--line)] py-10 sm:py-12">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <article key={service.title} className="border border-[var(--line)] bg-[var(--surface)] p-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Service</p>
                <h3 className="mt-2 text-lg leading-snug">{service.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-10 sm:py-12">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-7 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">About Lightstudio</p>
              <h2 className="mt-2 text-[clamp(1.5rem,3.7vw,2.6rem)] leading-[0.95]">Studio untuk klien yang butuh hasil serius</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Fokus kami: arahan sesi yang jelas, color workflow konsisten, dan hasil akhir yang siap dipakai untuk momen personal maupun kebutuhan brand.
              </p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1000&q=80"
              alt="Behind the scenes studio"
              width={800}
              height={600}
              className="h-52 w-full border border-[var(--line)] object-cover sm:h-64"
            />
          </div>
        </div>
      </section>

      <section id="booking" className="section-gradient-brand py-11 sm:py-14">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Final step</p>
            <h2 className="mt-2 text-[clamp(1.6rem,4vw,3rem)] leading-[0.95]">Lanjut booking lewat WhatsApp</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Kirim tanggal + jenis sesi, tim kami follow up cepat.</p>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Lightstudio,%20saya%20ingin%20booking%20sesi%20foto."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)] bg-[var(--brand)] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-ink)]"
          >
            <MessageCircleMore className="h-4 w-4" /> Chat WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
