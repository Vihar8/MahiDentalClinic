import React from "react";
import classes from "../../Landing/Landing.module.scss";

// function DigitalSolar() {
//   return (
//     <>
//     <p>section 3</p>
//     </>
//   );
// }

// export default DigitalSolar;

export default function DigitalSolar() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">

        <img src="https://www.finefeather.in/wp-content/uploads/2023/07/about-family-image.webp" className="rounded-lg shadow-lg" />

        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            A Family Dental Clinic
          </h2>

          <p className="mt-4 text-gray-600">
            FineFeather Dental is a chain of family dental clinics with over...
          </p>

          <div className="grid grid-cols-3 mt-6 gap-4 text-center">
            <div><h3 className="text-2xl font-bold">5128</h3><p>Implants</p></div>
            <div><h3 className="text-2xl font-bold">6314</h3><p>Invisible Braces</p></div>
            <div><h3 className="text-2xl font-bold">1465</h3><p>Dental Veneers</p></div>
          </div>
        </div>

      </div>
    </section>
  );
}
