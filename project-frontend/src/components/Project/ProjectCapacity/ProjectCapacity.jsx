import React, { useState } from "react";
import classes from "../Subscriber.module.scss";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  Switch,
  Slider,
  InputAdornment,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// import ProjectSummary from "/assets/project/ProjectSummary.svg";
import verifiedImg from "/assets/project/bitcoin-icons_verify-filled.svg";

function BookProjectCapacity() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const validationSchema = yup.object({});

  // Create ticket formik form
  const formik = useFormik({
    initialValues: {},
    validationSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  // Submit Replay-message form logic
  const handleClick = async (values) => {
    navigate("/project-summary");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full">
        <CardContent className="border-[1px] border-[#e3e3e3] rounded-lg">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            //   style={{ minHeight: "70vh" }}
            component="form"
            noValidate
            autoComplete="off"
            spacing={2}
            onSubmit={formik.handleSubmit}
          >
            <Grid
              container
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <h1 className={`${classes.loginheading}`}>
                Book Project Capacity
              </h1>
            </Grid>

            <Grid
              container
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                {/* Saving Grid */}
                <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {/* Left Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="left"
                  >
                    <h1 className={`${classes.PaymentProjectsubheading2}`}>Capacity:</h1>
                    <p className={`${classes.PaymentProjecttitle2}`}>50.6 KW</p>
                  </Grid>

                  {/* Right Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center" 
                  >
                    <h1 className={`${classes.PaymentProjectsubheading2}`}>Tariffs:</h1>
                    <p className={`${classes.PaymentProjecttitle2}`}>₹6</p>
                  </Grid>
                </Grid>

                {/* Annual Saving Grid */}
                <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {/* Left Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    justifyContent="center"
                    className="text-xs text-primary-Color1 font-semibold"
                  >
                    {checked &&<h1>Book Solar PV Capacity</h1>}
                    {!checked &&<h1>Monthly Saving Amount</h1>}
                  </Grid>

                  {/* Right Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Switch
                      size="lg"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      sx={{
                        "--Switch-thumbSize": "16px",
                        "& .MuiSwitch-track": {
                          backgroundColor: checked ? "#04C19B" : "#ccc",
                          transition: "background-color 0.3s",
                        },
                        "& .Mui-checked + .MuiSwitch-track": {
                          backgroundColor: "#04C19B",
                        },
                        "& .MuiSwitch-thumb": {
                          backgroundColor: "#fff",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
             <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  m={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {checked && <TextField
              fullWidth
              variant="outlined"
              name="amount"
              type="text"
              placeholder="Enter Capacity"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#1F467D" }}>kWp</span>
                      <span
                        style={{
                          height: "20px",
                          width: "1px",
                          backgroundColor: "#ccc",
                          display: "inline-block",
                        }}
                      />
                    </span>
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "599px",
                  height: "40px",
                  background: "#fff",
                },
              }}
              inputProps={{
                style: { paddingLeft: "5px", color: "#B8B8B8" }, // Placeholder color
              }}
            />}
             {!checked && <TextField
              fullWidth
              variant="outlined"
              name="amount"
              type="text"
              placeholder="Enter Amount"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#1F467D" }}>₹</span>
                      <span
                        style={{
                          height: "20px",
                          width: "1px",
                          backgroundColor: "#ccc",
                          display: "inline-block",
                        }}
                      />
                    </span>
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "599px",
                  height: "40px",
                  background: "#fff",
                },
              }}
              inputProps={{
                style: { paddingLeft: "5px", color: "#B8B8B8" }, // Placeholder color
              }}
            />}
                </Grid>

                <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  display="flex"
                  flexDirection="column"
                  alignItems="left"
                  className="bg-[#EFFBF6] border-1 border-[#E5E7EB] rounded-xl p-3"
                  sx={{ width: "100%" }}
                >
                  {/* Left Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    justifyContent="left"
                    alignItems="left"
                    className="text-xs text-primary-Color1 font-semibold"
                  >
                    {checked &&<h1>Choose PV Capacity</h1>}
                      {!checked &&<h1>Choose Saving Range</h1>}
                  </Grid>

                  {/* Right Side */}
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="left"
                    alignItems="left"
                    sx={{ width: "100%" }}
                  >
                    <Slider
                      defaultValue={30}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      sx={{
                        width: "100%",
                        color: "#65C466",
                        "& .MuiSlider-thumb": {
                          width: "16px",
                          height: "16px",
                        },
                        "& .MuiSlider-track": {
                          borderRadius: "10px",
                        },
                        "& .MuiSlider-rail": {
                          backgroundColor: "#E9E9EA",
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  mt={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  className="bg-[#F2F3F9] border-1 border-[#E5E7EB] rounded-xl p-3"
                >
                  {/* Left Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    className={`${classes.PaymentProjectsubheading}`}
                  >
                    <h1 className={`${classes.PaymentProjectsubheading}`}>
                      0.00
                    </h1>
                    <h1 className="text-[#A5A6AE] text-xs">
                      Your Monthly Credits
                    </h1>
                  </Grid>

                  {/* Right Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <h1 className={`${classes.PaymentProjectsubheading}`}>
                      1,133 W
                    </h1>
                    <h1 className="text-[#A5A6AE] text-xs">
                      Your Booked Solar
                    </h1>
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  className="p-3"
                >
                  {/* Left Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    justifyContent="left"
                    alignItems="left"
                    className={`${classes.PaymentProjectsubheading2}`}
                  >
                    <h1>*info of per unit Rate:</h1>
                  </Grid>

                  {/* Right Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    className={`${classes.PaymentProjectsubheading2}`}
                  >
                    <h1>₹ 6</h1>
                  </Grid>
                </Grid>
              </Grid>


              {/* Second Box */}
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                {/* Saving Grid */}
                <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  className="bg-[#F2F3F9] border-1 border-[#E5E7EB] rounded-xl p-3"
                >
                  {/* Left Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    className={`${classes.PaymentProjectsubheading}`}
                  >
                    <h1>Saving</h1>
                  </Grid>

                  {/* Right Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <h1 className={`${classes.PaymentProjectsubheading}`}>
                      ₹ 1,460
                    </h1>
                    <h1 className="text-[#A5A6AE] text-xs">Monthly</h1>
                  </Grid>
                </Grid>

                {/* Annual Saving Grid */}
                <Grid
                  container
                  item
                  xs={12}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className="p-3"
                >
                  {/* Left Side */}
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <h1 className={`${classes.PaymentProjectsubheading}`}>₹ 17,520</h1>
                    <h1 className="text-[#A5A6AE] text-xs">Annual Saving</h1>
                  </Grid>

                 <Grid item className={`${classes.verticalDivider}`}></Grid>  

                  {/* Right Side */}
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <h1 className={`${classes.PaymentProjectsubheading}`}>₹ 1,75,200</h1>
                    <h1 className="text-[#A5A6AE] text-xs">Total Saving in 10 Years</h1>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className="bg-[#FBF4EF] border-1 border-[#E5E7EB] rounded-xl p-3"
                >
                  {/* Left Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    className={`${classes.PaymentProjectsubheading}`}
                  >
                    <h1>Booking Amount</h1>
                  </Grid>

                  {/* Right Side */}
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <h1 className={`${classes.PaymentProjectsubheading}`}>
                      ₹ 1,00,000
                    </h1>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className="p-5"
                >
                  <Button
                    type="button"
                    variant="outlined"
                    size="medium"
                    className={`${classes.submitButton}`}
                    onClick={handleClick}
                  >
                    Book Now
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default BookProjectCapacity;
