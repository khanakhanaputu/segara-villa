import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VillasPage() {
  const suites = [
    {
      id: 1,
      name: "Horizon Ocean Villa",
      price: "Rp 8.500.000",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&auto=format&fit=crop",
      features: ["180° Ocean View", "Private Infinity Pool", "King Bed"],
    },
    {
      id: 2,
      name: "Sandbank Suite",
      price: "Rp 6.200.000",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&auto=format&fit=crop",
      features: ["Direct Beach Access", "Private Terrace", "Rain Shower"],
    },
    {
      id: 3,
      name: "Coastal Loft",
      price: "Rp 5.500.000",
      image:
        "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=1200&auto=format&fit=crop",
      features: [
        "Two-Level Layout",
        "Floor-to-Ceiling Windows",
        "Sunset Lounge",
      ],
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Header Dramatis dengan Fade ke Putih & Parallax */}
      <header className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=1600&auto=format&fit=crop')",
            backgroundAttachment: "fixed", // Efek Parallax
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2537]/60 via-[#0f2537]/30 to-transparent"></div>
        </div>

        {/* Konten Teks */}
        <div className="relative z-10 text-white px-6 mt-16">
          <span className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#c8a97e]"></span>
            <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#c8a97e] drop-shadow-md">
              Our Residences
            </p>
            <span className="w-8 h-[1px] bg-[#c8a97e]"></span>
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">
            Suites & Villas
          </h1>
        </div>
      </header>

      {/* Grid Katalog Pro Version */}
      <section className="max-w-7xl mx-auto px-6 pb-32 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {suites.map((suite, index) => (
            <div
              key={suite.id}
              className={`group cursor-pointer flex flex-col ${
                index === 2
                  ? "md:col-span-2 md:flex-row md:items-center md:gap-16"
                  : ""
              }`}
            >
              {/* Image Container with Luxury Overlay */}
              <div
                className={`relative overflow-hidden mb-8 ${index === 2 ? "md:mb-0 md:w-3/5" : ""}`}
              >
                <div className="absolute inset-0 bg-[#0f2537]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={suite.image}
                  alt={suite.name}
                  className={`w-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                    index === 2 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                />
                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <button className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-3 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-white hover:text-[#0f2537] transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content Container */}
              <div
                className={`flex flex-col flex-grow ${index === 2 ? "md:w-2/5" : ""}`}
              >
                <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-6">
                  <div>
                    <h2 className="font-serif text-3xl text-[#0f2537] mb-2 group-hover:text-[#c8a97e] transition-colors duration-300">
                      {suite.name}
                    </h2>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#0f2537]/40 font-bold">
                      Starting from
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-xl text-[#0f2537]">
                      {suite.price}
                    </p>
                    <p className="text-[9px] text-[#0f2537]/40 uppercase tracking-widest mt-1">
                      Per Night
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {suite.features.map((f, i) => (
                    <li
                      key={i}
                      className="text-[10px] uppercase tracking-[0.2em] text-[#0f2537]/60 font-semibold flex items-center"
                    >
                      {/* Diamond Accent */}
                      <span className="w-1.5 h-1.5 border border-[#c8a97e] rotate-45 mr-5 flex-shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
