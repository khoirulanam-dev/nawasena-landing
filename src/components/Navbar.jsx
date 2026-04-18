import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icon garis 3 dan silang

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk menu HP
  const links = ["Home", "About", "Services", "Products", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] bg-white transition-all duration-500 ease-in-out ${
        isScrolled ? "py-4 shadow-md" : "py-5 shadow-sm"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="container mx-auto px-6 md:px-16 flex justify-between items-center relative z-[110]">
        {/* Logo / Title */}
        <div
          className="text-2xl font-bold text-nawasena-dark tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          PT. Nawasena International Group
        </div>

        {/* Menu Links (Desktop) */}
        <ul className="hidden md:flex space-x-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-nawasena-dark font-medium text-[15px] transition-colors duration-300 hover:text-nawasena-light"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger (Mobile & Tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-nawasena-dark focus:outline-none"
        >
          {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Menu Dropdown / Slide (Mobile & Tablet) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-300 ease-in-out z-[105] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col space-y-8 text-center">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)} // Tutup menu setelah di-klik
                className="text-3xl text-nawasena-dark font-bold hover:text-nawasena-light transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
