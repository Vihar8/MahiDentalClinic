import React from 'react'
import Grid from "@mui/material/Grid";
import classes from "./AboutPages.module.scss";
import bgBlueGrid from "/assets/contactus.jpg";
import { Link } from 'react-router-dom';

const ContactsUs = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.069482978868!2d72.63230102347873!3d23.215146966021766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b00151a49ff%3A0xc343d7b4637aaafa!2sMahi%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1765603361423!5m2!1sen!2sin";
  return (
    <>
      <div className={`${classes.solarProjects}`}>
        {/* Background Image */}
        <div className={`${classes.heroSection}`}>
          <img
            src={bgBlueGrid}
            alt="Background Grid"
            className={`${classes.bgImagee}`}
          />
          <div className={`${classes.textContainer}`}>
            <h2 className={`${classes.headinga}`}>
              Get in Touch with Mahi Dental Clinic
            </h2>
            <p className={`${classes.description}`}>
              Looking for a reliable Dentist in Gandhinagar? Look no further than Mahi Dental Clinic, your premier destination for top-quality dental care in Gandhinagar. Our clinic offers a comprehensive range of services to meet all your oral health needs, provided by experienced professionals in a comfortable and welcoming environment.
            </p>
          </div>
        </div>
        <div className='m-5'>
          <Grid container spacing={4}>
            <section className="w-full bg-white">
              <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* LEFT CONTENT */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-4xl font-light text-[#7FB800] mb-4">
                    Ready to talk? Get in touch.
                  </h2>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Whether you're a future customer, we want to hear from you.
                    <br />
                    Mahi Dental provides world-class treatment using advanced instruments,
                    delivered by a skilled and experienced team, with many satisfied patients.
                  </p>

                  <p className='mt-8 font-bold'>
                <span className='text-amber-900'>Sector 7</span>, Block C, Gandhinagar, Gandhinagar-Gujarat 382007
              </p>

                  {/* CONTACT DETAILS */}
                  <div className="space-y-4 text-gray-800">
                    <p className={`${classes.emailText} contactWrapper`}>
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 3.383-6.447 3.868a1 1 0 0 1-1.106 0L1 6.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6.383z" />
                        </svg>

                      </span>
                      <Link to="mailto:info@mahidental.in">info@mahidental.in</Link>
                    </p>


                    <p className={`${classes.emailText} contactWrapper`}>
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.654 1.328a.678.678 0 0 1 .58-.325h2.59c.24 0 .463.112.601.294l1.789 2.387a.678.678 0 0 1-.081.903L6.342 7.37a.678.678 0 0 0-.144.746c.297.73.698 1.411 1.287 2 .59.588 1.271.989 2 .287a.678.678 0 0 0 .746-.144l2.06-2.062a.678.678 0 0 1 .903-.081l2.386 1.79c.182.138.294.36.294.6v2.59a.678.678 0 0 1-.325.58c-1.062.655-3.01 1.293-5.46.39-2.444-.9-5.348-3.805-6.248-6.249-.902-2.45-.263-4.398.392-5.46z" />
                        </svg>
                      </span>
                      <Link to="tel:+919978914926">+91 9978914926</Link>
                    </p>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="lg:w-1/2 flex justify-center">
                  <img
                    src="https://res.cloudinary.com/dj7gzc2mb/image/upload/v1759592481/mahidentallocation_qg7coc.webp"// replace with your image path
                    alt="Mahi Dental Clinic"
                    className="w-[420px] h-auto rounded-2xl shadow-xl object-cover"
                  />
                </div>

              </div>
            </section>
          </Grid>
          <div className="flex items-center justify-center gap-2 mt-4">
            <img
              src="/assets/mahi_dental_logo.jpg"
              alt="Company Logo"
              className="w-16 h-16 object-cover"
            />
            <h3 className="text-lg font-normal text-black">
              Our Hospital
            </h3>
          </div>

          <Grid item xs={12}>
            <h3 className="text-3xl font-semibold text-center text-[#213555] mb-6">
              Location
            </h3>

            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl h-[350px] overflow-hidden rounded-xl shadow-lg border border-gray-200">
                <iframe
                  src={mapEmbedUrl}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mahi Dental Clinic Location on Google Maps"
                ></iframe>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ContactsUs;
