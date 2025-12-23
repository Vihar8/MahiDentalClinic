import React, { useState } from "react";

const faqs = [
  {
    question: "Are dental treatments painful?",
    answer:
      "Most procedures are painless due to advanced anesthesia and modern techniques. Mild post-treatment discomfort is normal and temporary.",
  },
  {
    question: "What if I’m scared of dental treatment?",
    answer:
      "We offer pain-free techniques, gentle care, and sedation options to help anxious patients relax.",
  },
  {
    question: "How long does teeth whitening last?",
    answer:
      "Results vary. With good oral hygiene, results last 6–18 months. Avoid smoking and staining foods for best results.",
  },
  {
    question: "Are veneers permanent?",
    answer:
      "Veneers are long-lasting solutions (10–15 years). They may need replacement over time due to wear or damage.",
  },
  {
    question: "How long do braces or aligners take?",
    answer:
      "Typical treatment lasts 12–24 months, depending on case complexity and patient compliance.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  return (
    <section className="bg-[#88B121] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="inline-block bg-[#e6f1fb] text-[#88b121] text-md font-bold px-4 py-2 rounded-full mb-1 shadow">
          FAQ
        </div>
        <h2 className="text-3xl text-[#833100] font-bold text-center">
          Got Questions?
        </h2>
        <p className="text-white text-xl text-center">
          We’ve got answers to your most common Dental concerns.
        </p>

        <div className="mt-10 w-full space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : idx)
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-1.5 h-8 rounded-r-full ${
                        isOpen ? "bg-[#833100]" : "bg-transparent"
                      }`}
                    />
                    <div>
                      <h3 className="text-base font-semibold">
                        {f.question}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-gray-600">
                      {f.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 bg-[#ffff] relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffff] to-[#ffff]/90 opacity-95" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 py-16 px-6 md:px-12 relative">
          <div className="flex-1 text-center lg:text-left text-brown ">
            <div className="text-4xl font-bold leading-tight text-[#833100] ">
              Ready For A Cleaner, <br /> Happier Teeth?
            </div>
            <p className="mt-2 text-base max-w-md mx-auto lg:mx-0">
              Book today and discover why families trust Mahi Dental Clinic for spotless teeth.
            </p>
            <div className="mt-6">
               <a
              href="/appointmentpage"
              className="mt-10 inline-block bg-[#88B121] text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-lg hover:bg-lime-600 transition-colors duration-300"
            >
              Book An Appointment
            </a>
            </div>
          </div>
       <div className="flex-1 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
  <div className="w-48 sm:w-40 md:w-56 lg:w-64  aspect-square rounded-2xl overflow-hidden mx-auto">
    <img
      src="https://res.cloudinary.com/dflcuzluo/image/upload/v1766382430/vc3_zojnk2.png"
      alt="Cleaner left"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="w-48 sm:w-40 md:w-56 lg:w-64 aspect-square rounded-2xl overflow-hidden">
    <img
      src="https://www.finefeather.in/wp-content/uploads/2022/11/Screening-Test.jpg"
      alt="Cleaner right"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
