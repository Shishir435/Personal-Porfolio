import React from "react";
import "./About.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {ImFolderOpen} from 'react-icons/im'
function About(){

    return(
        <>
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about img" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ Year Working</small>
                        </article>
                        <article className="about__card">
                            <FiUser className="about__icon"/>
                            <h5>Clients</h5>
                            <small>8+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <ImFolderOpen className="about__icon"/>
                            <h5>Projects</h5>
                            <small>10+ Projects</small>
                        </article>
                        
                    </div>
                    <p>Hello, my name is Shishir Chaurasiya, and I am starting a career in Web Designing and Development. I enjoy creating interactive and responsive websites. Please get in touch with me if you have any suggestions.</p>
                        <a href="#contact"  className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
        </>
    );
}

export default About;