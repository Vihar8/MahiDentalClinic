import React, { useState } from "react";
import classes from "../Subscriber.module.scss";
import { Grid, Card, CardContent, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../../../commoncomponents/InputBox/InputBox";

function SubscriberLogin() {
  const navigate = useNavigate();
  const [showMobileOtpField, setShowMobileOtpField] = useState(false);
  const [showEmailOtpField, setShowEmailOtpField] = useState(false);

  const validationSchema = yup.object({
    // mobile: yup.string().required("This field is required"),
    // email: yup.string().required("This field is required"),
  });

  // Create ticket formik form
  const formik = useFormik({
    initialValues: {
      mobile: "",
      email: "",
      mobileOtp: "",
      emailOtp: "",
    },
    validationSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  // Submit Replay-message form logic
  const submitForm = async (values) => {
    navigate("/verify-pan");
  };

  const handleClick = () => {
    navigate("/project");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "80vh" }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <h1 className={`${classes.loginheading}`}>User Login</h1>

        <Card>
          <CardContent className="border-[1px] border-[#F3F3F3] rounded-lg">
            <Grid
              container
              justifyContent="center"
              gap={2}
              className="mx-12 my-7"
            >
              {/* Mobile Number Field */}

              {/* <Grid container item xs={12}>
                <Grid item xs={8}>
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="mobile"
                    type="text"
                    label={
                      <span>
                        Mobile No.<span className="lableStar">*</span>
                      </span>
                    }
                    InputProps={{
                      style: { borderRadius: "599px" },
                      shrink: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.mobile && Boolean(formik.errors.mobile)
                    }
                    helperText={formik.touched.mobile && formik.errors.mobile}
                  />
                </Grid>
                <Grid item xs={4} display="flex" justifyContent="left">
                  <Button
                    type="button"
                    size="medium"
                    onClick={() => setShowMobileOtpField(true)}
                  >
                    Send OTP
                  </Button>
                </Grid>
              </Grid> */}

              {/* OTP Field (Conditional Rendering) */}
              
              {/* {showMobileOtpField && (
                <Grid container item xs={12}>
                  <Grid item xs={8}>
                    <InputBox
                      fullWidth
                      variant="outlined"
                      name="mobileOtp"
                      type="text"
                      label={
                        <span>
                          Enter OTP<span className="lableStar">*</span>
                        </span>
                      }
                      InputProps={{
                        style: { borderRadius: "599px" },
                        shrink: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formik.values.mobileOtp}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.mobileOtp &&
                        Boolean(formik.errors.mobileOtp)
                      }
                      helperText={
                        formik.touched.mobileOtp && formik.errors.mobileOtp
                      }
                    />
                  </Grid>
                </Grid>
              )} */}

              {/* Email Field */}
              <Grid container item xs={12}>
                <Grid item xs={8}>
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="email"
                    type="text"
                    label={
                      <span>
                        E-mail ID<span className="lableStar">*</span>
                      </span>
                    }
                    InputProps={{
                        style: { borderRadius: "599px" },
                        shrink: true,
                      }}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={
                        formik.touched.email && formik.errors.email
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}

                    />
                </Grid>
                <Grid item xs={4} display="flex" justifyContent="left">
                  <Button
                    type="button"
                    size="medium"
                    onClick={() => setShowEmailOtpField(true)}
                  >
                    Send OTP
                  </Button>
                </Grid>
              </Grid>

              {/* OTP Field (Conditional Rendering) */}
              {showEmailOtpField && (
                <Grid container item xs={12}>
                  <Grid item xs={8}>
                    <InputBox
                      fullWidth
                      variant="outlined"
                      name="emailOtp"
                      type="text"
                      label={
                        <span>
                          Enter OTP<span className="lableStar">*</span>
                        </span>
                      }
                      InputProps={{
                        style: { borderRadius: "599px" },
                        shrink: true,
                      }}
                      value={formik.values.emailOtp}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.emailOtp &&
                        Boolean(formik.errors.emailOtp)
                      }
                      helperText={
                        formik.touched.emailOtp && formik.errors.emailOtp
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
              )}

              {/* Action Buttons */}
              <Grid container item xs={12}>
                <Grid item xs={3} sm={3} md={4} lg={4}>
                  <Button
                    type="button"
                    variant="outlined"
                    size="medium"
                    className={`${classes.cancelButton}`}
                    onClick={handleClick}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={4}
                  display="flex"
                  justifyContent="right"
                >
                  <Button
                    variant="contained"
                    size="medium"
                    type="submit"
                    className={`${classes.submitButton}`}
                    onClick={submitForm}
                  >
                    Verify
                  </Button>
                </Grid>
              </Grid>

              {/* Registration Link */}
              <Grid container item xs={12}>
                <Grid item xs={8}>
                  <span className="text-xs font-normal text-[#474747]">
                    Click for Registration:
                  </span>
                  <Link to="#" className="text-xs font-normal text-[#1976D2]">Register</Link>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SubscriberLogin;
