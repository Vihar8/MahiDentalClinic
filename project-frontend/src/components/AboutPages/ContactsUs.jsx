import React from 'react'
import Grid from "@mui/material/Grid";
import classes from "./AboutPages.module.scss";
import bgBlueGrid from "/assets/bg-blue-grid1.svg";
import { Link } from 'react-router-dom';

const ContactsUs = () => {
  return (
    <>
      <div className={`${classes.solarProjects}`}>
        {/* Background Image */}
        <div className={`${classes.heroSection}`}>
          <img
            src={bgBlueGrid}
            alt="Background Grid"
            className={`${classes.bgImage}`}
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
            <Grid item xs={12} md={6}>
             <h3 className="text-3xl font-normal text-[#88b121] mb-4">
                Ready to talk? Get in touch.
              </h3>
              <p className="font-normal text-lg text-[#000000]">
                Whether you're a future customer, we want to hear from you.
              </p>
              <p className="font-normal text-lg text-[#000000]">
                Mahi Dental provides world-class treatment using advanced instruments, delivered by a skilled and experienced team, with many satisfied patients.
              </p>
              {/* <p className='mt-8'>
                <span className='text-[#88b121]'>Sector 7</span>, Block C, Gandhinagar, Gandhinagar Sector 7-382007
              </p> */}
                            <p className='mt-8 font-bold'>
                <span className='text-amber-900'>Sector 7</span>, Block C, Gandhinagar, Gandhinagar Sector 7-382007
              </p>
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
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="w-[350px] h-[350px] overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://res.cloudinary.com/dj7gzc2mb/image/upload/v1759592481/mahidentallocation_qg7coc.webp"
                width={350}
                height={350}
                alt="Company Location"
                className="w-full h-full object-cover"
              />
            </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ContactsUs;
