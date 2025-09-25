import React from "react";
import HomeBanner from "../components/Landing/HomeBanner/HomeBanner";
import SmartSolar from "../components/Landing/FAQSection/FAQSection";
import DigitalSolar from "../components/Landing/DigitalSolar/DigitalSolar";
import ProjectDetails from "../components/Landing/ProjectDetails/ProjectDetails";
import FAQSection from "../components/Landing/FAQSection/FAQSection";
// import Card from "../components/Landing/MiddleCard/Card";

const Landing = () => {
  return (
    <>
      {/* <Card /> */}
      <HomeBanner />
      <FAQSection />
      <DigitalSolar />
      <ProjectDetails />
    </>
  );
};

export default Landing;
