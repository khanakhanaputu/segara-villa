import React from "react";

export default function FeaturedSuites() {
  const suites = [
    {
      id: 1,
      name: "Horizon Ocean Villa",
      description:
        "Perched on the cliff edge with an unobstructed 180-degree view of the Indian Ocean. Features a private infinity pool that merges with the horizon.",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop",
      price: "Rp 8.500.000",
    },
    {
      id: 2,
      name: "Sandbank Suite",
      description:
        "Direct beach access with a private terrace. Wake up to the sound of gentle waves and enjoy a breakfast on your personal stretch of sand.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop",
      price: "Rp 6.200.000",
    },
    {
      id: 3,
      name: "Coastal Loft",
      description:
        "A two-level sanctuary featuring floor-to-ceiling windows, perfect for watching the golden hour from the comfort of your plush king bed.",
      image:
        "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=800&auto=format&fit=crop",
      price: "Rp 5.500.000",
    },
  ];

  return (
    <section className="py-24 bg-[#f2f7f9]/30 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#c8a97e] mb-4">
            Our Residences
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f2537]">
            Coastal Sanctuaries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suites.map((suite) => (
            <div
              key={suite.id}
              className="group bg-white p-2 shadow-lg transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="w-full h-80 object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-4 pb-6">
                <h3 className="font-serif text-xl text-[#0f2537] mb-3">
                  {suite.name}
                </h3>
                <p className="font-sans text-xs text-[#0f2537]/70 leading-relaxed mb-6 h-12">
                  {suite.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-[#0f2537]/10">
                  <span className="font-bold text-[#0f2537] text-sm">
                    {suite.price}
                  </span>
                  <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c8a97e] hover:text-[#0f2537] transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
