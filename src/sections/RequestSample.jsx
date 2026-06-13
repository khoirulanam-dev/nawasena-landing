import React, { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const productOptions = [
  "Green Bean Arabica Full Wash Grade 1",
  "Green Bean Arabica Semi Wash Grade 1",
  "Green Bean Arabica Natural Classic Grade 1",
  "Green Bean Arabica Natural Anaerob Specialty",
  "Single Variety Java Natural Anaerob Specialty",
  "Single Variety Orange Bourbon Natural Anaerob Specialty",
  "Arabica Java Ijen Honey",
  "Arabica Aceh Gayo Full Washed",
  "Arabica Aceh Gayo Semi Washed",
  "Arabica Aceh Gayo Natural Classic",
  "Arabica Aceh Gayo Wine Strong",
];

const quantityOptions = ["50gr", "150gr", "200gr", "300gr", "500gr", "1Kg", "Custom"];

const initialForm = {
  name: "",
  company: "",
  type: "",
  country: "",
  address: "",
  product: "",
  quantity: "",
};

const RequestSample = () => {
  const [form, setForm] = useState(initialForm);
  const phoneNumber = "6281779356312";

  const message = useMemo(() => {
    return [
      "*REQUEST COFFEE SAMPLE*",
      "PT. Nawasena International Group",
      "",
      "Hello, I would like to request a coffee sample.",
      "",
      "------------------------------",
      `Name: ${form.name}`,
      `Company: ${form.company || "-"}`,
      `Type: ${form.type}`,
      `Country: ${form.country}`,
      `Address: ${form.address}`,
      "",
      `Product Sample: ${form.product}`,
      `Quantity: ${form.quantity}`,
      "------------------------------",
      "",
      "Please send further information about sample availability and delivery process.",
    ].join("\n");
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="request-sample" className="py-24 bg-[#fffaf1]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-10 h-[2px] bg-green-700"></span>
            <p className="text-green-700 font-bold tracking-widest uppercase text-xs">
              Request Sample
            </p>
            <span className="w-10 h-[2px] bg-green-700"></span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-[#3e2723]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Request Coffee Sample
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Complete the form below and our team will continue your sample
            request through WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl border border-[#efe4d2] p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#3e2723]">
              Name *
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-lg border border-gray-200 bg-[#fffaf1] px-4 py-3 text-gray-700 outline-none transition focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#3e2723]">
              Company
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="rounded-lg border border-gray-200 bg-[#fffaf1] px-4 py-3 text-gray-700 outline-none transition focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#3e2723]">
              Type *
              <input
                required
                type="text"
                name="type"
                value={form.type}
                onChange={handleChange}
                placeholder="exporter, importer, Roastery, dll"
                className="rounded-lg border border-gray-200 bg-[#fffaf1] px-4 py-3 text-gray-700 outline-none transition focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#3e2723]">
              Country *
              <input
                required
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                className="rounded-lg border border-gray-200 bg-[#fffaf1] px-4 py-3 text-gray-700 outline-none transition focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
              />
            </label>

            <label className="md:col-span-2 flex flex-col gap-2 text-sm font-semibold text-[#3e2723]">
              Alamat *
              <textarea
                required
                name="address"
                value={form.address}
                onChange={handleChange}
                rows="4"
                className="resize-none rounded-lg border border-gray-200 bg-[#fffaf1] px-4 py-3 text-gray-700 outline-none transition focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
              ></textarea>
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#3e2723]">
              Product Sample *
              <select
                required
                name="product"
                value={form.product}
                onChange={handleChange}
                className="rounded-lg border border-gray-200 bg-[#fffaf1] px-4 py-3 text-gray-700 outline-none transition focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
              >
                <option value="">Select product</option>
                {productOptions.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#3e2723]">
              Quantity *
              <select
                required
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                className="rounded-lg border border-gray-200 bg-[#fffaf1] px-4 py-3 text-gray-700 outline-none transition focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
              >
                <option value="">Select quantity</option>
                {quantityOptions.map((quantity) => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Required fields are marked with an asterisk.
            </p>

            <button
              type="submit"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-lg bg-green-600 px-8 py-3 font-semibold text-white shadow-md transition-colors hover:bg-green-700"
            >
              <FaWhatsapp size={22} />
              Send Request Sample
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestSample;
