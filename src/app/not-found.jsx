import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-[#3e2723] text-white">
      <div className="section-shell py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4d3aa]">404 Not Found</p>
        <h1 className="font-display mt-4 text-5xl font-bold">This page is not available.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/75">The page may have moved or does not exist. Return to Nawasena to explore Indonesian green coffee beans and buyer inquiries.</p>
        <Link href="/" className="mt-8 inline-flex rounded-sm bg-[#2e7d32] px-6 py-3 font-bold text-white">Back to Home</Link>
      </div>
    </main>
  );
}
