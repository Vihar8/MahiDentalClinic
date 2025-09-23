import React from "react";
import classes from "../Subscriber.module.scss";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import verifiedImg from "/assets/project/bitcoin-icons_verify-filled.svg";
import InputBox from "../../../commoncomponents/InputBox/InputBox";

function PanVerification() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    // pan: yup.string().required("This field is required"),
  });

  // Create ticket formik form
  const formik = useFormik({
    initialValues: {
      pan: "",
    },
    validationSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  // Submit Replay-message form logic
  const submitForm = async (values) => {
    navigate("/project-capacity");
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
        <h1 className={`${classes.loginheading}`}>Verify Pan Card</h1>

        <Card>
          <CardContent className="border-[1px] border-[#F3F3F3] rounded-lg">
            <Grid
              container
              justifyContent="center"
              gap={2}
              className="mx-12 my-7"
            >
              <Grid container item xs={12}>
                <Grid item xs={10} sm={8} md={8} lg={8}>
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="pan"
                    type="text"
                    label={
                        <span>
                          Pan Card No.<span className="lableStar">*</span>
                        </span>
                      }
                      InputProps={{
                        style: { borderRadius: "599px" },
                        shrink: true,
                      }}
                    value={formik.values.pan}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.pan && Boolean(formik.errors.pan)}
                    helperText={formik.touched.pan && formik.errors.pan}
                    InputLabelProps={{
                        shrink: true,
                      }}
                  />
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  display="flex"
                  justifyContent="left"
                  alignItems="center"
                >
                  <img
                    src={verifiedImg}
                    alt="verified Image"
                    style={{
                      width: "80%", // Adjust as needed
                      height: "auto", // Maintain aspect ratio
                      maxWidth: "30px",
                    }}
                  />
                  Verified
                </Grid>
              </Grid>

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
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default PanVerification;
