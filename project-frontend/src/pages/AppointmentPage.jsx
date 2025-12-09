import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import classes from "../../src/components/AboutPages/AboutPages.module.scss";
import bgBlueGrid from "/assets/bg-blue-grid1.svg";
import Captcha from "../../src/commoncomponents/Captcha/Captcha";
import { Button } from '@mui/material';
import InputBox from '../../src/commoncomponents/InputBox/InputBox';
import { Link } from 'react-router-dom';
import { patientinquiry } from "../api/common"; // adjust path as per your project
import { StatusCode } from '../utils/commonEnum';


const AppointmentPage = () => {
  const [loading, setLoading] = useState(false)

  const validationSchema = yup.object({
    name: yup.string().required('Name is Required'),
    treatment: yup.string().required('Treatment is Required'),
    city: yup.string().required('City is Required'),
    zip: yup.string().required('Zip code is Required'),
    phone: yup.string()
      .matches(/^[0-9]{10}$/, "Mobile No. must be 10 digits")
      .max(10, "Mobile No. must be 10 characters")
      .required("Contact Person Mobile No. is required"),
    email: yup.string().required("Email is Required")
      .matches(
        /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email Format or Starts with Invalid Character"),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      treatment: '',
      city: '',
      zip: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
         const res = await patientinquiry(values); 
         if(res.statusCode == StatusCode.success){
          console.log("successfull")
          formik.resetForm();
          setLoading(false);
         }  
    },
  });

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
              Book an Appointment
            </h2>
          </div>
        </div>
        <div className='m-5'>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <h3 className="text-3xl font-normal text-[#88b312] mb-4">
                Book an appointment today.
              </h3>
              <p className="font-normal text-lg text-[#000000]">
                Mahi Dental provides world-class treatment using advanced instruments, delivered by a skilled and experienced team, with many satisfied patients.
              </p>
              <p className='mt-8'>
                <span className='text-[#88b121]'>Sector 7</span>, Block C, Gandhinagar, Gandhinagar Sector 7-382007
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
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <InputBox
                      label={<span>Name<span className="lableStar">*</span></span>}
                      size="small"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputBox
                      label={<span>Phone<span className="lableStar">*</span></span>}
                      size="small"
                      type="tel"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputBox
                      label={<span>Email Address<span className="lableStar">*</span></span>}
                      size="small"
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={(e) => {
                        formik.handleChange(e);
                      }}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputBox
                      label={<span>Treatment<span className="lableStar">*</span></span>}
                      size="small"
                      type="treatment"
                      name="treatment"
                      value={formik.values.treatment}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.treatment && Boolean(formik.errors.treatment)}
                      helperText={formik.touched.treatment && formik.errors.treatment}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputBox
                      label={<span>City<span className="lableStar">*</span></span>}
                      size="small"
                      type="city"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      helperText={formik.touched.city && formik.errors.city}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputBox
                      label={<span>Zip Code<span className="lableStar">*</span></span>}
                      size="small"
                      type="zip"
                      name="zip"
                      value={formik.values.zip}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.zip && Boolean(formik.errors.zip)}
                      helperText={formik.touched.zip && formik.errors.zip}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    size="medium"
                    className="btnCapital submitButton"
                    type="submit"
                    disabled={loading}
                  >
                     {loading ? <div>Submitting ...</div> : "Submit Info"}
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;