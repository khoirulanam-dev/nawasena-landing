import Link from "next/link";
import clsx from "clsx";

export function AdminPageHeader({ eyebrow, title, description, actionHref, actionLabel }) {
  return (
    <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2e7d32]">{eyebrow}</p>}
        <h1 className="font-display mt-2 text-4xl font-bold leading-tight text-[#3e2723] md:text-5xl">{title}</h1>
        {description && <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">{description}</p>}
      </div>
      {actionHref && (
        <Link href={actionHref} className="inline-flex rounded-sm bg-[#2e7d32] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-900/15 hover:bg-[#245d28]">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}

export function AdminStatCard({ label, value, detail, tone = "default" }) {
  return (
    <article className="relative overflow-hidden rounded-sm border border-[#e1d4c3] bg-white/95 p-5 shadow-lg shadow-[#3e2723]/5">
      <div className={clsx("absolute inset-x-0 top-0 h-1", tone === "green" ? "bg-[#2e7d32]" : tone === "amber" ? "bg-[#b87333]" : "bg-[#3e2723]")} />
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">{label}</p>
      <p className={clsx("font-display mt-3 text-4xl font-bold", tone === "green" ? "text-[#2e7d32]" : "text-[#3e2723]")}>{value}</p>
      {detail && <p className="mt-2 text-sm leading-6 text-stone-500">{detail}</p>}
    </article>
  );
}

export function AdminPanel({ title, description, children, className = "" }) {
  return (
    <section className={clsx("rounded-sm border border-[#e1d4c3] bg-white/96 shadow-xl shadow-[#3e2723]/5", className)}>
      {(title || description) && (
        <div className="border-b border-[#eadfce] bg-[#fffaf1] px-5 py-4">
          {title && <h2 className="font-display text-2xl font-bold text-[#3e2723]">{title}</h2>}
          {description && <p className="mt-1 text-sm leading-6 text-stone-500">{description}</p>}
        </div>
      )}
      <div className="p-5">{children}</div>
    </section>
  );
}

export function AdminStatus({ children, tone = "neutral" }) {
  return (
    <span
      className={clsx(
        "inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em]",
        tone === "green" && "bg-green-50 text-green-700",
        tone === "amber" && "bg-amber-50 text-amber-700",
        tone === "red" && "bg-red-50 text-red-700",
        tone === "neutral" && "bg-stone-100 text-stone-600",
      )}
    >
      {children}
    </span>
  );
}

export function AdminRows({ rows }) {
  return (
    <div className="overflow-hidden rounded-sm border border-[#eadfce]">
      {rows.map((row) => (
        <div key={row.title} className="grid gap-3 border-b border-[#eadfce] bg-white p-4 transition hover:bg-[#fffaf1] last:border-0 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-bold text-[#3e2723]">{row.title}</h3>
              {row.status && <AdminStatus tone={row.tone || "neutral"}>{row.status}</AdminStatus>}
            </div>
            {row.description && <p className="mt-2 text-sm leading-6 text-stone-500">{row.description}</p>}
          </div>
          {row.meta && <p className="text-sm font-semibold text-stone-500">{row.meta}</p>}
        </div>
      ))}
    </div>
  );
}
