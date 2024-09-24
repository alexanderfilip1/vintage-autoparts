import React from "react";
import banner from "../assets/images/B1sEtNmNlxoIMNHkGfYxxQ-4096x4096.webp";
import "../assets/css/HeroBanner.css";
export default function HeroBanner() {
  return (
    <>
      <section className="hero__banner">
        <img src={banner} alt="" />
      </section>
    </>
  );
}
