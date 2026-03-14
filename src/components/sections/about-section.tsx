import Image from "next/image";
import { Aperture, Camera, Lightbulb, WandSparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const expertise = [
  { icon: Camera, label: "Arah pose clear, cocok untuk yang jarang foto" },
  { icon: Lightbulb, label: "Setup lighting studio presisi untuk tone kulit natural" },
  { icon: Aperture, label: "Color workflow konsisten untuk cetak dan digital" },
  { icon: WandSparkles, label: "Team kecil, eksekusi cepat, quality control ketat" },
];

export function AboutSection() {
  return (
    <section id="about" className="border-y border-[var(--line)] bg-[var(--surface)] py-[clamp(4rem,8vw,7rem)]">
      <Container className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow="Tentang Lightstudio"
            title="Studio yang dibangun untuk hasil visual yang meyakinkan"
            description="Kami bantu klien yang ingin booking cepat tapi tetap butuh hasil foto yang siap dipakai untuk momen penting atau materi bisnis."
          />

          <ul className="mt-8 space-y-4 border-l border-[var(--brand)] pl-4">
            {expertise.map((item) => (
              <li key={item.label} className="flex items-center gap-3 text-sm text-[var(--muted)] sm:text-base">
                <item.icon className="h-4 w-4 text-[var(--brand)]" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=80"
            alt="Behind the scenes photography studio"
            width={900}
            height={1000}
            className="col-span-2 h-[280px] w-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80"
            alt="Camera lens close up"
            width={500}
            height={500}
            className="h-[180px] w-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
            alt="Photographer adjusting camera"
            width={500}
            height={500}
            className="h-[180px] w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
