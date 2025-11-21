import React from 'react'
import Grid from "@mui/material/Grid";
import classes from "./AboutPages.module.scss";
import bgBlueGrid from "/assets/bg-blue-grid1.svg";

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
            <h2 className={`${classes.heading}`}>
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
            </Grid>

           
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ContactsUs;
