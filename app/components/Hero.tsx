import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center">
      {/* Background Image - Pantai/Lautan Tropis */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')",
        }}
      >
        {/* Overlay gradient: Gelap di atas untuk Navbar, memudar ke putih di bawah untuk transisi mulus */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2537]/80 via-[#0f2537]/60 to-white"></div>
      </div>

      <div className="relative z-10 text-white px-6 mt-12 md:mt-20">
        <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 text-[#c8a97e] font-bold drop-shadow-md">
          Where the Ocean Meets the Sky
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 font-bold drop-shadow-lg max-w-4xl mx-auto leading-tight">
          Breathe in the <span className="italic text-white/90">Blue</span>
        </h1>
        <p className="font-sans font-light text-sm md:text-base max-w-xl mx-auto text-white/90 drop-shadow-md leading-relaxed">
          Escape to Sagara, a modern coastal sanctuary designed for those who
          seek the sun, the gentle sea breeze, and the soothing rhythm of the
          waves.
        </p>

        <div className="mt-10 animate-fade-in-up">
          <button className="bg-[#c8a97e] text-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-[#0f2537] transition duration-300 rounded-sm shadow-xl">
            Discover Sagara
          </button>
        </div>
      </div>
    </section>
  );
}
