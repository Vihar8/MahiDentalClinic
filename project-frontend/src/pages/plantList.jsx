import React from 'react'
import ContainerAdmin from '../commoncomponents/Container/ContainerAdmin'
import PlantsList from '../components/plant/PlantsList'

const PlantList = () => {
  return (
    <React.Fragment>
        <ContainerAdmin >
            <PlantsList />
        </ContainerAdmin>
    </React.Fragment>
  )
}

export default PlantList
