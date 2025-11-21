// import React from "react";
// import classes from "../../Landing/Landing.module.scss";

// function SmartSolar() {
//     return (
//    <>
//     <p>section 2</p>
//    </>
//     );
//   }
  
//   export default SmartSolar;

import React from "react";
import classes from "../../Landing/Landing.module.scss";
export default function SmartSolar() {
  const plans = [
    { img: "https://www.finefeather.in/wp-content/uploads/2024/06/04-740x740.jpg" },
    { img: "https://www.finefeather.in/wp-content/uploads/2024/06/05-740x740.jpg" },
    { img: "https://www.finefeather.in/wp-content/uploads/2024/06/07-1-740x740.jpg" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <div key={i} className="bg-[#88B121] text-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold">{p.title}</h2>
            <p className="text-lg mt-2">{p.price}</p>
            <img src={p.img} className="mt-4 w-full h-70 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
