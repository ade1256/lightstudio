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
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[oklch(0.52_0.02_60)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight text-[oklch(0.22_0.03_50)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-[oklch(0.42_0.02_60)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
