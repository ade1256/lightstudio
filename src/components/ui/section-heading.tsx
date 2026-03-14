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
      <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">{eyebrow}</p>
      <h2 className="text-[clamp(2rem,4.2vw,3.8rem)] leading-[0.95] text-[var(--text)]">{title}</h2>
      {description ? <p className="mt-5 max-w-[60ch] text-[0.98rem] leading-relaxed text-[var(--muted)] sm:text-base">{description}</p> : null}
    </div>
  );
}
