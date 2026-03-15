import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingCatalog } from "@/data/site-data";

export function PricingSection() {
  return (
    <section id="pricing" className="section-gradient-soft py-[clamp(4.2rem,8vw,7rem)]">
      <Container>
        <SectionHeading
          eyebrow="Paket Harga"
          title="Daftar paket lengkap"
          description="Pilih kategori lalu lihat detail paket sesuai kebutuhan sesi kamu."
          align="center"
        />

        <div className="mt-10 space-y-4">
          {pricingCatalog.map((group) => (
            <details key={group.category} className="border border-[var(--line)] bg-[var(--surface)] open:border-[var(--brand)]">
              <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text)]">
                {group.category}
              </summary>

              <div className="grid gap-4 border-t border-[var(--line)] p-4 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map((item) => (
                  <article key={`${group.category}-${item.name}`} className="border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface)_90%,var(--brand)_10%)] p-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{item.name}</p>
                    <p className="mt-1 text-2xl text-[var(--text)]">{item.price}</p>
                    {item.notes ? (
                      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-[var(--muted)]">
                        {item.notes.map((note) => (
                          <li key={note}>• {note}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
