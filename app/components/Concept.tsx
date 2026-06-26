import React from "react";

export default function Concept() {
  return (
    <section className="py-32 relative bg-white overflow-hidden">
      {/* Background Aksen Tipis */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f2f7f9] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          {/* Visual/Gambar (Kiri) - Mengambil 7 kolom */}
          <div className="lg:col-span-7 relative group">
            {/* Frame Dekoratif */}
            <div className="absolute -inset-4 border border-[#c8a97e]/40 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 -z-10"></div>

            <div className="overflow-hidden relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop"
                alt="Coastal Living at Sagara"
                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-0 right-0 bg-[#0f2537] text-white p-8 md:p-12 backdrop-blur-sm bg-[#0f2537]/90">
                <p className="font-serif text-5xl text-[#c8a97e] mb-2">15</p>
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/80 leading-relaxed">
                  Years of <br /> Coastal <br /> Hospitality
                </p>
              </div>
            </div>
          </div>

          {/* Narasi (Kanan) - Mengambil 5 kolom, tumpang tindih dengan gambar */}
          <div className="lg:col-span-5 lg:-ml-16 relative z-10 lg:mt-32">
            <div className="bg-white p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-[#c8a97e]"></span>
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#c8a97e]">
                  Our Essence
                </p>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-[#0f2537] mb-8 leading-[1.2]">
                Where the Tides <br /> Find You
              </h2>

              <div className="space-y-6 text-[#0f2537]/70 font-sans font-light text-sm md:text-base leading-relaxed mb-10">
                <p>
                  At Sagara, we believe that the rhythm of the ocean is the most
                  healing melody. Nestled on the sun-drenched cliffs, our resort
                  bridges the gap between sophisticated comfort and the wild,
                  untamed beauty of the Balinese coast.
                </p>
                <p>
                  From sunrise yoga on the terrace to sunset cocktails listening
                  to the crashing surf, every moment here is crafted to bring
                  you closer to the element of water.
                </p>
              </div>

              <button className="group relative inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-[#0f2537]">
                <span className="relative z-10 transition-colors group-hover:text-[#c8a97e]">
                  Read Our Story
                </span>
                <span className="w-12 h-[1px] bg-[#0f2537] transition-all duration-300 group-hover:w-16 group-hover:bg-[#c8a97e]"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
