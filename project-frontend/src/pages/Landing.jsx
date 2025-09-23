import React from "react";
import HomeBanner from "../components/Landing/HomeBanner/HomeBanner";
import SmartSolar from "../components/Landing/SmartSolar/SmartSolar";
import DigitalSolar from "../components/Landing/DigitalSolar/DigitalSolar";
import ProjectDetails from "../components/Landing/ProjectDetails/ProjectDetails";
// import Card from "../components/Landing/MiddleCard/Card";

const Landing = () => {
  return (
    <>
      {/* <Card /> */}
      <HomeBanner />
      <SmartSolar />
      <DigitalSolar />
      <ProjectDetails />
    </>
  );
};

export default Landing;
