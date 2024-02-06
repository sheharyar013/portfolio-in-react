import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+92 3019530415";
    const encodedNumber = encodeURIComponent(phoneNumber);
    if (navigator.userAgent.includes("WhatsApp")) {
      window.open(`whatsapp://send?phone=${encodedNumber}`);
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${encodedNumber}`);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4
              style={{
                width: "250px",
              }}
            >
              Email
            </h4>
            <h5>sheharyarbutt013@gmail.com</h5>
            <a href="mailto:sheharyarbutt013@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4
              style={{
                width: "250px",
              }}
            >
              Messenger
            </h4>
            <h5>Sheharyar</h5>
            <a
              href="https://www.linkedin.com/in/sheharyar-butt-7bb01718b/"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4
              style={{
                width: "250px",
              }}
            >
              Whatsapp
            </h4>
            <h5>+923019530415</h5>
            <a href="/" onClick={handleWhatsAppClick} target="_blank">
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
