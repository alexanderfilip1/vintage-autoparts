import React from "react";
import links from "./Links";
import "../assets/css/MobileHeader.css";

export default function MobileHeader() {
  return (
    <div className="mobile__nav">
      <ul className="mobile__nav--list">
        {links.map((item) => {
          const { id, text, icon, path } = item;
          return (
            <li className="mobile__nav--item" key={id}>
              <a href={path} className="mobile__nav--link">
                {icon && <span className="mobile__nav--icon">{icon}</span>}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
