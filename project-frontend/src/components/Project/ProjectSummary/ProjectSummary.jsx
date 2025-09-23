import React from "react";
import classes from "../Subscriber.module.scss";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import ProjectSummary from "/assets/project/ProjectSummary.svg";
import verifiedImg from "/assets/project/bitcoin-icons_verify-filled.svg";

function PaymentProjectSummary() {
  const navigate = useNavigate();

  //   const validationSchema = yup.object({
  //   });

  //   // Create ticket formik form
  //   const formik = useFormik({
  //     initialValues: {
  //     },
  //     validationSchema,
  //     onSubmit: (values) => {
  //       submitForm(values);
  //     },
  //   });

  // Submit Replay-message form logic
  const submitForm = async (values) => {
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
      spacing={3}
      //   onSubmit={formik.handleSubmit}
    >
      {/* <Grid item xs={12} sm={8} md={6} lg={4}> */}
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={ProjectSummary}
          alt="Image"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "500px",
          }}
        />
      </Grid>
      {/* </Grid> */}
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <Card>
          <CardContent className="border-[0.74px] border-[#e3e3e3] rounded-lg">
            <Grid container item xs={12} spacing={3}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={verifiedImg}
                  alt="Image"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "100px",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <h1 className={`${classes.PaymentProjectSummary}`}>
                  <b>Congratulation</b> You Have Booked <b style={{ color: "green" }}>5kW</b> Solar PV Plant For a tenure
                  of <b style={{ color: "#FF6A39" }}>10Years</b> Solar Credits will be Updated in the wallet on 10
                  th of Every month Base on the Electricity Generated From the
                  Solar PV Plant The Credits can be Further Used to <b style={{ color: "green" }}>Pay</b> the
                  Discom bills.{" "}
                </h1>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%" // Ensure the container spans full width
              >
                <Divider sx={{ width: "100%" }} />
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  type="button"
                  variant="outlined"
                  size="medium"
                  className={`${classes.submitButton}`}
                  //   onClick={handleClick}
                >
                  Finish
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default PaymentProjectSummary;
