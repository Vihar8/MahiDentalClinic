import React from 'react'
import ContainerAdmin from '../commoncomponents/Container/ContainerAdmin'
import PlantsDetails from '../components/plant/PlantsDetailList/PlantsDetailList'

const PlantsDetailList = () => {
  return (
    <React.Fragment>
        <ContainerAdmin >
        <PlantsDetails />
        </ContainerAdmin>
    </React.Fragment>
  )
}

export default PlantsDetailList
