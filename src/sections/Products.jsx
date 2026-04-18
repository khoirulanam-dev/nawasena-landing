import React, { useState } from "react";
import { FaWhatsapp, FaInfoCircle, FaTimes } from "react-icons/fa";

const Products = () => {
  // State untuk mengontrol munculnya popup modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Nomor WA Perusahaan (Format: 628...)
  const phoneNumber = "6281779356312";

  // Daftar Produk sesuai spesifikasi Anda
  const products = [
    {
      id: 1,
      name: "Green Bean Arabica Full Wash Grade 1",
      origin: "Java Ijen",
      desc: "Arabica Java Ijen Full Washed is processed through a full wash with maintained fermentation control, resulting in a clean, bright and balanced flavor profile. This coffee has a smooth acidity level with a light to medium body, as well as a consistent taste character.Ideal for commercial and roastery needs that prioritize taste stability and reliable quality on a large scale.",
      img: "/images/full-wash.jpeg",
    },
    {
      id: 2,
      name: "Green Bean Arabica Semi Wash Grade 1",
      origin: "Java Ijen",
      desc: "Processed using a semi-washed method, this coffee offers a balance between a thicker body and maintained acidity. The taste character tends to be more complex with a light earthy feel and stable sweetness.The right choice for roasters who are looking for a coffee profile with a strong character but still flexible for various roasting profiles.",
      img: "/images/semi-wash.jpeg",
    },
    {
      id: 3,
      name: "Green Bean Arabica Natural Classic Grade 1",
      origin: "Java Ijen",
      desc: "Through a natural process (dry process), this coffee is dried with the fruit to produce a sweeter, fruity and fuller body flavor profile. Flavors tend to be bolder with increased complexity than washed.Suitable for blend and single origin needs with a more prominent and characterful taste target.",
      img: "/images/natural-clasic.jpeg",
    },
    {
      id: 4,
      name: "Green Bean Arabica Natural Anaerob Specialty",
      origin: "Java Ijen",
      desc: "Processed using natural anaerobic methods, this coffee goes through closed fermentation which produces a more intense, fruity and complex flavor profile. High level of sweetness with a more expressive aroma.Designed for the specialty segment looking for coffee with a unique taste and strong differentiation in the market.",
      img: "/images/natural-anaerob.jpeg",
    },
    {
      id: 5,
      name: "Single Origin Java Natural Anaerob Specialty",
      origin: "Java Ijen",
      desc: "It is a single variety micro-lot from Java Ijen which is processed using natural anaerobic methods to produce a more specific, clean and defined taste character. The profile tends to be complex with more directional fruity notes. Suitable for roastery specialties that prioritize traceability, uniqueness of variety and product exclusivity.",
      img: "/images/Java-Natural-Anaerob.jpeg",
    },
    {
      id: 6,
      name: "Single Origin Orange Bourbon Natural Anaerob Specialty",
      origin: "Java Ijen",
      desc: "Orange Bourbon varieties with natural anaerobic processes produce very complex flavor profiles, intense fruity, and high sweetness. The unique character of this variety provides a different cup experience with a sharper and more distinctive aroma. Aimed at the premium and specialty segments looking for high-end coffee with unique character and high exclusive value.",
      img: "/images/orange-bourbon.jpeg",
    },
    {
      id: 7,
      name: "Green Bean Arabica Toraja Mamasa Full Wash",
      origin: "Toraja",
      desc: "Arabica Toraja Mamasa is known for its strong body character and distinctive taste complexity. Processed full washed to produce a balance between clean cup and richness flavor, with a long aftertaste.The ideal choice for premium markets who want coffee with a strong origin identity and distinctive profile.",
      img: "/images/toraja.jpeg",
    },
  ];

  // Fungsi untuk handle klik tombol WhatsApp
  const handleWA = (productName) => {
    const message = encodeURIComponent(
      `Hello PT. Nawasena International Group, I am interested in products ${productName}. Can I ask for further information regarding specifications and prices?`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-24 bg-[#f2efe9]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* === HEADER === */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-10 h-[2px] bg-green-700"></span>
            <p className="text-green-700 font-bold tracking-widest uppercase text-xs">
              OUR PRODUCTS
            </p>
            <span className="w-10 h-[2px] bg-green-700"></span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#3e2723]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Premium Green Coffee Beans
          </h2>
        </div>

        {/* === GRID CATALOG === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#f8f9e8] rounded-xl overflow-hidden shadow-md group"
            >
              {/* Gambar Wrapper dengan Efek Hover */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay Gelap saat di-hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 z-10">
                  {/* Icon Info (!) untuk buka Popup */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-14 h-14 bg-yellow-400 text-white rounded-full flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-transform shadow-lg"
                    title="Detail Spesifikasi"
                  >
                    <FaInfoCircle size={26} />
                  </button>

                  {/* Icon WA untuk langsung Chat */}
                  <button
                    onClick={() => handleWA(product.name)}
                    className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-transform shadow-lg"
                    title="Pesan via WhatsApp"
                  >
                    <FaWhatsapp size={28} />
                  </button>
                </div>
              </div>

              {/* Teks Judul di Bawah Gambar */}
              <div className="p-6 text-center">
                <h3
                  className="text-lg font-bold text-[#3e2723] mb-1 leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          MODAL POPUP (Muncul jika tombol "!" diklik) 
          ========================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          <div className="bg-[#f8f9e8] rounded-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative shadow-2xl">
            {/* Tombol Close (X) di pojok kanan atas */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 z-20 transition-colors bg-white/80 p-2 rounded-full"
            >
              <FaTimes size={20} />
            </button>

            {/* Gambar di dalam Modal (Sisi Kiri) */}
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 relative">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Kopi+Nawasena";
                }}
              />
            </div>

            {/* Detail Teks di dalam Modal (Sisi Kanan) */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-green-700"></span>
                <p className="text-green-700 font-bold uppercase text-xs tracking-wider">
                  Origin: {selectedProduct.origin}
                </p>
              </div>

              <h3
                className="text-2xl md:text-3xl font-bold text-[#3e2723] mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {selectedProduct.name}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                <strong className="text-[#3e2723] text-base block mb-2">
                  Product Description:
                </strong>
                {selectedProduct.desc}
              </p>

              {/* Tombol WA di dalam Modal */}
              <button
                onClick={() => handleWA(selectedProduct.name)}
                className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
              >
                <FaWhatsapp size={22} />
                Chat WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
