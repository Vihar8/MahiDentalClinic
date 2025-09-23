import React from "react";
import classes from "./ProjectModal.module.scss";
import { Grid, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const demoData = [
  {
    id: 1,
    creditGenerated: "₹1,425",
    energyGenerated: "1,133 kW",
    tariffInfo: "Info on tariff",
    image: "/assets/solarr.png",
    capacity: "1,133 kW",
    tenure: "5 Years",
    extraInfo: "More Information",
    projectStatus: "In Progress",
    aboutProject: [
      "AHASolar partners with solar developers and financial institutions to digitally fractionalize the energy output.",
      "The generated energy is converted into Digital Solar Credits, which can be virtually traded.",
      "AHAsolar partners with solar developers and financial institutions to digitally fractionalize the energy output.",
      "The generated energy is converted into Digital Solar Credits, which can be virtually traded."
    ]
  }
];


const images = [
  "/assets/solarr.png",
  "/assets/solar8.png",
  "/assets/solar.png",
];



const PlantDetails = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/subscriberlogin");
    };
  return (
    <Grid container padding={1} maxWidth="100%" className="my-8">
      {demoData.map((plant) => (
        <Grid key={plant.id} container className={`${classes.plantdet}`}>
          
          {/* Header Section */}
          <Grid container spacing={2} padding={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <h1 className={`${classes.plantdetails}`}>Plant Details</h1>
              <p className={`${classes.plantdetailspara}`}>Managed by Company Name</p>
            </Grid>

            {/* Right Section - Two Cards */}
            <Grid item xs={12} md={8} container spacing={2} justifyContent="flex">
              {/* First Card */}
              <Grid container item xs={12} md={6}>
              <Grid item className={`${classes.cards}`}>
                <Grid textAlign="center">
                  <span>{plant.creditGenerated}</span>
                  <p>Average Credit Generated</p>
                </Grid>
                <Grid className={`${classes.enegen}`}></Grid>
                <Grid textAlign="center">
                  <span>{plant.energyGenerated}</span>
                  <p>Energy Generated</p>
                </Grid>
                </Grid>
              </Grid>

              {/* Second Card */}
              <Grid container item xs={12} md={6}>
              <Grid item className={`${classes.cardalt}`}>
                <Grid textAlign="center">
                  <span>{plant.tariffInfo}</span>
                  <p>Average Credit Generated</p>
                </Grid>
                <Grid className={`${classes.enegen}`}></Grid>
                <Grid textAlign="center">
                  <span>{plant.energyGenerated}</span>
                  <p>Energy Generated</p>
                </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} padding={2}>
            <Swiper 
            modules={[Pagination, Autoplay]} 
            pagination={{ clickable: true }} 
            autoplay={{ delay: 3000 }} 
            loop   
            >
              {images.map((src, index) => (
                <SwiperSlide key={index} className={`${classes.sliderbtn}`}>
                  <img src={src} alt={`Slide ${index + 1}`} className={`${classes.imgggg}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      ))}

      {/* About Project Section */}
      {demoData.map((plant) => (
        <Grid container justifyContent="space-between" padding={2} alignItems="center" key={plant.id}>
          <h2 className={`${classes.about}`}>About Project</h2>
          {/* <button className={classes.booknowBtn}>
            Book Now
          </button> */}
            {/* <div className='w-full font-bold text-primary-Color2 text-start'> */}
            <Button variant="contained" color="success" size="small" className="btnStyle roundedBtn" onClick={handleClick}> Book Now </Button>
            {/* </div> */}
        </Grid>
      ))}

      {/* Project Description */}
      {demoData.map((plant) => (
        <Grid container padding={2} key={plant.id}>
          <ul className={`${classes.aboutlist}`}>
            {plant.aboutProject.map((point, index) => (
              <li className={`${classes.aboutlistlii}`} key={index}>{point}</li>
            ))}
          </ul>
        </Grid>
      ))}

      {/* Summary Section */}
      {demoData.map((plant) => (
        <Grid container alignItems="center" padding={2} key={plant.id}>
          <h2 className={`${classes.summary}`}>Summary</h2>
          <Grid flexGrow={1} height="1px" bgcolor="#D3D3D3" marginX={5}></Grid>
        </Grid>
      ))}

      {/* Summary Grid */}
      <Grid container className={`${classes.summ}`}>
  <Grid container spacing={2} textAlign="center">
    {[
      { icon: "/assets/icons/capacity.svg", label: "Capacity", value: demoData[0].capacity },
      { icon: "/assets/icons/tenure.svg", label: "Tenure Years", value: demoData[0].tenure },
      { icon: "/assets/icons/extrainfo.svg", label: "Extra Info", value: demoData[0].extraInfo },
      { icon: "/assets/icons/projectstatus.svg", label: "Project Status", value: demoData[0].projectStatus }
    ].map((item, index) => (
      <Grid item xs={12} sm={6} md={3} key={index} display="flex" alignItems="center">
        <img src={item.icon} alt={item.label} width={40} height={40} />
        <Grid display="flex" flexDirection="column" ml={1}>
        <p className={`${classes.labell}`}>
            {item.label}
          </p>
          <p className={`${classes.valuee}`}>
            {item.value}
          </p>
        </Grid>
      </Grid>
    ))}
  </Grid>
</Grid>
    </Grid>
  );
};

export default PlantDetails;
