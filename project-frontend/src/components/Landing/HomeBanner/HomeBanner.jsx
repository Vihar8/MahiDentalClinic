import React from 'react'
import SolarImg from '/assets/home_img/home_banner.png';
import charger from '/assets/home_img/charger.svg';
import classes from "../../Landing/Landing.module.scss";
import { Button, Grid } from '@mui/material';

const HomeBanner = ({doctorImage}) => {
  return (

   <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Left Side */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Putting Your <span className="text-green-600">Smile First</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Trusted by <span className="font-bold">150000+ Patients</span>
        </p>

        {/* Services */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-6 text-gray-800">
          <div className="flex items-center space-x-2">
            <img src="https://img.icons8.com/ios-filled/24/4CAF50/tooth.png" alt="tooth"/>
            <span>Implants & Root Canals</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://img.icons8.com/ios-filled/24/4CAF50/teeth.png" alt="braces"/>
            <span>Aligners & Braces</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://img.icons8.com/ios-filled/24/4CAF50/tooth-crown.png" alt="crown"/>
            <span>Crown & Bridges</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://img.icons8.com/ios-filled/24/4CAF50/laser-beam.png" alt="laser"/>
            <span>Lasers & Veneers</span>
          </div>
        </div>

        {/* Appointment Button */}
        <button className="mt-8 px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition">
          BOOK AN APPOINTMENT
        </button>
      </div>

      {/* Right Side Image */}
      <div className="relative mt-12 md:mt-0">
        <img
          src={doctorImage}
          alt="Doctor"
          className="w-80 h-80 object-cover rounded-full shadow-lg"
        />

        {/* Experience Badge */}
        <div className="absolute -bottom-6 left-6 bg-white border-2 border-green-600 text-green-700 font-semibold px-5 py-3 rounded-xl shadow-lg">
          20 Years of Experience
        </div>

        {/* Branches Badge */}
        <div className="absolute top-6 -right-12 bg-indigo-900 text-white font-semibold px-6 py-4 rounded-xl shadow-lg text-sm">
          13 Branches <br /> 4 Cities
        </div>
      </div>
    </div>
  )
}

export default HomeBanner