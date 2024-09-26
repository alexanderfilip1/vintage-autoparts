import React, { useState } from "react";
import "../assets/css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"; // Import faTimes for the close icon
import links from "./Links";
import MobileHeader from "./MobileHeader";

export default function Header({ logo }) {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <>
      <header className="header container">
        <nav className="header__nav">
          <a href="/" className="header__logo">
            <FontAwesomeIcon icon={faShoePrints} transform="rotate-270" />{" "}
            {logo}
          </a>
          <ul className="header__list">
            {links.map((item) => {
              const { id, text, path } = item;
              return (
                <li className="header__list--item" key={id}>
                  <a href={path} className="header__list--link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          <span
            className="burger__menu--icon"
            onClick={() => {
              setBurgerMenu(!burgerMenu);
            }}
          >
            <FontAwesomeIcon
              icon={burgerMenu ? faTimes : faBars}
              className="burger__menu"
            />
          </span>
          {burgerMenu && <MobileHeader />}
        </nav>
      </header>
    </>
  );
}
