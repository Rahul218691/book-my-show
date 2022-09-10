import React from 'react'
import { FaTimes, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import './style.css'

const RightDrawer = ({
    refer,
    onTogleDrawer = () => { }
}) => {
  return (
    <div className='drawer' ref={refer}>
        <span onClick={onTogleDrawer} className='closeIcon'>
            <FaTimes size={30}/>
        </span>
        <div className='drawerHeader'>
        </div>
        {/* <hr className='horizontal__line'/> */}
        <div className='drawerLinks'>

        </div>
        <div className='drawerFooter'>
            <span><FaGithub size={25}/></span>
            <span><FaLinkedin size={25}/></span>
            <span><FaGlobe size={25}/></span>
        </div>
    </div>
  )
}

export default RightDrawer