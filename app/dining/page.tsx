import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DiningPage() {
  const menus = [
    {
      name: "Fresh Catch of the Day",
      desc: "Line-caught local fish grilled with aromatic Balinese herbs, served with coconut-infused rice.",
      price: "Rp 350.000",
    },
    {
      name: "Ocean-Side Risotto",
      desc: "Creamy arborio rice with butter-poached prawns, clams, and a zest of local lime.",
      price: "Rp 290.000",
    },
    {
      name: "Sunset Ceviche",
      desc: "Thinly sliced local snapper cured in citrus, chili, and cilantro, served on a bed of fresh avocado.",
      price: "Rp 220.000",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Pro Header: Parallax & Fade (Seragam dengan page lain) */}
      <header className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&auto=format&fit=crop')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2537]/70 via-[#0f2537]/30 to-transparent"></div>
        </div>

        <div className="relative z-10 text-white px-6 mt-16">
          <span className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#c8a97e]"></span>
            <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#c8a97e] drop-shadow-md">
              Gastronomy
            </p>
            <span className="w-8 h-[1px] bg-[#c8a97e]"></span>
          </span>
          <h1 className="font-serif text-5xl md:text-7xl drop-shadow-lg">
            Ocean-Inspired Dining
          </h1>
        </div>
      </header>

      {/* Menu Section: Ilusi Kertas Menu Fisik */}
      <section className="px-6 pb-32 max-w-4xl mx-auto -mt-10 relative z-20">
        <div className="bg-white p-8 md:p-16 shadow-[0_20px_50px_rgba(15,37,55,0.06)] border border-gray-50 rounded-sm">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-[#0f2537]">
              Signature Tasting Menu
            </h2>
            <div className="w-12 h-[1px] bg-[#c8a97e] mx-auto mt-6"></div>
          </div>

          <div className="space-y-12">
            {menus.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#0f2537]/10 pb-8 transition-colors duration-500 hover:border-[#c8a97e]/40"
              >
                <div className="max-w-md">
                  <h3 className="font-serif text-xl text-[#0f2537] mb-2 group-hover:text-[#c8a97e] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs text-[#0f2537]/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 md:mt-0 flex items-center gap-6 w-full md:w-auto">
                  {/* Garis penghubung yang elegan (Hanya di Desktop) */}
                  <div className="hidden md:block w-12 h-[1px] bg-[#0f2537]/10 group-hover:bg-[#c8a97e]/50 transition-colors duration-300"></div>

                  <p className="font-serif text-lg text-[#c8a97e] shrink-0">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
