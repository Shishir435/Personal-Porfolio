import React, {useState} from 'react'
import "./Nav.css"
import {AiTwotoneHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBookBookmark} from "react-icons/bi"
import {RiServiceFill} from "react-icons/ri"
import {AiFillPhone} from "react-icons/ai"

function Nav(){
    const [activeNav, setActiveNav]= useState('#');
    return (
        <>
        <nav>
            <a href="/" onClick={()=>{setActiveNav('#')}} className={activeNav === "#"? 'active' : ''}><AiTwotoneHome /></a>
            <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav === "#about"? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={()=>{setActiveNav('#experience')}} className={activeNav === "#experience"? 'active' : ''}><BiBookBookmark/></a>
            <a href="#services" onClick={()=>{setActiveNav('#services')}} className={activeNav === "#services"? 'active' : ''}><RiServiceFill /></a>
            <a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === "#contact"? 'active' : ''}><AiFillPhone /></a>
        </nav>
        </>
    );
}

export default Nav;