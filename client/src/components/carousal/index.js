import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarousalComponent = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay centerMode>
        <img src='https://imgs.search.brave.com/lnI6Pk2uPPzfCcyphBqsZJyXLpQlopb3ZpbJs52Sf4Q/rs:fit:1214:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/TUlGc3NRSmVvSmVs/bUI4RkdfbFB3SGFD/NSZwaWQ9QXBp' alt=''/>
        <img src='https://imgs.search.brave.com/nQponjURJu0yRjMH9wG7py0b2UTt8F73FqiW5Qg5NNo/rs:fit:1188:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/WGI5NDJSVWh5TjJP/a3BrQ1VPX3ZnSGFD/OSZwaWQ9QXBp' alt=''/>
        <img src='https://imgs.search.brave.com/TJYG5E-LMs7xa6wELUBbGDcEPVswNfrRb1dxaBbd4wI/rs:fit:1214:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/eHNXUC1COXY0dV9l/NXh1QnVWRGl3QUFB/QSZwaWQ9QXBp' alt=''/>
    </Carousel>
  )
}

export default CarousalComponent