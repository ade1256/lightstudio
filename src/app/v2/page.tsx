import Image from "next/image";
import { Check, MessageCircleMore, Star } from "lucide-react";
import { TopNav } from "@/components/ui/top-nav";

const portfolio = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
];

const services = ["Portrait Session", "Wedding Coverage", "Graduation Session", "Family Session", "Product Shoot"];

const pricing = [
  { name: "Quick", price: "Rp 750K", detail: "30 menit · 5 edit" },
  { name: "Signature", price: "Rp 1.450K", detail: "60 menit · 12 edit", featured: true },
  { name: "Campaign", price: "Rp 2.900K", detail: "120 menit · 25 edit" },
];

export default function HomeV2() {
  return (
    <main className="site-background overflow-x-clip text-[var(--text)]">
      <TopNav />

      <section className="section-gradient-soft border-b border-[var(--line)] py-9 sm:py-12">
        <div className="mx-auto grid max-w-[1180px] items-center gap-6 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="mb-3 w-fit border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              V2 Compact
            </p>
            <h1 className="text-[clamp(2rem,5.5vw,4rem)] leading-[0.95]">
              Booking studio foto cepat,
              <span className="text-[var(--brand)]"> hasil premium.</span>
            </h1>
            <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Versi compact: lebih ringkas, lebih fokus ke keputusan booking.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#booking" className="rounded-full bg-[var(--brand)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-ink)]">
                Booking via WhatsApp
              </a>
              <a href="#portfolio" className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em]">
                Lihat Portfolio
              </a>
            </div>
          </div>
          <div className="overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
            <Image
              src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1400&q=80"
              alt="Studio setup"
              width={900}
              height={1000}
              className="h-[280px] w-full object-cover sm:h-[340px]"
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-9 sm:py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <h2 className="text-3xl">Portfolio</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((src) => (
              <Image key={src} src={src} alt="Portfolio image" width={500} height={600} className="h-52 w-full border border-[var(--line)] object-cover" />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-gradient-soft py-9 sm:py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <h2 className="text-3xl">Pricing</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {pricing.map((item) => (
              <article key={item.name} className={`border p-4 ${item.featured ? "border-[var(--brand)] bg-[color-mix(in_oklab,var(--brand)_10%,var(--surface))]" : "border-[var(--line)] bg-[var(--surface)]"}`}>
                <h3 className="text-xl">{item.name}</h3>
                <p className="mt-1 text-3xl">{item.price}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p>
                <a href="#booking" className="mt-4 inline-block border border-[var(--line)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] hover:border-[var(--brand)]">
                  Pilih paket
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-9 sm:py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <h2 className="text-3xl">Services</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item} className="border border-[var(--line)] bg-[var(--surface)] p-4 text-sm text-[var(--muted)]">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-9 sm:py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <h2 className="text-3xl">Testimonials</h2>
          <article className="mt-4 border border-[var(--line)] bg-[var(--surface)] p-4">
            <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[var(--brand)] text-[var(--brand)]" />)}</div>
            <p className="mt-2 text-sm text-[var(--muted)]">“Proses cepat, hasil foto sangat premium dan cocok untuk kebutuhan personal maupun brand.”</p>
          </article>
        </div>
      </section>

      <section id="about" className="section-gradient-brand border-y border-[var(--line)] py-9 sm:py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <h2 className="text-3xl">About</h2>
          <p className="mt-3 max-w-3xl text-sm text-[var(--muted)]">
            Lightstudio fokus pada pengalaman booking yang simpel, arahan sesi yang jelas, dan output visual yang siap dipakai.
          </p>
        </div>
      </section>

      <section id="booking" className="section-gradient-brand py-9 sm:py-11">
        <div className="mx-auto grid max-w-[1180px] gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10 lg:items-center">
          <div>
            <h2 className="text-3xl">Booking via WhatsApp</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-[var(--muted)]">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--brand)]" /> Klik tombol WhatsApp</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--brand)]" /> Kirim tanggal + jenis sesi</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--brand)]" /> Konfirmasi jadwal</li>
            </ul>
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

      <footer className="border-t border-[var(--line)] bg-[var(--surface)] py-8">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-5 text-sm text-[var(--muted)] sm:px-8 lg:px-10">
          <p>Lightstudio</p>
          <p>© {new Date().getFullYear()} Lightstudio</p>
        </div>
      </footer>
    </main>
  );
}
