import { CheckCircle2, Clock3, MessageCircleMore, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

interface BookingSectionProps {
  whatsappUrl: string;
}

const bookingSteps = [
  "Klik tombol WhatsApp",
  "Kirim tanggal + jenis sesi",
  "Tim Lightstudio konfirmasi jadwal dan harga final",
];

export function BookingSection({ whatsappUrl }: BookingSectionProps) {
  return (
    <section id="booking" className="section-gradient-brand py-[clamp(4.2rem,8vw,7rem)]">
      <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <SectionHeading
            eyebrow="Booking via WhatsApp"
            title="Booking langsung lewat chat WhatsApp."
            description="Kamu akan diarahkan ke WhatsApp, langsung dapat respon dari tim studio."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)] bg-[var(--brand)] px-7 py-3 text-sm font-semibold tracking-wide text-[var(--brand-ink)] transition hover:brightness-110"
            >
              <MessageCircleMore className="h-4 w-4" /> Chat WhatsApp Sekarang
            </a>
          </div>
        </div>

        <aside className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Alur cepat</p>

          <ol className="mt-4 space-y-3">
            {bookingSteps.map((item, idx) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--brand)_18%,transparent)] text-[0.68rem] font-bold text-[var(--brand)]">
                  {idx + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid gap-2 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
            <p className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[var(--brand)]" /> Respon cepat di jam operasional
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[var(--brand)]" /> Detail kebutuhan klien dijaga privat
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[var(--brand)]" /> Konfirmasi slot sebelum pembayaran
            </p>
          </div>
        </aside>
      </Container>
    </section>
  );
}
