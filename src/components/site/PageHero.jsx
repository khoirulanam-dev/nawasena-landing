import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

export function PageHero({ eyebrow, title, description, image = "/images/hero-1.webp", primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[#3e2723] text-white">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="section-shell relative z-10 flex min-h-[520px] flex-col justify-center py-24">
        {eyebrow && <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#f4d3aa]">{eyebrow}</p>}
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-tight md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{description}</p>
        {(primaryHref || secondaryHref) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryHref && <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>}
            {secondaryHref && <ButtonLink href={secondaryHref} variant="secondary">{secondaryLabel}</ButtonLink>}
          </div>
        )}
      </div>
    </section>
  );
}
