import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { Navbar, Container, NavbarBrand, InputGroup, InputGroupText, Input, NavItem, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowDropDownCircle } from 'react-icons/md'
import './nav.css'
import BrandImage from '../../assets/logo.svg'
import { CityModal, RightDrawer } from '../index'

const NavComponent = () => {

    const [selectedCity, setSelectedCity] = useState('')
    const [openModal, setIsOpenModal] = useState(false)
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const drawerRef = useRef()

    const handleToggleCityModal = useCallback(() => {
        setIsOpenModal(true)
    }, [])

    const handleToggleDrawer = useCallback(() => {
        setIsOpenDrawer(prev => !prev)
    }, [])

    const handleSelectCity = useCallback((city) => {
        setSelectedCity(city)
        setIsOpenModal(false)
    }, [])

    useEffect(() => {
        if (isOpenDrawer) {
            drawerRef.current.style.width = "300px";
        } else {
            drawerRef.current.style.width = "0px";
        }
    }, [isOpenDrawer])

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
            {
                !isOpenDrawer && <NavItem className='menu__list' onClick={handleToggleDrawer}>
                <GiHamburgerMenu size={30} />
            </NavItem>
            }
        </Container>
    </Navbar>
    <CityModal 
        isOpenCityModal={!selectedCity || openModal}
        onSelectCity={handleSelectCity}
        selectedCity={selectedCity}
    />
    <RightDrawer 
        refer={drawerRef}
        onTogleDrawer={handleToggleDrawer}
    />
    </Fragment>
  )
}

export default NavComponent