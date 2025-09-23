import React, { useState } from "react";
import classes from "../PlantOwnerRegistration.module.scss";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import verifiedImg from "/assets/project/bitcoin-icons_verify-filled.svg";
import InputBox from "../../../commoncomponents/InputBox/InputBox";
import FileUpload from "../../../commoncomponents/FileUpload/FileUpload";
import { acceptFileType, pdfUploadFileSize } from "../../../utils/commonEnum";

function PlantOwnerRegistration() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = React.useState(false);
  const [errorMessage1, setErrorMessage1] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // upload specification
  const handleFileSelect1 = (event) => {
    const file = event;
    // if (file) {
    //   if (!filesTypes.includes(file.type)) {
    //     setErrorMessage1(pdfFileFormatMessage);
    //     setSelectedFile1(null);
    //   } else if (file.size > maxFileSize) {
    //     setErrorMessage1(pdfFileSizeMessage);
    //     setSelectedFile1(null);
    //   } else {
    //     setSelectedFile1(file);
    //     setErrorMessage1("");
    //     formik.setFieldValue("file", file); // Set the file in Formik's values
    //   }
    // }
  };

  const validationSchema = yup.object({
    // pan: yup.string().required("This field is required"),
  });

  // Create ticket formik form
  const formik = useFormik({
    initialValues: {
      name: "",
      pan_no: "",
      pan_file: "",
      gst_no: "",
      gst_file: "",
      email: "",
      mobile: "",
      password: "",
      confirm_password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  // Submit Replay-message form logic
  const submitForm = async (values) => {
    navigate("/");
  };

  const handleClick = () => {
    navigate("/");
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
      <Grid item xs={11} sm={11} md={6} lg={6}>
        <h1 className={`${classes.loginheading}`}>Registration</h1>

        <Card>
          <CardContent className="border-[1px] border-[#F3F3F3] rounded-lg">
            <Grid
              container
              justifyContent="center"
              gap={2}
              className="px-12 my-7"
            >
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="name"
                    type="text"
                    label={
                      <span>
                        Name<span className="lableStar">*</span>
                      </span>
                    }
                    InputProps={{
                      style: { borderRadius: "599px" },
                      shrink: true,
                    }}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="mobile"
                    type="text"
                    label={
                      <span>
                        Mobile<span className="lableStar">*</span>
                      </span>
                    }
                    InputProps={{
                      style: { borderRadius: "599px" },
                      shrink: true,
                    }}
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.mobile && Boolean(formik.errors.mobile)
                    }
                    helperText={formik.touched.mobile && formik.errors.mobile}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                >
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="pan_no"
                    type="text"
                    label={
                      <span>
                        PAN No.<span className="lableStar">*</span>
                      </span>
                    }
                    InputProps={{
                      style: { borderRadius: "599px" },
                      shrink: true,
                    }}
                    value={formik.values.pan_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.pan_no && Boolean(formik.errors.pan_no)
                    }
                    helperText={formik.touched.pan_no && formik.errors.pan_no}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="left"
                  flexDirection="column"
                  alignItems="left"
                >
                  <FileUpload
                    onFileSelect={handleFileSelect1}
                    fileId="pan_file"
                    buttonLabel="Pan Photo"
                    acceptedFileTypes={acceptFileType}
                    fileNotes={pdfUploadFileSize}
                    defaultFileUploaded={Boolean(formik?.values?.pan_file)}
                  />
                  {errorMessage1 && (
                    <div className="errorMessage">{errorMessage1}</div>
                  )}

                  {formik.touched.pan_file && formik.errors.pan_file && (
                    <div className="errorMessage">{formik.errors.pan_file}</div>
                  )}
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="gst_no"
                    type="text"
                    label={
                      <span>
                        GST No.<span className="lableStar">*</span>
                      </span>
                    }
                    InputProps={{
                      style: { borderRadius: "599px" },
                      shrink: true,
                    }}
                    value={formik.values.gst_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.gst_no && Boolean(formik.errors.gst_no)
                    }
                    helperText={formik.touched.gst_no && formik.errors.gst_no}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="left"
                  flexDirection="column"
                  alignItems="left"
                >
                  <FileUpload
                    onFileSelect={handleFileSelect1}
                    fileId="gst_file"
                    buttonLabel="GST Photo"
                    acceptedFileTypes={acceptFileType}
                    fileNotes={pdfUploadFileSize}
                    defaultFileUploaded={Boolean(formik?.values?.gst_file)}
                  />
                  {errorMessage1 && (
                    <div className="errorMessage">{errorMessage1}</div>
                  )}

                  {formik.touched.gst_file && formik.errors.gst_file && (
                    <div className="errorMessage">{formik.errors.gst_file}</div>
                  )}
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                >
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="email"
                    type="text"
                    label={
                      <span>
                        Email<span className="lableStar">*</span>
                      </span>
                    }
                    InputProps={{
                      style: { borderRadius: "599px" },
                      shrink: true,
                    }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                >
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label={
                      <span>
                        Password<span className="lableStar">*</span>
                      </span>
                    }
                    InputProps={{
                      style: { borderRadius: "599px" },
                      shrink: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                           color="primary"
                        >
                          {showPassword ? (
                            <EyeOutlined />
                          ) : (
                            <EyeInvisibleOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                  sx={{ marginTop: "10px" }}
                >
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="confirm_password"
                    type={showConfirmPassword ? "text" : "password"}
                    label={
                      <span>
                        Confirm Password<span className="lableStar">*</span>
                      </span>
                    }
                    InputProps={{
                      style: { borderRadius: "599px" },
                      shrink: true,
                    }}
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="primary"
                        >
                          {showConfirmPassword ? (
                            <EyeOutlined />
                          ) : (
                            <EyeInvisibleOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    error={
                      formik.touched.confirm_password &&
                      Boolean(formik.errors.confirm_password)
                    }
                    helperText={
                      formik.touched.confirm_password &&
                      formik.errors.confirm_password
                    }
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                item
                xs={12}
                justifyContent="space-between"
                gap={2}
                sx={{ marginTop: "20px" }}
              >
                {/* <Grid item xs={12} sm={12} md={12} lg={12}> */}
                <Button
                  type="button"
                  variant="outlined"
                  size="medium"
                  className={`${classes.cancelButton}`}
                  onClick={handleClick}
                >
                  Cancel
                </Button>
                {/* </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  display="flex"
                  justifyContent="right"
                > */}
                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  className={`${classes.submitButton}`}
                  onClick={submitForm}
                >
                  Register
                </Button>
                {/* </Grid> */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default PlantOwnerRegistration;
