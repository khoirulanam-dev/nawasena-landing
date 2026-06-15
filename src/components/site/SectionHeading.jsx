export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2e7d32]">{eyebrow}</p>}
      <h2 className="font-display text-4xl font-bold leading-tight text-[#3e2723] md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-stone-600">{description}</p>}
    </div>
  );
}
