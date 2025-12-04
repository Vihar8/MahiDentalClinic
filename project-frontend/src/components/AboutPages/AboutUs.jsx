import React from 'react'
import Grid from "@mui/material/Grid";
import classes from "./AboutPages.module.scss";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
          <main className="container mx-auto px-8 py-12">
        {/* About Us Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
          {/* Heading Section */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold text-black mb-4">
              About Us
            </h1>
            <div className="mx-auto md:mx-0 w-16 h-1 bg-[#88b121] mb-8" />
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Welcome to Mahi Dental Clinic, where your smile and dental health are our top priorities. Our mission is to deliver high-quality, compassionate dental care in a warm, friendly, and safe environment. With a commitment to using modern techniques and state-of-the-art equipment, we ensure every patient receives personalized treatment suited to their needs.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
             We understand that dental implant treatment procedures are big investment both emotionally and financially but it is worth a treatment. With our focus and experience we meet our patient’s expectations in terms of aesthetics & longevity. Welcome to Mahi Dental Clinic, where your smile and dental health are our top priorities. Our mission is to deliver high-quality, compassionate dental care in a warm, friendly, and safe environment. With a commitment to using modern techniques and state-of-the-art equipment, we ensure every patient receives personalized treatment suited to their needs.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[350px] h-[350px] overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://res.cloudinary.com/dj7gzc2mb/image/upload/v1759592481/mahidentallocation_qg7coc.webp"
                width={350}
                height={350}
                alt="Company Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default AboutUs


