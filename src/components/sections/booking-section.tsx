"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const services = ["Studio Portrait", "Wedding Photography", "Event Coverage", "Graduation Photoshoot", "Product Photography"];

export function BookingSection() {
  const [success, setSuccess] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const required = ["name", "email", "phone", "service", "date"];
    const hasMissing = required.some((field) => !formData.get(field));

    if (hasMissing) {
      setSuccess(false);
      alert("Please complete all required fields.");
      return;
    }

    event.currentTarget.reset();
    setSuccess(true);
  };

  return (
    <section id="booking" className="py-24 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Book"
            title="Reserve your session"
            description="Tell us your vision and preferred date. We will follow up with confirmation and creative direction."
          />
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[oklch(0.68_0.16_146)] px-6 py-3 text-sm font-medium text-[oklch(0.2_0.02_145)] transition hover:-translate-y-0.5 hover:bg-[oklch(0.72_0.16_146)]"
          >
            Book via WhatsApp
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 border border-[oklch(0.9_0.01_78)] bg-[oklch(0.985_0.004_80)] p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Name" name="name" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Phone" name="phone" required />
            <div>
              <label htmlFor="service" className="mb-1 block text-xs uppercase tracking-wider text-[oklch(0.5_0.02_60)]">Service Type</label>
              <select id="service" name="service" required className="w-full border border-[oklch(0.86_0.01_75)] bg-transparent px-3 py-2 text-sm text-[oklch(0.3_0.02_60)] focus:border-[oklch(0.55_0.04_66)] focus:outline-none">
                <option value="">Select a service</option>
                {services.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <Input label="Preferred Date" name="date" type="date" required />

          <div>
            <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-wider text-[oklch(0.5_0.02_60)]">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full border border-[oklch(0.86_0.01_75)] bg-transparent px-3 py-2 text-sm text-[oklch(0.3_0.02_60)] focus:border-[oklch(0.55_0.04_66)] focus:outline-none" placeholder="Tell us your concept, mood, or location preferences..." />
          </div>

          <button type="submit" className="rounded-full bg-[oklch(0.24_0.03_58)] px-6 py-2.5 text-sm text-white transition hover:bg-[oklch(0.19_0.02_58)]">
            Submit Booking Request
          </button>
          {success ? (
            <p className="text-sm text-[oklch(0.42_0.08_145)]">Thank you! Your booking request has been captured.</p>
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
      <label htmlFor={name} className="mb-1 block text-xs uppercase tracking-wider text-[oklch(0.5_0.02_60)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-[oklch(0.86_0.01_75)] bg-transparent px-3 py-2 text-sm text-[oklch(0.3_0.02_60)] focus:border-[oklch(0.55_0.04_66)] focus:outline-none"
      />
    </div>
  );
}
