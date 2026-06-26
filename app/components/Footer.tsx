import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2537] text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Kolom 1: Logo & Tagline */}
        <div className="space-y-4">
          <Link
            href="/"
            className="font-serif text-3xl font-bold tracking-wider inline-block"
          >
            SAGARA<span className="text-[#c8a97e]">.</span>
          </Link>
          <p className="font-sans text-xs text-white/60 leading-relaxed max-w-[200px]">
            A coastal escape designed for those who find peace in the rhythm of
            the tide.
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c8a97e] mb-6">
            Explore
          </h4>
          <ul className="space-y-4 text-xs font-sans text-white/70">
            <li>
              <Link href="/villas" className="hover:text-[#c8a97e] transition">
                Suites & Villas
              </Link>
            </li>
            <li>
              <Link
                href="/experiences"
                className="hover:text-[#c8a97e] transition"
              >
                Ocean Experiences
              </Link>
            </li>
            <li>
              <Link href="/dining" className="hover:text-[#c8a97e] transition">
                Dining
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#c8a97e] transition">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c8a97e] mb-6">
            Connect
          </h4>
          <ul className="space-y-4 text-xs font-sans text-white/70">
            <li>Jl. Pantai Indah, Gianyar</li>
            <li>Bali, Indonesia</li>
            <li className="pt-2">
              <a
                href="mailto:hello@sagara.com"
                className="hover:text-[#c8a97e] transition"
              >
                hello@sagara.com
              </a>
            </li>
            <li>
              <a
                href="tel:+62361123456"
                className="hover:text-[#c8a97e] transition"
              >
                +62 361 123 456
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Newsletter */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c8a97e] mb-6">
            Updates
          </h4>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-transparent border-b border-white/20 py-2 text-xs focus:outline-none focus:border-[#c8a97e] transition-colors mb-4"
          />
          <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c8a97e] hover:text-white transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest">
          © 2026 Sagara Beachfront Resort.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/40">
          <Link href="/privacy" className="hover:text-[#c8a97e] transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[#c8a97e] transition">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
