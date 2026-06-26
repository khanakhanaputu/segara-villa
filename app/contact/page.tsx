import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <header className="pt-40 pb-20 px-6 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#c8a97e] mb-6">
          Inquiry
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-[#0f2537]">
          Connect With Us
        </h1>
      </header>

      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Informasi Kontak */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-xl text-[#0f2537] mb-4">
                The Sagara Sanctuary
              </h3>
              <p className="font-sans text-xs text-[#0f2537]/70 leading-relaxed">
                Jl. Pantai Indah, Gianyar
                <br />
                Bali, Indonesia 80571
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#0f2537] mb-4">
                Reservations
              </h3>
              <p className="font-sans text-xs text-[#0f2537]/70">
                discover@sagara.com
              </p>
              <p className="font-sans text-xs text-[#0f2537]/70">
                +62 361 123 456
              </p>
            </div>
          </div>

          {/* Form Booking */}
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#f2f7f9] p-3 text-xs outline-none focus:border border-[#c8a97e]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#f2f7f9] p-3 text-xs outline-none focus:border border-[#c8a97e]"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#f2f7f9] p-3 text-xs outline-none focus:border border-[#c8a97e]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full bg-[#f2f7f9] p-3 text-xs outline-none focus:border border-[#c8a97e] h-32"
            ></textarea>
            <button className="bg-[#0f2537] text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#c8a97e] transition">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
