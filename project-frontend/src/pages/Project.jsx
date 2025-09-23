import React from 'react'
import Projects from '../components/Project/Projects'
import Container from '../commoncomponents/Container/Container'

const Project = () => {
  return location.pathname === "/solar-project" ?(
    <React.Fragment>
        <Container>
             <Projects />
        </Container>
    </React.Fragment>
  ):(

    <React.Fragment>
        {/* <Container> */}
             <Projects />
        {/* </Container> */}
    </React.Fragment>
  )
}

export default Project
