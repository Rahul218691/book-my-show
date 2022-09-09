import React, { Fragment, useCallback, useState } from 'react'
import { Navbar, Container, NavbarBrand, InputGroup, InputGroupText, Input, NavItem, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowDropDownCircle } from 'react-icons/md'
import './nav.css'
import BrandImage from '../../assets/logo.svg'
import { CityModal } from '../index'

const NavComponent = () => {

    const [selectedCity, setSelectedCity] = useState('')
    const [openModal, setIsOpenModal] = useState(false)

    const handleToggleCityModal = useCallback(() => {
        setIsOpenModal(true)
    }, [])

    const handleSelectCity = useCallback((city) => {
        setSelectedCity(city)
        setIsOpenModal(false)
    }, [])

  return (
    <Fragment>
        <Navbar color='dark' dark className='navbar__sticky'>
        <Container className='d-flex nav__container'>
            <NavbarBrand tag={Link} to='/' className='brandImage'>
                <img src={BrandImage} alt="" />
            </NavbarBrand>
            <InputGroup className='searchInput'>
                <InputGroupText>
                    <FaSearch />
                </InputGroupText>
                <Input 
                    placeholder='Search for movies, events...'
                />
            </InputGroup>
            <NavItem onClick={handleToggleCityModal}>
                {selectedCity ? selectedCity : 'Select City'}
                <MdArrowDropDownCircle size={20} className='caratIcon' />
            </NavItem>
            <NavItem className='lg_screen_signIn'>
                <Button color='danger'>
                    SignIn
                </Button>
            </NavItem>
            <NavItem className='sm_screen_search'>
                <FaSearch />
            </NavItem>
            <NavItem className='menu__list'>
                <GiHamburgerMenu size={30}/>
            </NavItem>
        </Container>
    </Navbar>
    <CityModal 
        isOpenCityModal={!selectedCity || openModal}
        onSelectCity={handleSelectCity}
        selectedCity={selectedCity}
    />
    </Fragment>
  )
}

export default NavComponent