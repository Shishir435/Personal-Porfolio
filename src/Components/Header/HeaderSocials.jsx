import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub}  from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import './Header.css'
 function HeaderSocials()  {
  return (

    <>
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/shishir-chaurasiya-b3b7ab234/" rel="noreferrer" target="_blank" ><BsLinkedin /></a>
        <a href="https://github.com/Shishir435" rel="noreferrer" target="_blank" ><BsGithub /></a>
        <a href="https://instagram.com/_shishir435" rel="noreferrer" target="_blank" ><BsInstagram /></a>
    </div>
    </>
  )
}

export default HeaderSocials;
