import React from "react";

export default function BookingBar() {
  return (
    <section className="relative z-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="bg-white shadow-[0_30px_60px_rgba(15,37,55,0.08)] border border-gray-100 p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Headline Singkat */}
        <div className="lg:w-1/4 text-center lg:text-left">
          <h3 className="font-serif text-2xl text-[#0f2537]">
            Reserve Your Stay
          </h3>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#c8a97e] font-bold mt-2">
            Best Rate Guarantee
          </p>
        </div>

        {/* Input Fields */}
        <div className="lg:w-2/4 flex flex-col md:flex-row gap-8 w-full">
          <div className="relative w-full group">
            <label className="absolute -top-3 left-0 text-[9px] uppercase tracking-[0.2em] font-bold text-[#0f2537]/40 transition-colors group-focus-within:text-[#c8a97e]">
              Check-in
            </label>
            <input
              type="date"
              className="w-full bg-transparent border-b border-gray-200 py-3 text-sm text-[#0f2537] outline-none transition-colors focus:border-[#c8a97e] cursor-pointer"
            />
          </div>

          <div className="relative w-full group">
            <label className="absolute -top-3 left-0 text-[9px] uppercase tracking-[0.2em] font-bold text-[#0f2537]/40 transition-colors group-focus-within:text-[#c8a97e]">
              Check-out
            </label>
            <input
              type="date"
              className="w-full bg-transparent border-b border-gray-200 py-3 text-sm text-[#0f2537] outline-none transition-colors focus:border-[#c8a97e] cursor-pointer"
            />
          </div>

          <div className="relative w-full md:w-1/2 group">
            <label className="absolute -top-3 left-0 text-[9px] uppercase tracking-[0.2em] font-bold text-[#0f2537]/40 transition-colors group-focus-within:text-[#c8a97e]">
              Guests
            </label>
            <select className="w-full bg-transparent border-b border-gray-200 py-3 text-sm text-[#0f2537] outline-none transition-colors focus:border-[#c8a97e] cursor-pointer appearance-none">
              <option>2 Adults, 0 Children</option>
              <option>2 Adults, 1 Child</option>
              <option>1 Adult, 0 Children</option>
            </select>
          </div>
        </div>

        {/* CTA Button */}
        <div className="lg:w-1/4 w-full">
          <button className="w-full bg-[#0f2537] text-white py-4 px-6 text-[10px] uppercase font-bold tracking-[0.25em] transition-all duration-300 hover:bg-[#c8a97e] hover:shadow-lg hover:-translate-y-1 rounded-sm">
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
}
