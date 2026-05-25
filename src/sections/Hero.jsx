import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  // Ganti link URL dengan path gambar lokal di folder public/images
  const images = ["/images/hero-1.jpeg", "/images/hero2.jpeg"];

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
              {/* Overlay gelap 60% agar teks terbaca jelas di semua device */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Konten Teks */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start text-left px-6 md:px-24 max-w-7xl mx-auto mt-16 md:mt-16">
        <p
          className="text-base md:text-xl text-gray-200 mb-3 md:mb-4 tracking-wider font-light drop-shadow-md"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Welcome to PT. Nawasena International Group
        </p>

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
