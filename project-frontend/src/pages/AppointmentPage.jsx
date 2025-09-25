import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import classes from "../../src/components/AboutPages/AboutPages.module.scss";
import bgBlueGrid from "/assets/bg-blue-grid1.svg";
import Captcha from "../../src/commoncomponents/Captcha/Captcha";
import { Button } from '@mui/material';
import InputBox from '../../src/commoncomponents/InputBox/InputBox';


const AppointmentPage = () => {

  const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        designation: '',
        company: '',
        phone: '',
        email: '',
        message: '',
      },
  
      validationSchema: yup.object({
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        email: yup.string().email('Invalid').required('Required'),
      }),
      onSubmit: (values) => {
        submit(values);
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
                Mahi Dental has satisfied patients. It, provides world-class dental treatment using state-of-the-art dental instruments by the well trained and experienced team.
              </p>
            </Grid>

            <Grid item xs={12} md={6}>
              <form className="space-y-4">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <InputBox
                      label={<span>First Name<span className="lableStar">*</span></span>}
                      size="small"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                      helperText={formik.touched.firstName && formik.errors.firstName}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputBox
                      label={<span>Last Name<span className="lableStar">*</span></span>}
                      size="small"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                      helperText={formik.touched.lastName && formik.errors.lastName}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputBox
                      label="Designation"
                      size="small"
                      name="designation"
                      value={formik.values.designation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.designation && Boolean(formik.errors.designation)}
                      helperText={formik.touched.designation && formik.errors.designation}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputBox
                      label="Company"
                      size="small"
                      name="company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.company && Boolean(formik.errors.company)}
                      helperText={formik.touched.company && formik.errors.company}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputBox
                      label="Phone"
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
                        eraseField(); // your custom logic
                      }}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputBox
                      label="Treatment"
                      size="small"
                      name="message"
                      multiline
                      rows={4}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.message && Boolean(formik.errors.message)}
                      helperText={formik.touched.message && formik.errors.message}
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
                    value="vendor"
                  >
                    Submit
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