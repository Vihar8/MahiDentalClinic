import React from "react";
import classes from "../../Landing/Landing.module.scss";
export default function SmartSolar() {
  const plans = [
    { img: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1765448031/07-1-740x740_ffr4xz.jpg" },
    { img: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1765448030/05-740x740_bgtnj8.jpg" },
    { img: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1765462177/InShot_20251211_153907460_ctoixy.jpg" },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-4">
        {plans.map((p, i) => (
            <img src={p.img} className="mt-4 w-full h-70 object-contain rounded-xl" />
        ))}
      </div>
    </>
  );
}
