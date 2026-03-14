import Image from "next/image";
import { Check, Clock3, ShieldCheck, Sparkles } from "lucide-react";

const highlights = [
  "Konsep visual disusun sebelum sesi dimulai",
  "Warna kulit natural + retouch premium",
  "Alur booking ringkas, minim bolak-balik chat",
];

const packages = [
  {
    name: "Quick Portrait",
    price: "Rp 890K",
    detail: "35 menit · 1 look · 6 edited photos",
  },
  {
    name: "Editorial Signature",
    price: "Rp 1.690K",
    detail: "70 menit · 2 look · 14 edited photos",
    featured: true,
  },
  {
    name: "Brand Campaign",
    price: "Rp 3.250K",
    detail: "120 menit · multi set · 28 edited photos",
  },
];

export default function HomeV2() {
  return (
    <main className="bg-[var(--background)] text-[var(--text)]">
      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <p className="font-display text-3xl">Lightstudio</p>
          <a
            href="#booking"
            className="rounded-full border border-[var(--brand)] bg-[var(--brand)] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-ink)]"
          >
            Book now
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
        <div>
          <p className="mb-4 w-fit border border-[var(--line)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Premium studio experience
          </p>
          <h1 className="text-[clamp(2.6rem,8vw,6.3rem)] leading-[0.88]">
            V2 — editorial
            <br />
            landing yang lebih
            <br />
            <span className="text-[var(--brand)]">berkarakter.</span>
          </h1>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Ini varian yang lebih premium-editorial: kontras visual tegas, copy ringkas, dan CTA booking yang tetap
            jadi fokus utama.
          </p>

          <ul className="mt-8 space-y-3 border-l border-[var(--brand)] pl-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)] sm:text-base">
                <Check className="mt-0.5 h-4 w-4 text-[var(--brand)]" /> {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#booking" className="bg-[var(--text)] px-6 py-3 text-sm font-semibold text-[var(--background)]">
              Mulai Booking
            </a>
            <a href="#packages" className="border border-[var(--line)] px-6 py-3 text-sm font-medium">
              Lihat Paket
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80"
            alt="Studio portrait lighting setup"
            width={900}
            height={1100}
            className="col-span-2 h-[300px] w-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=900&q=80"
            alt="Portrait in studio"
            width={500}
            height={500}
            className="h-[180px] w-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
            alt="Photographer with camera"
            width={500}
            height={500}
            className="h-[180px] w-full object-cover"
          />
        </div>
      </section>

      <section id="packages" className="border-y border-[var(--line)] bg-[var(--surface)] py-14 lg:py-18">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Packages</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,3.6rem)] leading-[0.92]">Struktur harga yang langsung kebaca</h2>
            </div>
            <p className="hidden max-w-xs text-sm text-[var(--muted)] md:block">Direkomendasikan: Editorial Signature untuk kebutuhan paling umum.</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.name}
                className={`border p-5 ${
                  item.featured
                    ? "border-[var(--brand)] bg-[color-mix(in_oklab,var(--brand)_10%,var(--surface))]"
                    : "border-[var(--line)]"
                }`}
              >
                {item.featured ? (
                  <p className="mb-3 inline-flex items-center gap-1 border border-[var(--brand)] bg-[var(--brand)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--brand-ink)]">
                    <Sparkles className="h-3 w-3" /> Most picked
                  </p>
                ) : null}
                <h3 className="text-2xl">{item.name}</h3>
                <p className="mt-2 text-4xl">{item.price}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.detail}</p>
                <a href="#booking" className="mt-6 inline-block border border-[var(--line)] px-4 py-2 text-sm hover:border-[var(--brand)]">
                  Pilih paket
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="grid gap-8 border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-[clamp(1.8rem,3.8vw,3rem)] leading-[0.95]">Ready untuk sesi kamu?</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Kirim detail singkat. Tim Lightstudio akan kirim konfirmasi jadwal dan rekomendasi setup sesi.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[var(--muted)]">
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-[var(--brand)]" /> Respon cepat di jam operasional
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--brand)]" /> Detail kebutuhan klien dijaga privat
              </p>
            </div>
          </div>

          <form className="grid gap-3 sm:grid-cols-2">
            <input className="border border-[var(--line)] bg-transparent px-3 py-2.5" placeholder="Nama" />
            <input className="border border-[var(--line)] bg-transparent px-3 py-2.5" placeholder="Email" type="email" />
            <input className="border border-[var(--line)] bg-transparent px-3 py-2.5" placeholder="Nomor WhatsApp" />
            <input className="border border-[var(--line)] bg-transparent px-3 py-2.5" type="date" />
            <textarea className="col-span-full border border-[var(--line)] bg-transparent px-3 py-2.5" placeholder="Brief sesi (opsional)" rows={4} />
            <button className="col-span-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-[var(--brand-ink)]">
              Kirim Permintaan Booking
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
