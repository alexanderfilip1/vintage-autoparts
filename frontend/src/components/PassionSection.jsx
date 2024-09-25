import React from "react";
import image1 from "../assets/images/passion-1.webp";
import image2 from "../assets/images/passion-2.webp";
import "../assets/css/PassionSection.css";

export default function PassionSection() {
  return (
    <section className="passion__section container">
      <div className="passion__item">
        <img src={image1} alt="Passion 1" className="passion__image" />
        <div className="passion__text">
          <h1>Passion for</h1>
          <p>
            At our vintage car parts store, we&apos;re driven by a passion for
            preserving the heritage of these timeless machines
          </p>
        </div>
      </div>
      <div className="passion__item passion-2">
        <img src={image2} alt="Passion 2" className="passion__image" />
        <div className="passion__text">
          <h1>Timeless Elegance</h1>
          <p>
            Experience the beauty and power of vintage cars with our carefully
            curated selection of parts. From rare and hard-to-find components to
            essential maintenance
          </p>
        </div>
      </div>
    </section>
  );
}
