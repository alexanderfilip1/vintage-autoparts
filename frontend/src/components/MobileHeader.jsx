import React from "react";
import links from "./Links";
export default function MobileHeader() {
  return (
    <>
      <div className="mobile__nav">
        <ul className="mobile__nav--list">
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
      </div>
    </>
  );
}
