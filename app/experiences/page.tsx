import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ExperiencesPage() {
  const experiences = [
    {
      title: "Private Surfing Lessons",
      desc: "Master the waves of the Indian Ocean with our dedicated instructors. Whether you are a beginner looking for your first pop-up or an experienced surfer seeking the perfect break, our private sessions are tailored to your skill level.",
      image:
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&auto=format&fit=crop",
    },
    {
      title: "Sunset Yacht Cruise",
      desc: "As the sun dips below the horizon, retreat to our private yacht. Enjoy bespoke cocktails and gourmet canapés while the sky transforms into a canvas of gold, violet, and deep crimson.",
      image:
        "https://images.unsplash.com/photo-1569263979108-893cc9943208?w=1600&auto=format&fit=crop",
    },
    {
      title: "Coral Reef Snorkeling",
      desc: "Plunge into a world of vibrant color. Our guided snorkeling tours take you to protected marine sanctuaries teeming with exotic fish and flourishing coral gardens just minutes from our shore.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&auto=format&fit=crop",
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
              "url('https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Gambar ombak/laut yang dramatis
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2537]/70 via-[#0f2537]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-white px-6 mt-16">
          <span className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#c8a97e]"></span>
            <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#c8a97e] drop-shadow-md">
              Discovery
            </p>
            <span className="w-8 h-[1px] bg-[#c8a97e]"></span>
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">
            Ocean Experiences
          </h1>
        </div>
      </header>

      {/* Pro Section: Editorial Overlapping Layout */}
      <section className="px-6 pb-32 max-w-7xl mx-auto space-y-32 -mt-10 relative z-20">
        {experiences.map((exp, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex flex-col lg:flex-row items-center ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Gambar (Lebar 60%) */}
              <div className="w-full lg:w-3/5 relative group overflow-hidden shadow-2xl">
                <div className="absolute inset-0 border border-white/20 z-10 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"></div>
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Box Teks (Lebar 40%, tumpang tindih dengan gambar) */}
              <div
                className={`w-full lg:w-2/5 bg-white p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(15,37,55,0.08)] relative z-10 mt-8 lg:mt-32 ${
                  isEven ? "lg:-ml-24" : "lg:-mr-24"
                }`}
              >
                {/* Nomor Urut Belakang */}
                <span className="absolute top-4 right-8 font-serif text-8xl text-[#f2f7f9] -z-10 select-none">
                  0{i + 1}
                </span>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 border border-[#c8a97e] rotate-45"></span>
                    <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#c8a97e]">
                      Activity {i + 1}
                    </p>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl text-[#0f2537] leading-[1.2]">
                    {exp.title}
                  </h2>

                  <p className="font-sans text-sm text-[#0f2537]/70 leading-relaxed">
                    {exp.desc}
                  </p>

                  <div className="pt-4">
                    <button className="group relative inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-[#0f2537]">
                      <span className="relative z-10 transition-colors group-hover:text-[#c8a97e]">
                        Inquire About This
                      </span>
                      <span className="w-12 h-[1px] bg-[#0f2537] transition-all duration-300 group-hover:w-16 group-hover:bg-[#c8a97e]"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
