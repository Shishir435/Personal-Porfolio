import React from "react";
import "./Services.css";
// import { BsCheckLg } from "react-icons/bs";
import { VscDebugBreakpointLog} from "react-icons/vsc";

function Services() {
  return (
    <>
      <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Web-Design</h3>
            </div>
            <ul className="services__list">
             
               <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>frames a solution or strategy to deliver the best experience to the user</p>
              </li>
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Create user flows, wireframes, prototypes, low-fidelity mockups, and high-fidelity mockups.</p>
              </li>
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Create user-centered designs based on customer voices, user journeys, feedback, and usability discoveries.</p>
              </li>
             
            </ul>
          </article>
          {/* end of Web Design */}
          <article className="service">
            <div className="service__head">
              <h3>Back-End</h3>
            </div>
            <ul className="services__list">
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Database creation, integration, and management</p>
              </li>
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Back-end frameworks to build server-side software</p>
              </li>
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>API integration with database using Web server technologies.</p>
              </li>
             
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Content management system development, deployment, and maintenance.</p>
              </li>
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Backing up and restoring technologies for a website’s files and DB</p>
              </li>
            </ul>
          </article>
          {/* End Of web development */}
          <article className="service">
            <div className="service__head">
              <h3>Front-End</h3>
            </div>
            <ul className="services__list">
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Implementing design for mobile sites</p>
              </li>
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Maintaining software workflow management.</p>
              </li>
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Testing the site for usability and fixing any bugs</p>
              </li>
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Bringing a concept to life with HTML, CSS, and JavaScript</p>
              </li>
              <li>
                <VscDebugBreakpointLog className="services__list_icon" />
                <p>Creating tools that enhance interaction with the site in any browser</p>
              </li>
              
            </ul>
          </article>
          {/* end  of Front-end */}
        </div>
      </section>
    </>
  );
}

export default Services;
