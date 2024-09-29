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
              <a href="/about" className="footer__link">
                About
              </a>
            </li>
            <li className="footer__item">
              <a href="/shop" className="footer__link">
                Parts
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Customer Support</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/faq" className="footer__link">
                FAQ
              </a>
            </li>
            <li className="footer__item">
              <a href="/shipping" className="footer__link">
                Shipping
              </a>
            </li>
            <li className="footer__item">
              <a href="/returns" className="footer__link">
                Returns
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Company Info</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/about" className="footer__link">
                About Us
              </a>
            </li>
            <li className="footer__item">
              <a href="/our-mission" className="footer__link">
                Our Mission
              </a>
            </li>
            <li className="footer__item">
              <a href="/partners" className="footer__link">
                Partners
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
