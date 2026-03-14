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
    <section id="booking" className="py-[clamp(4.7rem,8vw,7.5rem)]">
      <Container className="grid gap-11 lg:grid-cols-[0.9fr_1.1fr]">
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
            className="mt-9 inline-flex border border-[oklch(0.53_0.13_146)] bg-[oklch(0.66_0.16_146)] px-6 py-3 text-sm font-semibold tracking-wide text-[oklch(0.19_0.03_146)] transition hover:-translate-y-0.5 hover:bg-[oklch(0.7_0.15_146)]"
          >
            Book via WhatsApp
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 border border-[oklch(0.84_0.02_68)] bg-[oklch(0.98_0.008_82)] p-6 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Name" name="name" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Phone" name="phone" required />
            <div>
              <label htmlFor="service" className="mb-1.5 block text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[oklch(0.46_0.04_46)]">Service Type</label>
              <select id="service" name="service" required className="w-full border border-[oklch(0.8_0.02_68)] bg-transparent px-3 py-2 text-sm text-[oklch(0.24_0.03_42)] focus:border-[oklch(0.45_0.11_34)] focus:outline-none">
                <option value="">Select a service</option>
                {services.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <Input label="Preferred Date" name="date" type="date" required />

          <div>
            <label htmlFor="message" className="mb-1.5 block text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[oklch(0.46_0.04_46)]">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full border border-[oklch(0.8_0.02_68)] bg-transparent px-3 py-2 text-sm text-[oklch(0.24_0.03_42)] focus:border-[oklch(0.45_0.11_34)] focus:outline-none" placeholder="Tell us your concept, mood, or location preferences..." />
          </div>

          <button type="submit" className="bg-[oklch(0.23_0.03_42)] px-6 py-2.5 text-sm font-medium tracking-wide text-[oklch(0.98_0.008_82)] transition hover:bg-[oklch(0.17_0.03_40)]">
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
      <label htmlFor={name} className="mb-1.5 block text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[oklch(0.46_0.04_46)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-[oklch(0.8_0.02_68)] bg-transparent px-3 py-2 text-sm text-[oklch(0.24_0.03_42)] focus:border-[oklch(0.45_0.11_34)] focus:outline-none"
      />
    </div>
  );
}
