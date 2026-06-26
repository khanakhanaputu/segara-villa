import React from "react";

export default function Experiences() {
  const activities = [
    {
      id: 1,
      title: "Private Surfing Lessons",
      description:
        "Catch the legendary Balinese waves with our expert instructors, tailored for both beginners and seasoned surfers.",
      image:
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Sunset Yacht Cruise",
      description:
        "Sail into the horizon as the sky turns into a canvas of amber and violet, accompanied by signature coastal cocktails.",
      image:
        "https://images.unsplash.com/photo-1569263979108-893cc9943208?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Coral Reef Snorkeling",
      description:
        "Discover the vibrant underwater world teeming with exotic marine life just a short boat ride from our private bay.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#c8a97e] mb-4">
            Unforgettable Moments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f2537]">
            Ocean Experiences
          </h2>
        </div>
        <button className="border border-[#0f2537] px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-[#0f2537] hover:bg-[#0f2537] hover:text-white transition duration-300">
          View All Activities
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((act) => (
          <div
            key={act.id}
            className="relative group overflow-hidden cursor-pointer"
          >
            <img
              src={act.image}
              alt={act.title}
              className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2537]/80 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-serif text-2xl text-white mb-2">
                {act.title}
              </h3>
              <p className="font-sans text-xs text-white/80 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition duration-500 transform translate-y-4 group-hover:translate-y-0">
                {act.description}
              </p>
              <div className="w-12 h-[2px] bg-[#c8a97e] mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
