import React from "react";
import classes from "./Footer.module.scss";
import Container from "../../commoncomponents/Container/Container";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import { Grid } from "@mui/material";
import footerlogo from "/assets/mahi_dental_logo.jpg";
import emailIcon from "/assets/icons/emailIcon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <div className={`${classes.footerbg}`}>
        <Container>
          <Grid
            container
            rowSpacing={{ xs: 3, sm: 0, md: 0, lg: 0 }}
            columnSpacing={{ xs: 0, sm: 2, md: 0, lg: 3 }}
            className="!mt-0"
          >
            <Grid item xs={12} sm={4.5} md={4.5} lg={5}>
              <div className={`${classes.footerImg}`}>
                <img alt="Logo" src={footerlogo} className="w-[108px] rounded-md" />
              </div>
              <div className={`${classes.footerDivide}`}>
                <h4 className={`${classes.footerHeading}`}>
                  MAHI DENTAL CLINIC
                </h4>
                <p className={`${classes.footerText}`}>
                  Mahi Dental Clinic has more than 15000 satisfied patients. Located in Sector 7, Gandhinagar, our clinic provides world-class dental treatment using state-of-the-art dental instruments, delivered by a highly trained and experienced team of specialist dentists. With a strong reputation (4.7/5) from our patients, we’re committed to excellence in every service.
                  Dental Clinic in Gandhinagar, Dental Clinic Near Me, Best Dentist in Gandhinagar
                </p>
                <p className={`${classes.footerText}`}>
                  Block C, Sector 7, Gandhinagar, Gandhinagar Sector 7-382007
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

              </div>
            </Grid>

            <Grid item xs={12} sm={5.5} md={5.5} lg={4}>
              <div className={`${classes.footerDivide}`}>
                <NavigationMenu />
              </div>
            </Grid>

            {/* <Grid item xs={12} sm={2} md={2} lg={3}>
                <div className={`${classes.footerDivide}`}>
                 <NavigationMenu />
                </div>
            </Grid> */}
          </Grid>
        </Container>
      </div>
      <div className={`${classes.footerBottombg}`}>
        <Container>
          <p className={`${classes.copyrightText}`}>
            Copyright &copy; {getCurrentYear()} Mahi Dental Clinic.
            All rights reserved
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
