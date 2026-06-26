import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GalleryPage() {
  // Menggunakan array object untuk mendefinisikan layout asimetris yang spesifik
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-2",
      height: "h-[400px] md:h-[840px]",
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      height: "h-[400px]",
    },
    {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      height: "h-[400px]",
    },
    {
      src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      height: "h-[400px]",
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-1",
      height: "h-[400px]",
    },
    {
      src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1600&auto=format&fit=crop",
      span: "md:col-span-3 md:row-span-1",
      height: "h-[400px] md:h-[600px]",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Pro Header: Parallax & Fade */}
      <header className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=1600&auto=format&fit=crop')", // Gambar pantai estetis
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2537]/60 via-[#0f2537]/30 to-transparent"></div>
        </div>

        <div className="relative z-10 text-white px-6 mt-16">
          <span className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#c8a97e]"></span>
            <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#c8a97e] drop-shadow-md">
              Visual Journey
            </p>
            <span className="w-8 h-[1px] bg-[#c8a97e]"></span>
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">
            The Sagara Gallery
          </h1>
        </div>
      </header>

      {/* Pro Section: Curated Asymmetric Grid */}
      <section className="px-6 pb-32 max-w-7xl mx-auto -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden bg-[#f2f7f9] cursor-pointer ${item.span}`}
            >
              {/* Gambar dengan efek zoom */}
              <img
                src={item.src}
                alt={`Sagara Gallery ${i + 1}`}
                className={`w-full ${item.height} object-cover transition-transform duration-1000 group-hover:scale-105`}
              />

              {/* Luxury Hover Overlay */}
              <div className="absolute inset-0 bg-[#0f2537]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className="font-serif text-2xl font-light mb-1">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
