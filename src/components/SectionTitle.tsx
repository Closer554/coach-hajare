type SectionTitleProps = {
  title: string;
  accent: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  title,
  accent,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <header className={centered ? "text-center" : ""}>
      <div
        className={`mb-4 flex items-center gap-4 ${centered ? "justify-center" : "justify-start"}`}
      >
        <span className="h-px w-12 bg-[var(--taupe)]" />
        <span className="font-script text-4xl leading-none text-[var(--accent)]">
          {accent}
        </span>
        <span className="h-px w-12 bg-[var(--taupe)]" />
      </div>
      <h2 className="font-serif text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
