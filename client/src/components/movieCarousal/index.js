import React from 'react'
import Slider from "react-slick";

import { settings } from './config'
import { MockData } from './MockData'
import './style.css'

const MovieCarousal = () => {
  return (
    <Slider {...settings}>
        {
            MockData.map((data, index) => (
                <div key={index} className='product__slider'>
                    <img src={data.image} alt=''/>
                    <h5>{data.title}</h5>
                    <p>{data.genre}</p>
                </div>
            ))
        }
    </Slider>
  )
}

export default MovieCarousal