import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#3e2723] text-white pt-20 pb-8 border-t-[10px] border-[#b87333]"
    >
      <div className="container mx-auto px-8 md:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Kolom 1: Get In Touch */}
          <div>
            <h4
              className="text-2xl font-bold mb-6 text-[#f8f9e8]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#b87333] shrink-0" />
                <span>
                  Kebonsari Residence No.9 Jember,
                  <br />
                  Jawa Timur, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#b87333] shrink-0" />
                <a
                  href="mailto:info@nawasena.com"
                  className="hover:text-white transition-colors"
                >
                  export@nawasenaint.my.id
                </a>{" "}
                {/* Ganti dengan email asli */}
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-[#b87333] shrink-0" />
                <span>+62 817-7935-6312</span>
              </li>
            </ul>

            {/* Social Media Icons (Facebook & TikTok dihilangkan sesuai permintaan) */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/company/nawasena-international-group"
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#b87333] hover:border-[#b87333] transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/6281779356312"
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#b87333] hover:border-[#b87333] transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/nawasenaint/"
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#b87333] hover:border-[#b87333] transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h4
              className="text-2xl font-bold mb-6 text-[#f8f9e8]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#b87333] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#b87333] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Our Services
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-[#b87333] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Products Catalog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#b87333] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Google Maps */}
          <div>
            <h4
              className="text-2xl font-bold mb-6 text-[#f8f9e8]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Location
            </h4>
            <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-600 shadow-lg bg-gray-200">
              {/* Embed Google Maps Ijen/Bondowoso (Anda bisa mengganti src dengan embed link kantor asli) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1110930348973!2d113.70602817682766!3d-8.191562982148763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69685eb8223c5%3A0xd8d8a380433d8789!2sKebonsari%20Residence!5e0!3m2!1sid!2sid!4v1776503824612!5m2!1sid!2sid"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright Banner */}
        <div className="border-t border-gray-700 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} PT. Nawasena International Group. All
            Rights Reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed & Developed by{" "}
            <span className="text-white font-medium">Nawasena Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
