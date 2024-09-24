import React, { useState } from "react";
import "../assets/css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import links from "./Links";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <>
      <header className="header container">
        <nav className="header__nav">
          <a href="/" className="header__logo">
            <FontAwesomeIcon icon={faShoePrints} transform="rotate-270" />{" "}
            VintageRevival
          </a>
          <ul className="header__list">
            {links.map((item) => {
              const { id, text, icon, path } = item;
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
            <FontAwesomeIcon icon={faBars} className="burger__menu" />
          </span>
          {burgerMenu && <MobileHeader />}
        </nav>
      </header>
    </>
  );
}
