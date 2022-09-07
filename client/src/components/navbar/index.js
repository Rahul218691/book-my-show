import React, { useState } from 'react'
import { Navbar, Container, NavbarBrand, InputGroup, InputGroupText, Input, NavItem, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import './nav.css'
import BrandImage from '../../assets/logo.svg'

const NavComponent = () => {

    const [selectedCity, setSelectedCity] = useState('Select City')

  return (
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
            <NavItem>
                {selectedCity}
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
  )
}

export default NavComponent