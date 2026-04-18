import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "6281779356312";

  // Memantau scroll untuk menampilkan tombol Arrow Up
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fungsi scroll ke atas yang halus
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Tombol Arrow Up (Kiri Bawah) - Muncul jika di-scroll */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 z-50 p-4 bg-gray-800 text-white rounded-full shadow-xl transition-all duration-300 hover:bg-[#b87333] hover:-translate-y-1 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        title="Back to Top"
      >
        <FaArrowUp size={20} />
      </button>

      {/* Tombol WhatsApp (Kanan Bawah) - Selalu ada */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-green-600 hover:scale-110 flex items-center justify-center animate-bounce"
        title="Chat with Us"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
};

export default FloatingAction;
