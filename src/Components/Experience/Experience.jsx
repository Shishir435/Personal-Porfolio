import React from 'react'

import "./Experience.css"
import {SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiNodedotjs} from 'react-icons/si'
function Experience(){
    return (
        <>
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">

                <div id='experience__frontend' className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiHtml5  className='experience__details_icon' />
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiCss3 className='experience__details_icon'/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiJavascript className='experience__details_icon' />
                            <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiReact  className='experience__details_icon'/>
                            <div>
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiBootstrap  className='experience__details_icon'/>
                            <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiTailwindcss  className='experience__details_icon'/>
                            <div>
                            <h4>Tailwind</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                   <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiNodedotjs  className='experience__details_icon'/>
                            <div>
                            <h4>Node Js</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiExpress  className='experience__details_icon'/>
                            <div>
                            <h4>Express</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>   
                        <article className="experience__details">
                            <SiMongodb  className='experience__details_icon'/>
                            <div>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>  
                        <article className="experience__details">
                            <SiMysql  className='experience__details_icon'/>
                            <div>
                            <h4>MySQL</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiJavascript  className='experience__details_icon'/>
                            <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>   
                    </div>
                </div>

                

            </div>
        </section>
        </>
    );
}

export default Experience;