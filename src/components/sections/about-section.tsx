import Image from "next/image";
import { Aperture, Camera, Lightbulb, WandSparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const expertise = [
  { icon: Camera, label: "Canon R5 & Sony A7 IV hybrid system" },
  { icon: Lightbulb, label: "Profoto lighting and cinematic modifiers" },
  { icon: Aperture, label: "Color-calibrated workflow and premium retouching" },
  { icon: WandSparkles, label: "9+ years of commercial and portrait experience" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[oklch(0.955_0.011_76)] py-[clamp(4.6rem,8vw,7.5rem)]">
      <Container className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="About the Studio"
            title="Crafting visual stories with precision and soul"
            description="Led by portrait and documentary photographer Nadia Rowan, Lumen Atelier blends fine-art composition with editorial polish."
          />
          <p className="mt-7 max-w-2xl text-sm leading-relaxed text-[oklch(0.38_0.02_50)] sm:text-base">
            Since 2017, we have photographed weddings, graduation milestones, family legacies, and product campaigns across indoor studios and natural environments. Our studio story is grounded in one principle: every image should feel timeless in ten years.
          </p>

          <ul className="mt-9 space-y-3.5 border-l border-[oklch(0.78_0.04_40)] pl-4">
            {expertise.map((item) => (
              <li key={item.label} className="flex items-center gap-3 text-sm text-[oklch(0.34_0.02_48)] sm:text-base">
                <item.icon className="h-4 w-4 text-[oklch(0.45_0.11_34)]" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1000&q=80"
            alt="Behind the scenes in studio"
            width={800}
            height={900}
            className="col-span-2 h-[270px] w-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1000&q=80"
            alt="Camera gear and lens detail"
            width={500}
            height={500}
            className="h-[190px] w-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
            alt="Photographer adjusting light setup"
            width={500}
            height={500}
            className="h-[190px] w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
