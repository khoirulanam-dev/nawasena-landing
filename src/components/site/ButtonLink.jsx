import Link from "next/link";
import clsx from "clsx";

export function ButtonLink({ href, children, variant = "primary", className = "" }) {
  return (
    <Link
      href={href}
      className={clsx(
        "focus-ring inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-semibold transition",
        variant === "primary" && "bg-[#2e7d32] text-white hover:bg-[#245d28]",
        variant === "secondary" && "border border-[#3e2723]/20 bg-white text-[#3e2723] hover:bg-[#f1ebe1]",
        variant === "dark" && "bg-[#3e2723] text-white hover:bg-[#2a1a17]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
