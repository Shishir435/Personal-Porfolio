import React from "react";
import "./Services.css";
import { BsCheckLg } from "react-icons/bs";

function Services() {
  return (
    <>
      <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UX/UI</h3>
            </div>
            <ul className="services__list">
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/* end of UX/UI */}
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="services__list">
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/* End Of web development */}
          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>
            <ul className="services__list">
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheckLg className="services__list_icon" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/* end  of contention */}
        </div>
      </section>
    </>
  );
}

export default Services;
