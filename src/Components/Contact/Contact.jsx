import React, { useRef } from "react";
import "./Contact.css";
import { SiGmail } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert(result.text + " Submitted Successfully");
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
          alert(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact_options">
            <article className="contact__option">
              <SiGmail className="contact__option-icon" />
              <h4>Gmail</h4>

              <a
                href="mailto:shishirchaurasiya435@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsTelegram className="contact__option-icon" />
              <h4>Telegram</h4>

              <a
                href="https://t.me/shishir435"
                rel="noreferrer"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail} action="">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id=""
              placeholder="Your Message"
              rows="7"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
