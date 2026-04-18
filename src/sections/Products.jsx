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
      desc: "Processed using the Fully Washed method. The cherries are pulped, fermented, and thoroughly washed before drying. This process produces an exceptionally clean cup profile, bright acidity, and highlights the authentic premium characteristics of Arabica.",
      img: "/images/full-wash.jpeg",
    },
    {
      id: 2,
      name: "Green Bean Arabica Semi Wash Grade 1",
      origin: "Java Ijen",
      desc: "Produced using the Wet-Hulled (Semi-Washed) method typical of Indonesia. This results in a coffee with a heavier body, lower acidity, and distinctive hints of spice and chocolate notes.",
      img: "/images/semi-wash.jpeg",
    },
    {
      id: 3,
      name: "Green Bean Arabica Natural Classic Grade 1",
      origin: "Java Ijen",
      desc: "Dried whole with the coffee cherries intact under direct sunlight. This natural process delivers a sweet tropical fruit flavor profile, a very strong aroma, and a full-bodied experience.",
      img: "/images/natural-clasic.jpeg",
    },
    {
      id: 4,
      name: "Green Bean Arabica Natural Anaerob Grade 1",
      origin: "Java Ijen",
      desc: "Processed through fermentation in airtight containers without oxygen. This innovative technique creates extraordinary flavor complexity, often featuring winey notes, ripe fruit, and a unique sweet-sour sensation.",
      img: "/images/anaerob.jpg",
    },
    {
      id: 5,
      name: "Green Bean Arabica Grade 1",
      origin: "Toraja",
      desc: "Legendary coffee from the Toraja highlands. Renowned worldwide for its distinct earthy character, balanced acidity, and a smooth, syrupy body.",
      img: "/images/toraja.jpg",
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
