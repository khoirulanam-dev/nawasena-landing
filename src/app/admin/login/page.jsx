import { AdminLoginForm } from "@/components/site/AdminLoginForm";
import Image from "next/image";

export const metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({ searchParams }) {
  const params = await searchParams;
  const reason = params?.reason;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#21130f] text-white">
      <Image
        src="/images/hero-1.webp"
        alt=""
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(184,115,51,0.28),transparent_35%),linear-gradient(120deg,rgba(33,19,15,0.96),rgba(62,39,35,0.76)_50%,rgba(17,24,18,0.92))]" />

      <section className="relative z-10 grid min-h-screen lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-between px-7 py-8 md:px-12 lg:px-16">
          <div>
            <p className="font-display text-2xl font-bold">PT. Nawasena International Group</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-[#f4d3aa]">
              Private CMS Access
            </p>
          </div>

          <div className="max-w-xl py-16">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f4d3aa] backdrop-blur">
              Secured admin workspace
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
              Manage coffee content with quiet confidence.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/72">
              Product data, harvest availability, buyer inquiries, articles, redirects, and audit logs live behind database-backed admin access.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-white/65 sm:grid-cols-3">
            <div className="border-l border-[#f4d3aa]/40 pl-4">
              <p className="font-bold text-white">Noindex</p>
              <p>Admin routes are hidden from crawlers.</p>
            </div>
            <div className="border-l border-[#f4d3aa]/40 pl-4">
              <p className="font-bold text-white">Protected</p>
              <p>Signed session cookie required.</p>
            </div>
            <div className="border-l border-[#f4d3aa]/40 pl-4">
              <p className="font-bold text-white">Preview-ready</p>
              <p>Uses Neon credentials and Vercel env.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-7 py-12 md:px-12">
          <div className="w-full max-w-md border border-white/15 bg-[#fffaf1]/95 p-7 text-[#3e2723] shadow-2xl shadow-black/35 backdrop-blur md:p-9">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2e7d32]">Authentication</p>
                <h2 className="font-display mt-3 text-4xl font-bold">Admin login</h2>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3e2723] font-display text-lg font-bold text-[#f4d3aa]">
                N
              </div>
            </div>

            <p className="text-sm leading-7 text-stone-600">
              Sign in with your admin email and password. Credentials are stored in Neon as password hashes, and the browser receives an HTTP-only signed session cookie.
            </p>

            {reason === "not-configured" && (
              <p className="mt-5 border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-900">
                Admin access is not configured. Add <code>DATABASE_URL</code> and <code>AUTH_SECRET</code> to <code>.env.local</code>, run the admin user script, then restart the dev server.
              </p>
            )}

            <AdminLoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
