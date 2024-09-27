import React from "react";

export default function ActionBtn({ path, icon, text }) {
  return (
    <a href={path} className="contact__section--btn">
      {icon}
      {text}
    </a>
  );
}
