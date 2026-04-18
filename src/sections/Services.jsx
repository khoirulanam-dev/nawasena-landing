import React from "react";

const Services = () => {
  // Kita gunakan murni foto lokal milik perusahaan agar aman, cepat, dan tidak bergantung internet
  const incoterms = [
    {
      title: "EXW (Ex Works)",
      desc: "Responsibility shifts from seller to buyer at our warehouse. Buyer handles all transport & export processes from there.",
      img: "/images/farmer-exwork.jpg", // Panggil dari folder public/images
    },
    {
      title: "FOB (Free On Board)",
      desc: "Seller delivers goods to a vessel at the designated port. Buyer takes responsibility once the goods are on board.",
      img: "/images/port.jpg", // Panggil dari folder public/images
    },
    {
      title: "CIF (Cost, Insurance & Freight)",
      desc: "Seller covers cost, insurance, and freight to the destination port. Risk transfers to buyer on board the vessel.",
      img: "/images/cif.png", // Panggil dari folder public/images
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#f8f9e8]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="w-10 h-[2px] bg-green-700"></span>
            <p className="text-green-700 font-bold tracking-widest uppercase text-sm">
              Our Services
            </p>
            <span className="w-10 h-[2px] bg-green-700"></span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#3e2723]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Incoterms We Offer to Our Clients
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-24">
          {incoterms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md relative px-6 pb-8 pt-16 flex flex-col items-center mt-12 md:mt-0 text-center"
            >
              {/* GAMBAR BULAT (Kode onError sudah dihilangkan agar tidak nge-hang) */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-8 border-[#f8f9e8] bg-gray-200 overflow-hidden shadow-sm shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Teks Judul & Deskripsi */}
              <h3
                className="text-xl font-bold text-[#3e2723] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>

              <div className="w-8 h-8 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors cursor-pointer shadow-sm self-start">
                <span className="text-xl leading-none mb-1">›</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
