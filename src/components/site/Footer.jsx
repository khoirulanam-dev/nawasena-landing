import Link from "next/link";
import { origins, products, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[8px] border-[#b87333] bg-[#3e2723] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl font-bold">{site.legalName}</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">{site.description}</p>
          <div className="mt-6 grid gap-2 text-sm text-white/80">
            <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            <a href={`https://wa.me/${site.whatsappNumber}`} className="hover:text-white">{site.whatsapp}</a>
            <span>{site.address}</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[#f4d3aa]">Products</h3>
          <ul className="mt-4 grid gap-2 text-sm text-white/75">
            {products.slice(0, 5).map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`} className="hover:text-white">{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#f4d3aa]">Company</h3>
          <ul className="mt-4 grid gap-2 text-sm text-white/75">
            <li><Link href="/origins" className="hover:text-white">Origins</Link></li>
            {origins.map((origin) => (
              <li key={origin.slug}><Link href={`/origins/${origin.slug}`} className="hover:text-white">{origin.name}</Link></li>
            ))}
            <li><Link href="/export-services" className="hover:text-white">Export Services</Link></li>
            <li><Link href="/news" className="hover:text-white">News and Insights</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>Copyright {year} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={site.linkedin} className="hover:text-white">LinkedIn</a>
            <a href={site.instagram} className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
