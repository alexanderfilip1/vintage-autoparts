import React from "react";
import "../assets/css/ContactSection.css";
import banner from "../assets/images/contact.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import ActionBtn from "./ActionBtn";

export default function ContactSection({ phoneNumber }) {
  return (
    <section className="contact__section container">
      <h1 className="contact__section--title">Connect with Us</h1>
      <ActionBtn
        path={`tel:${phoneNumber}`}
        icon={<FontAwesomeIcon icon={faPhoneVolume} />}
        text={"Call Now"}
      />
      <img
        src={banner}
        className="contact__section--img"
        alt="Green vintage car"
      />
    </section>
  );
}
