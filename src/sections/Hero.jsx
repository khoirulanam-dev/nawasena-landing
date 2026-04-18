import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop",
  ];

  return (
    <section id="home" className="h-screen w-full relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay gelap sedikit ditebalkan (60%) agar teks di HP lebih jelas terbaca */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Konten Teks - Diperbaiki untuk Mobile */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start text-left px-6 md:px-24 max-w-7xl mx-auto mt-16 md:mt-16">
        <p
          className="text-base md:text-xl text-gray-200 mb-3 md:mb-4 tracking-wider font-light drop-shadow-md"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Welcome to PT. Nawasena International Group
        </p>

        {/* text-4xl untuk HP, sm:text-5xl untuk Tablet, md:text-7xl untuk PC. Line-height dirapikan. */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 md:mb-10 drop-shadow-xl max-w-3xl leading-[1.2] md:leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Farm of Coffee Beans Products
        </h1>

        <a
          href="#about"
          className="bg-nawasena-light hover:bg-nawasena-dark text-white font-medium py-3 px-8 md:px-10 rounded-sm transition-all duration-300 shadow-lg tracking-wide text-sm md:text-base"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default Hero;
