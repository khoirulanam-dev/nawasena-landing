import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | PT. Nawasena International Group";
  }, []);

  return (
    <main className="min-h-screen bg-[#3e2723] text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24">
        <img
          src="/images/hero-1.webp"
          alt="Indonesian Arabica coffee beans"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#f2d1aa]">
            404 Not Found
          </p>

          <h1
            className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            This page is not available.
          </h1>

          <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            The page you are looking for may have moved or no longer exists.
            Return to Nawasena International Group to explore Indonesian Arabica
            green coffee beans and sample requests.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center border border-white/30 bg-nawasena-light px-8 py-3 font-semibold text-white transition hover:bg-nawasena-dark"
            >
              Back to Home
            </a>
            <a
              href="/#request-sample"
              className="inline-flex items-center justify-center border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white transition hover:bg-nawasena-light"
            >
              Request Sample
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
