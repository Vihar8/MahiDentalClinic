import React, { useState } from "react";

const Gallery = () => {
  const categories = ["All", "Facility", "Technology", "Dentistry"];

  const images = [
    { src: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1759592601/unnamed_e3p2oh.jpg", category: "Technology" },
    { src: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1759592601/unnamed_4_m0rfyq.webp", category: "Technology" },
    { src: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1759592601/unnamed_2_xvwmfj.webp", category: "Dentistry" },
    { src: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1759592598/unnamed_5_kqkfjx.webp", category: "Facility" },
    { src: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1759592603/unnamed_3_m1m6hf.webp", category: "Dentistry" },
    { src: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1759592604/unnamed_1_l0creu.webp", category: "Dentistry" },
    { src: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1759592605/unnamed_wod6fd.webp", category: "Facility" }
  ];

  const [active, setActive] = useState("All");

  const filteredImages =
    active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Filter Buttons */}
      <div className="flex space-x-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              active === cat
                ? "bg-[#88b121] text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredImages.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-md shadow-sm">
            <img
              src={img.src}
              alt={img.category}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
