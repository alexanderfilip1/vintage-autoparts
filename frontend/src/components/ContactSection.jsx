import React from "react";
import "../assets/css/ContactSection.css";
import banner from "../assets/images/contact.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection({ phoneNumber }) {
  return (
    <section className="contact__section container">
      <h1 className="contact__section--title">Connect with Us</h1>
      <a href={`tel:${phoneNumber}`} className="contact__section--btn">
        <FontAwesomeIcon icon={faPhoneVolume} />
        Call Now
      </a>
      <img
        src={banner}
        className="contact__section--img"
        alt="Green vintage car"
      />
    </section>
  );
}
