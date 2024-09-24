import React from "react";
import "../assets/css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <header className="header container">
        <nav className="header__nav">
          <a href="/" className="header__logo">
            <FontAwesomeIcon icon={faShoePrints} transform="rotate-270" />{" "}
            VintageRevival
          </a>
          <ul className="header__list">
            <li className="header__list--item">
              <a href="/" className="header__list--link">
                Home
              </a>
            </li>
            <li className="header__list--item">
              <a href="/" className="header__list--link">
                About
              </a>
            </li>
            <li className="header__list--item">
              <a href="/" className="header__list--link">
                Parts
              </a>
            </li>
            <li className="header__list--item">
              <a href="/" className="header__list--link">
                Contact
              </a>
            </li>
            <li className="header__list--item">
              <div className="burger__menu">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
