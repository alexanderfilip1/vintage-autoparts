import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__link">
                Home
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                About
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Parts
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Customer Support</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__link">
                FAQ
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Shipping
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Returns
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Company Info</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__link">
                About Us
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Our Mission
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Partners
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <FontAwesomeIcon
          icon={faShoePrints}
          className="footer__icon"
          transform="rotate-270"
        />
        <span>© 2024 VintageRevival, Inc. All rights reserved.</span>
      </div>
    </footer>
  );
}
