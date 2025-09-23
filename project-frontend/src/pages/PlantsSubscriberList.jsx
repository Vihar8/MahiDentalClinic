import React from "react";
import ContainerAdmin from "../commoncomponents/Container/ContainerAdmin";
import PlantSubscriberList from "../components/plant/PlantsDetailList/SubscriberDetailsList";

const PlantsDetailList = () => {
  return (
    <React.Fragment>
      <ContainerAdmin>
        <PlantSubscriberList />
      </ContainerAdmin>
    </React.Fragment>
  );
};

export default PlantsDetailList;
