import React from 'react'
import Grid from "@mui/material/Grid";
import classes from "./AboutPages.module.scss";
import { Link } from "react-router-dom";
import profileimg from '/assets/drpragnesh.png';
import profileimg1 from '/assets/homebanner_family.png';

const AboutUs = () => {
  return (
    <>
      {/* <main className="container mx-auto px-8 py-24"> */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24">
        {/* About Us Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
          {/* Heading Section */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-bold text-black mb-4">
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

        <section className="py-20">
          <div className="max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-8">
                {/* LEFT IMAGE */}
                <img
                  src={profileimg1}
                  alt="Clinic Team"
                  // className="w-full h-auto lg:h-[520px] object-cover rounded-[24px]"
                  className="w-full h-auto lg:h-[520px] object-cover rounded-[24px] rounded-tl-[100px]"
                />

                {/* 2+ EXPERT DOCTORS (moved here) */}
                <div className="bg-[#88B121] text-white rounded-2xl p-8 text-center">
                  <h3 className="text-5xl font-bold">2+</h3>
                  <p className="mt-2 text-lg">Expert Doctors</p>
                </div>
              </div>

              {/* MIDDLE COLUMN */}
              <div className="flex flex-col gap-8">
                {/* 10+ YEARS */}
                <div className="bg-[#88B121] text-white rounded-2xl p-8 text-center">
                  <h3 className="text-5xl font-bold">10+</h3>
                  <p className="mt-2 text-lg">Years Of Experience</p>
                </div>

                {/* TREATMENT IMAGE */}
                <img
                  src={profileimg1}
                  alt="Dental Treatment"
                  className="w-full h-auto lg:h-[520px] object-cover rounded-[24px] rounded-br-[100px]"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div>

                <h2 className="text-4xl font-bold text-[#000000] leading-tight mb-6">
                  Experience Care That Go
                  <br className="hidden sm:block" />
                  Beyond Your Teeth
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Mahi Dental & Medical Clinic in Gandhinagar offers modern dental care
                  with experienced dentists and a friendly team, providing gentle
                  treatments tailored to your needs.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our state-of-the-art clinic is equipped with advanced technology and
                  skilled professionals who ensure high-quality, patient-focused care
                  for every visit.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  From routine cleanings to complex procedures requiring critical care
                  support, our goal is to deliver a pain-free, safe, and personalized
                  dental experience.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default AboutUs


