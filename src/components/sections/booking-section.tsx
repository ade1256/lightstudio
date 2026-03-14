"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const services = ["Portrait Session", "Wedding Coverage", "Graduation Session", "Family Session", "Product Shoot"];

export function BookingSection() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const required = ["name", "email", "phone", "service", "date"];
    const hasMissing = required.some((field) => !String(formData.get(field) ?? "").trim());

    if (hasMissing) {
      setStatus("error");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
  };

  return (
    <section id="booking" className="py-[clamp(4.2rem,8vw,7rem)]">
      <Container className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionHeading
            eyebrow="Booking"
            title="Isi form singkat, tim kami follow up cepat"
            description="Prioritas kami: proses booking yang simpel, jelas, dan minim bolak-balik chat."
          />

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex border border-[var(--brand)] bg-[var(--brand)] px-6 py-3 text-sm font-semibold tracking-wide text-[var(--brand-ink)] transition hover:brightness-110"
          >
            Booking via WhatsApp
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Nama" name="name" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Nomor WhatsApp" name="phone" required />
            <div>
              <label htmlFor="service" className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Jenis Sesi
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full border border-[var(--line)] bg-transparent px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--brand)]"
              >
                <option value="">Pilih layanan</option>
                {services.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Input label="Tanggal yang diinginkan" name="date" type="date" required />

          <div>
            <label htmlFor="message" className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Brief singkat
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-[var(--line)] bg-transparent px-3 py-2 text-sm text-[var(--text)] outline-none focus:border-[var(--brand)]"
              placeholder="Contoh: sesi 2 orang, tone clean, untuk prewedding casual"
            />
          </div>

          <button type="submit" className="bg-[var(--text)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--background)] transition hover:opacity-90">
            Kirim Permintaan Booking
          </button>

          {status === "error" ? (
            <p role="alert" className="text-sm text-[oklch(0.62_0.2_25)]">
              Mohon lengkapi semua field wajib terlebih dulu.
            </p>
          ) : null}

          {status === "success" ? (
            <p role="status" className="text-sm text-[var(--brand)]">
              Terima kasih! Permintaan booking kamu sudah masuk.
            </p>
          ) : null}
        </form>
      </Container>
    </section>
  );
}

interface InputProps {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}

function Input({ label, name, required = false, type = "text" }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-[var(--line)] bg-transparent px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--brand)]"
      />
    </div>
  );
}
