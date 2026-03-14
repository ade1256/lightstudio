interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[oklch(0.47_0.05_34)]">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(2rem,3vw,3.35rem)] leading-[0.95] text-[oklch(0.2_0.03_42)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[56ch] text-[0.95rem] leading-relaxed text-[oklch(0.42_0.02_52)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
