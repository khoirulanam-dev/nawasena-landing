import React, { useState } from "react";
import { FaWhatsapp, FaTimes, FaArrowRight } from "react-icons/fa";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const phoneNumber = "6281779356312";

  const categories = [
    {
      id: 1,
      name: "Arabica Java Ijen",
      origin: "Java Ijen",
      desc: "Premium Arabica green coffee beans from Java Ijen with various post-harvest processes.",
      img: "/images/natural-anaerob.jpeg",
      products: [
        {
          id: 1,
          name: "Green Bean Arabica Full Wash Grade 1",
          origin: "Java Ijen",
          desc: "Arabica Java Ijen Full Washed is processed through a full wash with maintained fermentation control, resulting in a clean, bright and balanced flavor profile. This coffee has a smooth acidity level with a light to medium body, as well as a consistent taste character. Ideal for commercial and roastery needs that prioritize taste stability and reliable quality on a large scale.",
          img: "/images/full-wash.jpeg",
        },
        {
          id: 2,
          name: "Green Bean Arabica Semi Wash Grade 1",
          origin: "Java Ijen",
          desc: "Processed using a semi-washed method, this coffee offers a balance between a thicker body and maintained acidity. The taste character tends to be more complex with a light earthy feel and stable sweetness. The right choice for roasters who are looking for a coffee profile with a strong character but still flexible for various roasting profiles.",
          img: "/images/semi-wash.jpeg",
        },
        {
          id: 3,
          name: "Green Bean Arabica Natural Classic Grade 1",
          origin: "Java Ijen",
          desc: "Through a natural process, this coffee is dried with the fruit to produce a sweeter, fruity and fuller body flavor profile. Flavors tend to be bolder with increased complexity than washed. Suitable for blend and single origin needs with a more prominent and characterful taste target.",
          img: "/images/natural-clasic.jpeg",
        },
        {
          id: 4,
          name: "Green Bean Arabica Natural Anaerob Specialty",
          origin: "Java Ijen",
          desc: "Processed using natural anaerobic methods, this coffee goes through closed fermentation which produces a more intense, fruity and complex flavor profile. High level of sweetness with a more expressive aroma. Designed for the specialty segment looking for coffee with a unique taste and strong differentiation in the market.",
          img: "/images/natural-anaerob.jpeg",
        },
        {
          id: 5,
          name: "Single Variety Java Natural Anaerob Specialty",
          origin: "Java Ijen",
          desc: "A single variety micro-lot from Java Ijen processed using natural anaerobic methods to produce a more specific, clean and defined taste character. The profile tends to be complex with more directional fruity notes. Suitable for roastery specialties that prioritize traceability, uniqueness of variety and product exclusivity.",
          img: "/images/Java-Natural-Anaerob.jpeg",
        },
        {
          id: 6,
          name: "Single Variety Orange Bourbon Natural Anaerob Specialty",
          origin: "Java Ijen",
          desc: "Orange Bourbon variety with natural anaerobic process, producing a complex flavor profile, intense fruity character, and high sweetness. Suitable for specialty roasters looking for unique and exclusive Arabica coffee.",
          img: "/images/orange-bourbon.jpeg",
        },
        {
          id: 7,
          name: "Arabica Java Ijen Honey",
          origin: "Java Ijen",
          desc: "Arabica Java Ijen Honey Process offers a balanced cup profile with natural sweetness, medium body, and pleasant fruity notes. Suitable for roastery and specialty coffee needs.",
          img: "/images/honey-ijen.jpeg",
        },
      ],
    },
    {
      id: 2,
      name: "Arabica Aceh Gayo",
      origin: "Aceh Gayo",
      desc: "Premium Arabica green coffee beans from Aceh Gayo, known for strong body and distinctive Indonesian coffee character.",
      img: "/images/gayo-fullwashed.jpeg",
      products: [
        {
          id: 8,
          name: "Arabica Aceh Gayo Full Washed",
          origin: "Aceh Gayo",
          desc: "Aceh Gayo Full Washed Arabica with clean cup profile, balanced acidity, and stable quality. Suitable for commercial, export, and roastery needs.",
          img: "/images/gayo-fullwashed.jpeg",
        },
        {
          id: 9,
          name: "Arabica Aceh Gayo Semi Washed",
          origin: "Aceh Gayo",
          desc: "Aceh Gayo Semi Washed Arabica with fuller body, earthy nuance, and distinctive Indonesian coffee character. Suitable for roasters who need strong and consistent flavor.",
          img: "/images/gayo-semiwash.jpeg",
        },
        {
          id: 10,
          name: "Arabica Aceh Gayo Natural Classic",
          origin: "Aceh Gayo",
          desc: "Aceh Gayo Natural Classic is processed naturally to produce a sweeter, fruitier, and fuller body profile. Suitable for single origin and blend needs.",
          img: "/images/gayo-naturalclasic.jpeg",
        },
        {
          id: 11,
          name: "Arabica Aceh Gayo Wine Strong",
          origin: "Aceh Gayo",
          desc: "Aceh Gayo Wine Strong offers a unique fermented character with strong aroma, bold body, and complex flavor profile. Suitable for specialty and differentiated coffee products.",
          img: "/images/gayo-wine.jpeg",
        },
      ],
    },
  ];

  const handleWA = (productName) => {
    const message = encodeURIComponent(
      `Hello PT. Nawasena International Group, I am interested in ${productName}. Can I ask for further information regarding specifications and prices?`,
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-24 bg-[#f2efe9]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
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

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our premium Arabica green coffee beans from Java Ijen and
            Aceh Gayo.
          </p>
        </div>

        {/* CATEGORY CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gradient-to-br from-[#f8f7ed] to-[#ece8dc] rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl scroll-smooth"
            >
              <div className="relative h-80 w-full overflow-hidden bg-gray-200">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x500?text=Nawasena+Coffee";
                  }}
                />

                <div className="absolute inset-0 bg-black/50 flex items-end">
                  <div className="p-8 text-white">
                    <p className="text-yellow-400 font-bold tracking-widest uppercase text-xs mb-2">
                      Origin Category
                    </p>

                    <h3
                      className="text-3xl md:text-4xl font-bold mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {category.name}
                    </h3>

                    <p className="text-white/90 text-sm md:text-base mb-6 max-w-md">
                      {category.desc}
                    </p>

                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      View Products
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORY POPUP */}
      {selectedCategory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#f8f9e8] rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedCategory(null)}
              className="sticky top-4 ml-auto mr-4 mt-4 z-20 text-gray-500 hover:text-red-500 bg-white p-3 rounded-full shadow-md flex transition-colors"
            >
              <FaTimes size={20} />
            </button>

            <div className="px-6 md:px-10 pb-10">
              <div className="text-center mb-10">
                <p className="text-green-700 font-bold uppercase text-xs tracking-widest mb-2">
                  Product List
                </p>

                <h3
                  className="text-3xl md:text-4xl font-bold text-[#3e2723]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {selectedCategory.name}
                </h3>

                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                  Available green coffee bean products from{" "}
                  {selectedCategory.origin}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedCategory.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md group"
                  >
                    <div className="relative h-60 w-full overflow-hidden bg-gray-200">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/600x400?text=Coffee+Product";
                        }}
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-[2px] bg-green-700"></span>
                        <p className="text-green-700 font-bold uppercase text-xs tracking-wider">
                          Origin: {product.origin}
                        </p>
                      </div>

                      <h4
                        className="text-lg font-bold text-[#3e2723] mb-3 leading-snug"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {product.name}
                      </h4>

                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                        {product.desc}
                      </p>

                      <button
                        onClick={() => handleWA(product.name)}
                        className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
                      >
                        <FaWhatsapp size={22} />
                        Chat WhatsApp Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
