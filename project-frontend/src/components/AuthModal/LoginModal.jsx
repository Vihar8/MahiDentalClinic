import React from "react";
import { useContext, useState } from "react";
import { Grid, Button, InputAdornment, IconButton, FormControlLabel, Checkbox, } from "@mui/material";
import classes from "./LoginModal.module.scss";
import InputBox from "../../commoncomponents/InputBox/InputBox";
import Captcha from "../../commoncomponents/Captcha/Captcha";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useFormik } from "formik";
import JWTContext from "../../contexts/JWTContext";
import * as yup from "yup";
import { encodeData } from "../../utils/commonEnum";
import { Link } from "react-router-dom";


const LoginModal = () => {
  const [isValidCaptcha, setIsValidCaptcha] = useState(false);
  const [generateCaptcha, setGenerateCaptcha] = useState(false);
  const { login } = useContext(JWTContext);

  const [passwordVisibility, setPasswordVisibility] = useState({
    vendorPassword: false,
  });

  const handlePasswordToggle = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
    },

    validationSchema: yup.object({
        email: yup.string().email("Invalid email address").required("This Field is Required"),
        password: yup.string().required("Password is required")
    }),
    onSubmit: (values) => {
        submit(values);
    },
  });

  //Login Submit for login
  const submit = async (values) => {
    try {
      const encodePassword = await encodeData(
        values.password || values.emppassword
      );
      await login(
        values?.email,
        encodePassword,
      );
    } catch (error) {
      console.log('error',error);
      
    }
  }

  return (
      <Grid container className="my-8 !justify-center">
        <Grid item xs={12} sm={8} md={6} lg={5}>
            <div className={`${classes.loginBox}`}>
                {/* <Grid container item xs={12} sm={8} md={10}>
                <h1 className={`${classes.registerTitle} !text-primary-Color1`}>Agent Login</h1>
                </Grid> */}
            <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3} className="!-mt-3">
                <Grid item xs={12}>
                    <InputBox
                    label={
                        <span>
                        Email Address<span className="lableStar">*</span>
                        </span>
                    }
                    size="small"
                    type="email"
                    name="email"
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

                <Grid item xs={12}>
                    <InputBox
                    size="small"
                    type={
                        passwordVisibility.vendorPassword ? "text" : "password"
                    }
                    label={
                        <span>
                        Password<span className="lableStar">*</span>
                        </span>
                    }
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                        formik.touched.password && formik.errors.password
                    }
                    InputLabelProps={{
                        shrink: true,
                    }}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            onClick={() =>
                            handlePasswordToggle("vendorPassword")
                            }
                            onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
                        >
                            {passwordVisibility.vendorPassword ? (
                            <EyeFilled className={`${classes.eyeIcon}`} />
                            ) : (
                            <EyeInvisibleFilled
                                className={`${classes.eyeIcon}`}
                            />
                            )}
                        </IconButton>
                        </InputAdornment>
                    }
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                      className="checkboxLabel checkSpacing !ml-0"
                      control={<Checkbox size="small" color="success" />}
                      label="Keep me sign in"
                    />
                  </Grid>
                <Grid item xs={6} className="text-right">
                    <Link
                      to="/forgotpassword"
                      className={`${classes.passwordText}`}
                    >
                      Forgot Password?
                    </Link>
                  </Grid>

                <Grid item xs={12}>
                    <span className={`${classes.captchaText}`}>
                    Enter the Captcha Below
                    </span>
                    <Captcha
                    isValidCaptcha={isValidCaptcha}
                    setIsValidCaptcha={setIsValidCaptcha}
                    isGenerate={generateCaptcha}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    size="medium"
                    className="btnCapital"
                    type="submit"
                    value="vendor"
                    disabled={!isValidCaptcha}
                    >
                    LOGIN
                    </Button>
                </Grid>
                    
                <Grid container item xs={12}>
                <Grid item xs={8}>
                  <span className="text-xs font-semibold text-[#474747]">
                    Click for Registration:
                  </span>
                  <Link to="/registration" className="text-xs font-semibold text-[#1976D2]">Register</Link>
                </Grid>
              </Grid>
                </Grid>
            </form>
            </div>
          </div>
        </Grid>
      </Grid>
  );
};

export default LoginModal;
