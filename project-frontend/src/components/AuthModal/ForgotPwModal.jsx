import React from "react"
import { useState } from "react";
import { Grid, Button, IconButton, InputAdornment } from "@mui/material";
import classes from "./LoginModal.module.scss";
import InputBox from "../../commoncomponents/InputBox/InputBox";
import { Link } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

const ForgotPwModal = () => {
  const [otpShow, setOtpShow] = useState(false);

  const [passwordVisibility, setPasswordVisibility] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const handlePasswordToggle = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <Grid container className="my-8 !justify-center">
      <Grid item xs={12} sm={8} md={6} lg={5}>
        <div className={`${classes.loginBox}`}>
          <Grid container spacing={1.5}>
            <Grid item xs={12}>
              {/* <label className={`${classes.textLabel}`}>
                Email Address<span className="errorName">*</span>
              </label> */}
              <InputBox
                label={
                  <span>
                    Email Address<span className="lableStar">*</span>
                  </span>
                }
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                type="text"
                name="emailname"
                className="otpBox"
                // placeholder="Test@gmail.com"
              />
            </Grid>

            <Grid item xs={12} className="!mt-2">
              <Button
                fullWidth
                variant="contained"
                color="success"
                size="medium"
                className="btnCapital"
              >
                GO
              </Button>
              <p className={`${classes.registerDivide}`}>
                {/* Click here for back to Login: */}
                <Link to="/login" className={`${classes.registerText}`}>
                  Back to Login
                </Link>
              </p>
            </Grid>
          </Grid>

          {otpShow && (
            <Grid container spacing={3.5} className="!-mt-1">
              <Grid item xs={12}>
                {/* <label className={`${classes.textLabel}`}>OTP</label> */}
                <InputBox
                  size="small"
                  type="text"
                  name="otp"
                  // placeholder="Enter OTP"
                  label={
                    <span>
                      OTP<span className="lableStar">*</span>
                    </span>
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onKeyDown={(event) => {
                    const regex = /^-?[0-9]*(\.[0-9]*)?$/;
                    if (
                      !regex.test(event.key) &&
                      event.key !== "Backspace" &&
                      !(event.ctrlKey || event.metaKey) &&
                      event.key !== "ArrowLeft" &&
                      event.key !== "ArrowRight" &&
                      event.key !== "Tab"
                    ) {
                      event.preventDefault();
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                {/* <label className={`${classes.textLabel}`}>New Password</label> */}
                <InputBox
                  size="small"
                  type={passwordVisibility.newPassword ? "text" : "password"}
                  name="newPassword"
                  autoComplete="off"
                  // placeholder="Enter New Password"
                  label={
                    <span>
                      New Password<span className="lableStar">*</span>
                    </span>
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handlePasswordToggle("newPassword")}
                        onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
                      >
                        {passwordVisibility.newPassword ? (
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

              <Grid item xs={12}>
                {/* <label className={`${classes.textLabel}`}>
                  Confirm New Password
                </label> */}
                <InputBox
                  size="small"
                  type={
                    passwordVisibility.confirmPassword ? "text" : "password"
                  }
                  name="confirmnewpassword"
                  // placeholder="Enter Confirm New Password"
                  label={
                    <span>
                      Confirm New Password<span className="lableStar">*</span>
                    </span>
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handlePasswordToggle("confirmPassword")}
                        onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
                      >
                        {passwordVisibility.confirmPassword ? (
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

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  size="medium"
                  className="btnCapital"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default ForgotPwModal;
