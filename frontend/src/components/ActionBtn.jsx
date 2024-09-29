import React from "react";

export default function ActionBtn({ path, icon, text, className }) {
  return (
    <a href={path} className={className || "contact__section--btn"}>
      {icon}
      {text}
    </a>
  );
}
