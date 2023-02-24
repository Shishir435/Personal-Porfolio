import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import "./Footer.css"
const date = new Date().getFullYear();

function Footer(){
    return (
        <>
        <footer>
            <a href="#header" className='footer__logo'>SHISHIR</a>
            <ul className='premalinks'>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://github.com/Shishir435" rel='noreferrer' target='_blank'><BsGithub /></a>
                <a href="https://instagram.com/_shishir435" rel='noreferrer' target='_blank'><BsInstagram /></a>
                <a href="https://www.linkedin.com/in/shishir-chaurasiya-b3b7ab234/" rel='noreferrer' target='_blank'><BsLinkedin /></a>
            </div>
            <div className="footer__copyright">Copyright &copy;Shishir {date}</div>
        </footer>
        </>
    );
}

export default Footer;