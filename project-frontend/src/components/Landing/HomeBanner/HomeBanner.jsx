import React from 'react';
import classes from "../../Landing/Landing.module.scss";
import { Button, Grid } from '@mui/material';
import profileimg from '/assets/drpragnesh.png';

// --- SVG Icon Components ---
// Using inline SVGs to keep everything in one file.

const ToothIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C9.25 2 7 4.25 7 7C7 8.86 8.01 10.51 9.5 11.44V14H8C7.45 14 7 14.45 7 15V16H17V15C17 14.45 16.55 14 16 14H14.5V11.44C15.99 10.51 17 8.86 17 7C17 4.25 14.75 2 12 2ZM12.5 16.5C12.5 16.78 12.28 17 12 17C11.72 17 11.5 16.78 11.5 16.5V16H12.5V16.5ZM14.5 15V16.5C14.5 17.9 13.38 19 12 19C10.62 19 9.5 17.9 9.5 16.5V15H14.5ZM10 10.1C10.04 10.07 10.07 10.04 10.1 10H13.9C13.93 10.04 13.96 10.07 14 10.1C14.53 9.5 15 8.78 15 8C15 5.54 13.5 4 12 4C10.5 4 9 5.54 9 8C9 8.78 9.47 9.5 10 10.1Z" />
  </svg>
);

const CrownIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 16L3 5H21L19 16H5M19 3H5C3.9 3 3 3.9 3 5L5 16C5 17.1 5.9 18 7 18H17C18.1 18 19 17.1 19 16L21 5C21 3.9 20.1 3 19 3M12 10.5C11.17 10.5 10.5 11.17 10.5 12C10.5 12.83 11.17 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5M7.5 9C6.67 9 6 9.67 6 10.5C6 11.33 6.67 12 7.5 12C8.33 12 9 11.33 9 10.5C9 9.67 8.33 9 7.5 9M16.5 9C15.67 9 15 9.67 15 10.5C15 11.33 15.67 12 16.5 12C17.33 12 18 11.33 18 10.5C18 9.67 17.33 9 16.5 9Z" />
  </svg>
);

const BracesIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 11V13H20V11H4M6 12C6 10.9 6.9 10 8 10H9C10.1 10 11 10.9 11 12C11 13.1 10.1 14 9 14H8C6.9 14 6 13.1 6 12M13 12C13 10.9 13.9 10 15 10H16C17.1 10 18 10.9 18 12C18 13.1 17.1 14 16 14H15C13.9 14 13 13.1 13 12M8 12H9M15 12H16M3 5V19H21V5H3M19 17H5V7H19V17Z" />
  </svg>
);

const LaserIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 4C5 3.45 5.45 3 6 3H10C10.55 3 11 3.45 11 4V5H5V4M5 7H11V6H5V7M12 9L15.5 12L12 15V13H5V11H12V9M20 5V4C20 3.45 19.55 3 19 3H15C14.45 3 14 3.45 14 4V5H20M20 7H14V6H20V7M12 19V17H20V19H12Z" />
  </svg>
);

const BuildingIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11V5H10V11H16M16 3H10C8.9 3 8 3.9 8 5V11C8 12.1 8.9 13 10 13H16C17.1 13 18 12.1 18 11V5C18 3.9 17.1 3 16 3M6 13H2V21H6V13M6 11H2C0.9 11 0 11.9 0 13V21C0 22.1 0.9 23 2 23H6C7.1 23 8 22.1 8 21V13C8 11.9 7.1 11 6 11M22 13H18V21H22V13M22 11H18C16.9 11 16 11.9 16 13V21C16 22.1 16.9 23 18 23H22C23.1 23 24 22.1 24 21V13C24 11.9 23.1 11 22 11Z" />
  </svg>
);


// --- Hero Section Component ---

const HomeBanner = () => {
  const services = [
    { name: 'Implants & Root Canals', icon: <ToothIcon className="w-6 h-6 text-[#88B121]" /> },
    { name: 'Aligners & Braces', icon: <BracesIcon className="w-6 h-6 text-[#88B121]" /> },
    { name: 'Crown & Bridges', icon: <CrownIcon className="w-6 h-6 text-[#88B121]" /> },
    { name: 'Lasers & Veneers', icon: <LaserIcon className="w-6 h-6 text-[#88B121]" /> },
  ];

  return (
    <section className="bg-white font-['Inter',_sans-serif] py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* --- Left Column: Text Content --- */}
            <div className="lg:w-1/2 max-w-lg text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl  font-bold text-slate-800 leading-tight">
              Putting Your
              <span className=" block text-[#88B121]"><strong>Smile First</strong></span>
            </h1>
            <p className="mt-3 text-gray-600 text-lg">
              Trusted by <span className="font-bold text-gray-800">150000+ Patients</span>
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 max-w-sm">
              {services.map((service) => (
                <div key={service.name} className="flex items-center space-x-2">
                  <span className="flex items-center space-x-2">
                    {service.icon}
                  </span>
                  <span className="text-gray-700  text-sm font-medium">{service.name}</span>
                </div>
              ))}
            </div>

            <a
              href="/appointmentpage"
              className="mt-8 inline-block bg-[#88B121] text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-lg hover:bg-lime-600 transition-colors duration-300"
            >
              Book An Appointment
            </a>
          </div>

          {/* --- Right Column: Image & Badges --- */}
          <div className="lg:w-1/2 flex justify-center">
        <img
          src={profileimg}
          alt="Dentist"
          className="max-w-sm w-full h-auto rounded-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/500x600/E0E0E0/777777?text=Image+Not+Found";
          }}
        />
      </div>

              {/* 20 Years Badge */}
              {/* <div className="absolute  bottom-4 left-1/2 -translate-x-1/2 lg:left-0 lg:bottom-12 lg:-translate-x-1/4 w-auto">
                <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 flex items-center space-x-3">
                  <div className="flex-shrink-0 bg-lime-500 text-white p-2 sm:p-3 rounded-full">
                    <ToothIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-gray-800 font-bold text-base sm:text-lg whitespace-nowrap">
                    20 Years of Experience
                  </div>
                </div>
              </div> */}

              {/* 13 Branches Badge */}
              {/* <div className="absolute  top-1/2 -translate-y-1/2 right-0 lg:-right-4 w-auto">
                 <div className="bg-indigo-900 text-white rounded-xl shadow-xl p-3 sm:p-4 flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <BuildingIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg whitespace-nowrap">13 Braches</div>
                    <div className="text-sm sm:text-base whitespace-nowrap">4 Cities</div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>

    </section>
  );
};
export default HomeBanner;