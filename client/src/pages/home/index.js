import React from 'react'
import { Container } from 'reactstrap'
import { Carousal, MovieCarousal } from '../../components'

import './style.css';

const HomePage = () => {

  return (
    <div>
        <Carousal />
        <Container fluid className='home__container'>
          <div className='recommended__movies'>
              <h3>Recommended Movies</h3>
              <MovieCarousal />
          </div>
        </Container>
    </div>
  )
}

export default HomePage