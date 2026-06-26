import React from "react";

export default function Features() {
  const items = [
    {
      title: "Sunset Horizon",
      desc: "Unobstructed views of Bali's golden sunset.",
    },
    {
      title: "Private Beach",
      desc: "Exclusive access to crystal clear waters.",
    },
    { title: "Gourmet Ocean", desc: "Fresh catch prepared by master chefs." },
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {items.map((item, i) => (
          <div key={i} className="space-y-4">
            <div className="w-12 h-12 border border-[#c8a97e] mx-auto flex items-center justify-center text-[#c8a97e]">
              {/* Bisa diganti icon library seperti lucide-react */}
              <span className="font-serif text-lg">◈</span>
            </div>
            <h3 className="font-serif text-lg text-[#0f2537]">{item.title}</h3>
            <p className="text-xs text-[#0f2537]/60">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
