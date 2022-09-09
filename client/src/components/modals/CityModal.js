import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { PopularCities, CityImages } from './helper'
import './style.css'

const CityModal = ({
    isOpenCityModal = false,
    selectedCity,
    onSelectCity = () => { }
}) => {
  return (
    <Modal isOpen={isOpenCityModal} size='lg'>
        <ModalHeader>Select Your City...</ModalHeader>
        <ModalBody className='text-center'>
            <b className='cityText'>Popular Cities...</b>
            <div className='city__main'>
              {
                PopularCities.map((city, index) => (
                  <div className='cities__list' key={index} onClick={() => onSelectCity(city)}>
                    <img src={(selectedCity && selectedCity === city) ? `${CityImages[selectedCity + 'Selected']}` : CityImages[city]} alt=''/>
                    <span>{city}</span>
                  </div>
                ))
              }
            </div>
        </ModalBody>
    </Modal>
  )
}

export default CityModal