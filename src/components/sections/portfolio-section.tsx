import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PortfolioItem } from "@/types";

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

export function PortfolioSection({ items }: PortfolioSectionProps) {
  const previewItems = items.slice(0, 6);

  return (
    <section id="portfolio" className="section-gradient-soft py-[clamp(4.2rem,8vw,7.5rem)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading
            eyebrow="Portfolio"
            title="Kualitas yang bisa kamu lihat, bukan sekadar janji"
            description="Kategori portfolio disesuaikan dengan daftar paket, jadi kamu bisa mengisi foto berdasarkan jenis layanan."
          />

          <Link
            href="/portfolio"
            className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text)] transition hover:border-[var(--brand)]"
          >
            Lihat semua
          </Link>
        </div>

        <div className="mt-8 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {previewItems.map((item) => (
            <article key={item.id} className="mb-3 break-inside-avoid overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover"
              />
              <div className="flex items-center justify-between gap-3 px-3 py-2.5">
                <p className="text-sm font-semibold text-[var(--text)]">{item.title}</p>
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">{item.category}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
