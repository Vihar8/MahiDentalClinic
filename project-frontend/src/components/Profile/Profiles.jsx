import { Avatar, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import * as yup from "yup";
import classes from "./Profile.module.scss";
import Breadcrumb from "../../commoncomponents/Breadcrumb/Breadcrumb"
import InputBox from "../../commoncomponents/InputBox/InputBox";
import AddModal from '../../commoncomponents/AddModal/AddModal';
import { Formik, useFormik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { Form } from 'react-router-dom';
import { ShareAltOutlined } from '@ant-design/icons';

const Profiles = () => {
  const [open, setOpen] = useState(false);
  const [eleOpen, setEleOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  //Profile modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //Electricity modal
  const handleOpenele = () => setEleOpen(true);
  const handleCloseele = () => setEleOpen(false);
  //Booking modal
  const handleOpenbook = () => setBookOpen(true);
  const handleClosebook = () => setBookOpen(false);
  //Contact modal
  const handleOpencontact = () => setContactOpen(true);
  const handleClosecontact = () => setContactOpen(false);



const formik = useFormik({
    initialValues: {
        userName: "",
        email: "",
        mobileNumber: ""
    },
    validationSchema: yup.object({
      userName: yup.string().required('User Name is required'),
      email: yup.string().email("Invalid email address").required("Email address is Required"),
      mobileNumber: yup.string().matches(/^[0-9]{10}$/, "Mobile No. must be 10 digits")
      .max(10, "Mobile No. must be 10 characters")
      .required("Mobile No. is required"),
    }),
    onSubmit: (values) => {
        // submit(values);
        console.log("data send", values);
    },
  });

  const empListingdata = {
    title: "Profile",
};

  return (
    <React.Fragment>
    <Grid container>

    <Grid container item xs={12} className="headingSeparate">
      <Grid item xs={12} sm={4} md={3} lg={1.5}>
          <Breadcrumb {...empListingdata} />
      </Grid>
      </Grid>

        {/* Main Container */}
  <Grid item xs={12} className={`${classes.maincontainer}`}>
    
    {/* Profile Setting */}
    <Grid container alignItems="center" justifyContent="space-between" className="p-4 border-b">
      <Grid item container alignItems="center" spacing={2} xs>
        <Grid item>
          <img src="/assets/adminIcons/pro.svg" alt="Profile Icon" className={`${classes.img}`} />
        </Grid>
        <Grid item>
          <p className={`${classes.title}`}>Profile Setting</p>
          <p className={`${classes.subtitle}`}>
            View or change your personal information
          </p>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" color="success" size="small" className="btnStyle roundedBtn" onClick={handleOpen}>
          View
        </Button>
      </Grid>
    </Grid>

    {/* Divider */}
    <Grid item sx={{ width: "100%", height: "1px", backgroundColor: "#D3D3D3", mt: 1 }}></Grid>

    {/* Electricity Bill Receipt */}
    <Grid container alignItems="center" justifyContent="space-between" className="p-4 border-b">
      <Grid item container alignItems="center" spacing={2} xs>
        <Grid item>
          <img src="/assets/adminIcons/electricity.svg" alt="Electricity Icon" className={`${classes.img}`} />
        </Grid>
        <Grid item>
          <p className={`${classes.title}`}>Electricity Bill Receipt</p>
          <p className={`${classes.subtitle}`}>View your transactions</p>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" color="success" size="small" className="btnStyle roundedBtn" onClick={handleOpenele}>
          View
        </Button>
      </Grid>
    </Grid>

    {/* Divider */}
    <Grid item sx={{ width: "100%", height: "1px", backgroundColor: "#D3D3D3", mt: 1 }}></Grid>

    {/* Booking History */}
    <Grid container alignItems="center" justifyContent="space-between" className="p-4 border-b">
      <Grid item container alignItems="center" spacing={2} xs>
        <Grid item>
          <img src="/assets/adminIcons/booking.svg" alt="Booking Icon" className={`${classes.img}`} />
        </Grid>
        <Grid item>
          <p className={`${classes.title}`}>Booking History</p>
          <p className={`${classes.subtitle}`}>Manage Digital Solar Booking</p>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" color="success" size="small" className="btnStyle roundedBtn" onClick={handleOpenbook}>
          View
        </Button>
      </Grid>
    </Grid>

    {/* Divider */}
    <Grid item sx={{ width: "100%", height: "1px", backgroundColor: "#D3D3D3", mt: 1 }}></Grid>

    {/* Get in Touch */}
    <Grid container alignItems="center" className="p-4">
      <Grid item container alignItems="center" spacing={2} xs>
        <Grid item>
          <img src="/assets/adminIcons/contact.svg" alt="Contact Icon" className={`${classes.img}`} />
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <p className={`${classes.title}`}>Let's Get in Touch!</p>
            </Grid>
            <Grid item>
              <img src="/assets/adminIcons/rightarrow.svg" className={`${classes.img}`} onClick={handleOpencontact}/>
            </Grid>
          </Grid>
          <p className={`${classes.subtitle}`}>Get in Touch with our team</p>
        </Grid>
      </Grid>
    </Grid>
</Grid>
  </Grid>




{/* Modal for view Profile Setting */}
      <AddModal open={open} handleClose={handleClose} classname={classes.modal}>


        <Grid
          className={`${classes.modalHeader}`}
        >
          <h2 className={`${classes.modalHeaderTitle}`}>Profile Setting</h2>
          <CloseIcon
            onClick={handleClose}
            style={{ cursor: "pointer" }}
            className={`${classes.modalCloseIcon}`} />
        </Grid>

        <Grid
          className={`${classes.gridContainer}`}
        >

          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Background Box with Text and Image */}
            <Grid
              style={{
                position: "relative",
                backgroundColor: "#EFFBF6",
                padding: "12px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* User Info */}
              <Grid style={{ display: "flex", flexDirection: "column" }}>
                <p className={`${classes.usenam}`}>
                  User Name
                </p>
                <button className={`${classes.subtitle}`}>
                  Change Profile Picture
                </button>
              </Grid>

              {/* Profile Image */}
              <Grid style={{ position: "absolute", right: "12px" }}>
                <img
                  src="/assets/adminIcons/profileimg.png"
                  alt="User Icon"
                  style={{
                    width: "92px",
                    height: "92px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>


          <Formik>
            {({ isSubmitting }) => (
              <Form
                onSubmit={formik.handleSubmit}
                style={{
                  display: "grid",
                  gridTemplateRows: "repeat(3, auto) 1fr",
                  gap: "15px",
                }}
              >
                <Grid container spacing={3} className="!-mt-3">
                  <Grid item xs={12}>
                    <InputBox
                      fullWidth
                      variant="outlined"
                      name="userName"
                      type="text"
                      label={
                        <span>
                          User Name<span className="lableStar">*</span>
                        </span>
                      }
                      InputProps={{
                        style: { borderRadius: "599px" },
                        shrink: true,
                      }}
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.userName && Boolean(formik.errors.userName)
                      }
                      helperText={
                        formik.touched.userName && formik.errors.userName
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}

                    />
                  </Grid>

                  <Grid item xs={12}>
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

                  <Grid item xs={12}>
                    <InputBox
                      fullWidth
                      variant="outlined"
                      name="mobileNumber"
                      placeholder=""
                      type="text"
                      label={
                        <span>
                          Mobile Number<span className="lableStar">*</span>
                        </span>
                      }
                      InputProps={{
                        style: { borderRadius: "599px" },
                        shrink: true,

                      }}
                      value={formik.values.mobileNumber}
                      onChange={(e) => {
                      const value = e.target.value;
                      // Limit input to 10 characters
                      if (value.length <= 10) {
                        formik.handleChange(e);
                      }
                    }}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)
                      }
                      helperText={
                        formik.touched.mobileNumber && formik.errors.mobileNumber
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

                  {/* button  */}
                  <Grid item xs={12}>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#1F467D",
                        color: "white",
                        border: "none",
                        borderRadius: "999px",
                        padding: "12px",
                        fontSize: "24px",
                        cursor: "pointer",
                        width: "100%",
                        fontWeight: "400",
                      }}
                      disabled={isSubmitting}
                    >
                      Edit Profile
                    </button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </AddModal>


{/* Modal for viewing Electricity setting*/}
      <AddModal open={eleOpen} handleCloseele={handleCloseele} classname={classes.modal}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid #f0f0f0",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          {/* Title */}
          <h2 style={{ fontWeight: "bold", fontSize: "20px", color: "#434343" }}>
            Electric Bill Receipt
          </h2>

          {/* Logo */}
          <div style={{ position: "absolute", right: "50px" }}>
            <img
              src="/assets/torrentpower.png"
              alt="Company Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              className='border-[1px]'
            />
          </div>

          {/* Close Button */}
          <CloseIcon
            onClick={handleCloseele}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "12px",
              width: "28px",
              height: "28px",
            }}
            className='w-9 h-9 text-[#6A6A72]'
          />
        </div>

        <Grid
          style={{
            display: "grid",
            gridTemplateRows: "auto auto 1fr",
            // padding: "20px",
            // gap: "15px",
          }}
        >
          <Grid style={{ display: "grid", gap: "16px" }}>

            {/* Green Banner */}
            <Grid
              container
              className={`${classes.creditcard}`}
              sx={{ backgroundColor: "#E2F8ED", padding: 2 }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <p className={`${classes.creditamount}`}>₹ 28.18</p>
                <p className={`${classes.creditlabel}`}>
                  Saving so far
                </p>
              </Grid>
              <Grid item>
                <img
                  src="/assets/adminIcons/greenthunder.svg"
                  alt="User Icon"
                  className="bg-[#F6BE54] rounded-full w-16 h-16"
                />
              </Grid>
            </Grid>

            {/* Electricity Account Details */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p className={`${classes.para}`}>Electricity Account No.</p>
              <div className={`${classes.div}`}>
                <ShareAltOutlined style={{ fontSize: "16px", color: "#1F467D" }} />
                <span className={`${classes.span}`}>Share</span>
              </div>
            </div>

            {/* Account Number & Amount */}
            <p className={`${classes.pa}`}>123435655123</p>


            {/* Amount */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p className={`${classes.pa}`}>₹100</p>
              <p className={`${classes.date}`}>10 Feb, 2025</p>
            </div>


            {/* Credit Used Button */}
            <button className={`${classes.btn}`}>
              Credit Used: ₹100.00
            </button>

          </Grid>

        </Grid>
        {/* </Grid> */}
      </AddModal>

{/* Modal for viewing booking history */}
      <AddModal open={bookOpen} handleClosebook={handleClosebook} classname={classes.modal}>
        <Grid
          className={`${classes.modalHeader}`}
        >
          <h2 className={`${classes.modalHeaderTitle}`}>Booking History</h2>
          <CloseIcon
            onClick={handleClosebook}
            className={`${classes.modalCloseIcon}`}
          />
        </Grid>

        <Grid
          className={`${classes.gridContainer}`}
        >

          <Grid
            container
            alignItems="center"
          >
          </Grid>
          <Grid
            container
            className={`${classes.creditcard}`}
            sx={{ padding: 2, gap: 1, }}
            alignItems="center"
          >
            <Grid
              className={`${classes.companynamelogo}`}
            >
              A
            </Grid>

            {/* Text Details */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className={`${classes.title}`}>Name of Company</p>
              <p className={`${classes.textpa}`}>
                Valid till: <span className={`${classes.usenam}`}>Date</span>
              </p>
            </div>
          </Grid>

          <div className={`${classes.scheduleCard}`}>

            {/* Top Section */}
            <div className={`${classes.topsec}`}>

              {/* Left Side (Capacity) */}
              <div className={`${classes.capsec}`}>
                <span>24 W</span>
                <p>Capacity</p>
              </div>

              {/* Vertical Divider */}
              <div className={`${classes.verticalDivider}`}></div>

              {/* Right Side (Generated Credits) */}
              <div className={`${classes.capsec}`}>
                <span>₹ 128.18</span>
                <p>Generated Credits</p>
              </div>

            </div>

            <div className={`${classes.horizontalDivider}`}></div>

            {/* Bottom Section */}
            <div
              className={`${classes.bottomsec}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <p className={`${classes.bottompa}`}>Reserved Since 14/01/2024</p>
              {isExpanded ? (
                <img src="/assets/arrow-up.svg" size={16} className={`${classes.expanarrow}`} />
              ) : (
                <img src="/assets/arrow-down.svg" size={16} className={`${classes.expanarrow}`} />
              )}
            </div>


          </div>
          {/* Expandable Section */}
          <div className={`${classes.expansec}`}>
            {isExpanded && (
              <ul className={`${classes.expanul}`}>
                <li>Your Reservation Invoice</li>
                <li>Solar Calculator</li>
                <li>Service Agreement</li>
              </ul>
            )}
          </div>

          <Button
            variant="outlined"
            size="large"
            // onClick={() => navigate("/")}
            style={{
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              width: "100%",
              padding: "12px",
              fontSize: "24px",
              fontWeight: "600",
              color: "#1F467D",
              borderColor: "#1F467D",
              borderWidth: "1px",
              borderStyle: "solid",
              borderRadius: "6rem",
            }}
          >
            Exit Reservation
          </Button>
        </Grid>

      </AddModal>


      {/* Modal for viewing booking history */}
      <AddModal open={contactOpen} handleClosebook={handleClosecontact} classname={classes.modal}>
        <Grid
          className={`${classes.modalHeader}`}
        >
          <h2 className={`${classes.modalHeaderTitle}`}>Let's Get in Touch!</h2>
          <CloseIcon
            onClick={handleClosecontact}
            className={`${classes.modalCloseIcon}`} />
        </Grid>

        <Grid
          className={`${classes.gridContainer}`}
        >

          <Grid
            container
            alignItems="center"
          >
          </Grid>
          <div className={`${classes.scheduleCard}`}>
            {/* Header Section */}
            <div className={`${classes.scheduleCardHeader}`}>
              <p className={`${classes.scheduleCardContent}`}>Connect Now</p>
              <img
                src="/assets/adminIcons/rightarrow.svg"
                alt="Right Arrow"
                className={`${classes.scheduleCardImg}`}
              />
            </div>

            {/* Content Section */}
            <div className={`${classes.consec}`}>
              <img src="/assets/phonelog.svg" alt="Contact Icon" className={`${classes.consecimg}`} />
              {/* Vertical Divider */}
              <div className={`${classes.verticalDivider}`}></div>
              <p className={`${classes.scheduleCardpa}`}>
                We shall reach out to you in a couple of minutes. You can opt for a phone call or chat over WhatsApp.
              </p>
            </div>
          </div>


          <div className={`${classes.scheduleCard}`}>
            {/* Header Section */}
            <div className={`${classes.scheduleCardHeader}`}>
              <p className={`${classes.scheduleCardContent}`}>Schedule for Later</p>
              <img
                src="/assets/adminIcons/rightarrow.svg"
                alt="Right Arrow"
                className={`${classes.scheduleCardImg}`}
              />
            </div>

            {/* Content Section */}
            <div className={`${classes.consec}`}>
              <img src="/assets/calender.svg" alt="Contact Icon" className={`${classes.consecimg}`} />
              {/* Vertical Divider */}
              <div className={`${classes.verticalDivider}`}></div>
              <p className={`${classes.scheduleCardpa}`}>
                We shall reach out to you in a couple of minutes. You can opt for a phone call or chat over WhatsApp.
              </p>
            </div>
          </div>

          <Button
            variant="outlined"
            size="large"
            // onClick={() => navigate("/")}
            style={{
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              width: "100%",
              padding: "12px",
              marginTop: "50px",
              fontSize: "24px",
              fontWeight: "600",
              color: "#1F467D",
              borderColor: "#1F467D",
              borderWidth: "1px",
              borderStyle: "solid",
              borderRadius: "6rem",
            }}
          >
            Call Now!
          </Button>
        </Grid>

      </AddModal>

    </React.Fragment>
  )
}

export default Profiles
