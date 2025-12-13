import React from "react";
import classes from "../../Landing/Landing.module.scss";
import profileimg from '/assets/homebanner_family.png';

export default function DigitalSolar() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">

        <img src={profileimg} className="rounded-lg shadow-lg" />

        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            A Family Dental Clinic
          </h2>

          <p className="mt-4 text-gray-600">
            At Mahi Dental Clinic, we care for every generation—kids, parents, and grandparents—so your whole family can enjoy confident, bright, and pain-free smiles. From gentle checkups to advanced dental care, we make every visit comfortable, caring, and trustworthy. Because a happy family starts with healthy smiles!
          </p>

          <div className="grid grid-cols-3 mt-6 gap-4 text-center">
            <div><h3 className="text-2xl text-[#88B121] font-bold">518</h3><p className="text-xl font-bold">Implants</p></div>
            <div><h3 className="text-2xl text-[#88B121] font-bold">314</h3><p className="text-xl font-bold">Invisible Braces</p></div>
            <div><h3 className="text-2xl text-[#88B121] font-bold">465</h3><p className="text-xl font-bold">Dental Veneers</p></div>
          </div>
        </div>

      </div>
    </section>
  );
}
