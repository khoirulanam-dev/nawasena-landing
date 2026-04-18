import React from "react";
import { FaCheckCircle, FaLeaf, FaMedal } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-24 bg-nawasena-bg">
      <div className="container mx-auto px-8 md:px-16 max-w-7xl">
        {/* === BLOK ATAS: Grid Asimetris & Teks === */}
        {/* PERBAIKAN: Ubah items-center menjadi items-start lg:items-center agar di HP tidak tabrakan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center mb-24">
          {/* Kiri: Grid Asimetris */}
          {/* PERBAIKAN: Tinggi dinamis h-[350px] di HP, h-[450px] di PC agar lebih proporsional */}
          <div className="grid grid-cols-2 gap-4 h-[350px] md:h-[450px] w-full">
            {/* Gambar Kiri (Tinggi penuh) */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-full">
              <img
                src="/images/about1.jpeg"
                alt="Coffee"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Kolom Kanan (Bagi 2) */}
            <div className="flex flex-col gap-4 h-full">
              <div className="bg-nawasena-light text-white rounded-3xl p-4 md:p-6 h-1/2 flex flex-col justify-center items-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <h3
                  className="text-3xl md:text-5xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  250+
                </h3>
                <p className="font-medium text-[10px] md:text-xs tracking-widest uppercase">
                  Partner Farmers
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-1/2">
                <img
                  src="/images/about2.jpeg"
                  alt="Farmers"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Kanan: Teks Penjelasan */}
          {/* PERBAIKAN: Tambah mt-8 lg:mt-0 untuk memaksa jarak aman antara gambar dan teks di HP */}
          <div className="mt-24 lg:mt-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-nawasena-light"></span>
              <p className="text-nawasena-light font-bold tracking-[0.15em] uppercase text-sm">
                About Us
              </p>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-nawasena-dark mb-6 leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Delivering Indonesia’s Finest Arabica Coffee to Global Markets
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Nawasena International Group, we are committed to bringing the
              best of Indonesian coffee to both domestic and international
              markets. As a growing green coffee exporter, we focus on premium
              Arabica beans with specialty-grade potential, sourced directly
              from trusted origins across Indonesia. We work closely with
              farmers and local partners to ensure every lot is handled with
              care—from harvesting to post-processing—maintaining quality
              consistency, traceability, and transparency throughout the supply
              chain. Our approach is simple: deliver coffee that is not only
              high in quality, but also reliable for long-term business
              relationships.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex gap-4">
                <FaLeaf className="text-nawasena-light text-2xl shrink-0" />
                <div>
                  <h4 className="font-bold text-nawasena-dark mb-1">
                    Sustainable
                  </h4>
                  <p className="text-sm text-gray-500">
                    We collaborate directly with farmers <br></br> and origin
                    partners to ensure ethical sourcing, better quality control,{" "}
                    <br></br> and a more transparent supply chain.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaMedal className="text-nawasena-light text-2xl shrink-0" />
                <div>
                  <h4 className="font-bold text-nawasena-dark mb-1">
                    Premium Quality Green Beans
                  </h4>
                  <p className="text-sm text-gray-500">
                    Delivering clean, consistent, and reliable cup profiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === BLOK BAWAH: Why Us & Video/Gambar Gudang === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center mt-32 bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="order-2 lg:order-1 mt-6 lg:mt-0">
            <h2
              className="text-3xl font-bold text-nawasena-dark mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Global Roasters Choose Nawasena
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are more than just a coffee supplier—we are a partner focused
              on delivering consistent quality and dependable supply. With
              strong connections to key coffee-producing regions in Indonesia,
              we provide carefully selected green coffee beans tailored to meet
              market expectations. Our goal is to help roasters, importers, and
              distributors secure coffee that performs well not only in cupping,
              but also in business continuity.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Directly Sourced from Trusted Origins",
                "Consistent Quality Control",
                "Reliable & Efficient Export Handling",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-nawasena-dark font-medium"
                >
                  <FaCheckCircle className="text-green-600 text-lg shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-xl relative h-64 md:h-80 w-full group">
            <img
              src="/images/toraja.jpeg"
              alt="Processing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
