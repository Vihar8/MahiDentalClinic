import React from "react";
import Grid from "@mui/material/Grid";
import classes from "./AboutPages.module.scss";
import { Link } from "react-router-dom";

const ContactsUs = () => {
  return (
    <>
        <Grid container item xs={12} className="containSpacing">
        <h1 className="pageHeadings">Contact Us</h1>

        <Grid container item xs={12} spacing={2}>
            <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="!flex-col"
            >
            <h2 className={`${classes.pagesTitle} mt-2`}>
                For inquiries, consumer can contact us at:
            </h2>

            <h2 className={`${classes.pagesTitle} mt-2`}>Mahi Dental Clinic</h2>

            <ol className={`${classes.listStyles}`}>
                <li className={`${classes.pagesSubTitle}`}>
                <span className={`${classes.textHighlight}`}>Address:</span> Block C, Sector 7, Gandhinagar, Gandhinagar Sector 7-382007
                </li>
            </ol>

            <p className={`${classes.pagesSubTitle} mt-2`}>
                For any portal queries kindly feel free to contact
            </p>

            <ol className={`${classes.listStyles}`}>
                <li className={`${classes.pagesSubTitle}`}>
                <span className={`${classes.textHighlight}`}>Email:</span>{" "}
                <Link
                    to="mailto:info.info@ahasolar.in"
                    className="text-primary-Color1"
                >
                    info@mahidental.in
                </Link>
                </li>
                <li className={`${classes.pagesSubTitle}`}>
                <span className={`${classes.textHighlight}`}>Phone:</span>{" "}
                <Link className="text-primary-Color1" to="tel:+919978914926">+91 9978914926</Link>
                </li>
            </ol>
            </Grid>
        </Grid>
        </Grid>
    </>
  );
};

export default ContactsUs;
