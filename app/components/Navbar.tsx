"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mencegah scroll saat mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-4"
          : "bg-gradient-to-b from-[#0f2537]/80 to-transparent py-8"
      }`}
    >
      <div className="px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link
          href="/"
          className={`font-serif text-3xl font-bold tracking-widest z-50 relative transition-colors duration-500 ${
            isScrolled || isMobileMenuOpen ? "text-[#0f2537]" : "text-white"
          }`}
        >
          SAGARA<span className="text-[#c8a97e]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden lg:flex space-x-12 text-[11px] font-semibold tracking-[0.25em] uppercase transition-colors duration-500 ${
            isScrolled ? "text-[#0f2537]" : "text-white"
          }`}
        >
          {["Villas", "Experiences", "Dining", "Gallery"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group py-2"
            >
              <span className="group-hover:text-[#c8a97e] transition-colors duration-300">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c8a97e] transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={`px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-500 rounded-sm ${
              isScrolled
                ? "bg-[#0f2537] text-white hover:bg-[#c8a97e] shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                : "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-[#0f2537]"
            }`}
          >
            Book Stay
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
          className={`lg:hidden z-50 relative p-2 focus:outline-none transition-colors duration-500 ${
            isScrolled || isMobileMenuOpen ? "text-[#0f2537]" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center">
            <span
              className={`block h-[2px] w-full bg-current transform transition duration-500 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
            />
            <span
              className={`block h-[2px] w-full bg-current transition duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-full bg-current transform transition duration-500 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-10 h-screen transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {["Home", "Villas", "Experiences", "Dining", "Gallery"].map((item) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-3xl text-[#0f2537] hover:text-[#c8a97e] transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-[#0f2537] text-white px-12 py-4 text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#c8a97e] transition duration-300 mt-8 rounded-sm"
        >
          Book Your Stay
        </Link>
      </div>
    </nav>
  );
}
