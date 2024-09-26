import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Footer.css";
export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__container">
        <div className="footer__copyright">
          <FontAwesomeIcon
            icon={faShoePrints}
            transform="rotate-270"
            className="shoe__icon"
          />{" "}
          <span>© 2024 VintageRevival, Inc. All rights reserved.</span>
        </div>
        <div className="footer__quickLinks">
          <span>Quick Links</span>
          <ul className="footer__quickLinks--list">
            <li className="footer__quickLinks--item">
              <a href="/" className="footer__quickLinks--anchor">
                Home
              </a>
            </li>
            <li className="footer__quickLinks--item">
              <a href="/" className="footer__quickLinks--anchor">
                About
              </a>
            </li>
            <li className="footer__quickLinks--item">
              <a href="/" className="footer__quickLinks--anchor">
                Parts
              </a>
            </li>
            <li className="footer__quickLinks--item">
              <a href="/" className="footer__quickLinks--anchor">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="customer__support">
          <span>Customer Support</span>
          <ul className="customer__support--list">
            <li className="customer__support--item">
              <a href="/" className="customer__support--anchor">
                FAQ
              </a>
            </li>
            <li className="customer__support--item">
              <a href="/" className="customer__support--anchor">
                Shipping
              </a>
            </li>
            <li className="customer__support--item">
              <a href="/" className="customer__support--anchor">
                Returns
              </a>
            </li>
            <li className="customer__support--item">
              <a href="/" className="customer__support--anchor">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="company__info">
          <span>Company Info</span>
          <ul className="customer__support--list">
            <li className="customer__support--item">
              <a href="/" className="customer__support--anchor">
                About Us
              </a>
            </li>
            <li className="customer__support--item">
              <a href="/" className="customer__support--anchor">
                Our Mission
              </a>
            </li>
            <li className="customer__support--item">
              <a href="/" className="customer__support--anchor">
                Partners
              </a>
            </li>
            <li className="customer__support--item">
              <a href="/" className="customer__support--anchor">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
