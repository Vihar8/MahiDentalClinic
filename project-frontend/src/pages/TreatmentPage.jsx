import React from "react";
import { useParams } from "react-router-dom";
import treatmentsData from "./treatmentsData";

const TreatmentPage = () => {
  const { id } = useParams();
  const treatment = treatmentsData.find((t) => t.id === id);

  if (!treatment) return <h2 className="text-center text-xl mt-10">Treatment not found</h2>;

  return (
    <div className="treatment-page">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <img
          src={treatment.image}
          alt={treatment.name}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{treatment.name}</h1>
          <p className="max-w-2xl text-lg">{treatment.description}</p>
          <button className="mt-6 px-6 py-3 rounded-full bg-white text-blue-900 hover:bg-blue-900 hover:text-white font-semibold transition-colors duration-300 ease-in-out">
            Book an Appointment
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 space-y-16">
        {treatment.subTreatments &&
          treatment.subTreatments.map((sub, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              {/* Image */}
              <div className="flex-1">
                <img
                  src={sub.image}
                  alt={sub.title}
                  className="w-full rounded-lg shadow-lg object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h2 className="text-[#88b121] font-bold text-xl mb-4 uppercase">
                  {sub.title}
                </h2>
                <p className="text-black leading-relaxed">{sub.description}</p>
                <button className="mt-6 px-6 py-2 bg-blue-900 text-white rounded-full">
                  Book an appointment
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TreatmentPage;
