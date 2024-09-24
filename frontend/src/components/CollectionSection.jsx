import React from "react";
import "../assets/css/CollectionSection.css";
import collection1 from "../assets/images/collection-1.webp";
import collection2 from "../assets/images/collection-2.webp";
import collection3 from "../assets/images/collection-3.webp";

const images = [
  {
    img: collection1,
    description:
      "Retro orange and green vintage car with a convertible roof, front and side view, on a minimalist background.",
  },
  {
    img: collection2,
    description:
      "Classic green and white vintage car from the mid-20th century, side view, on a plain circular background.",
  },
  {
    img: collection3,
    description:
      "Stylized illustration of a vintage car front view, with a minimalist design and abstract background.",
  },
];

export default function CollectionSection() {
  return (
    <>
      <section className="collection__section container">
        <div className="collection__section--text">
          <h1>Discover Our Collection</h1>
          <p>
            Explore our extensive inventory of vintage car parts, including
            engines, transmissions, suspension components, and more. Whether
            you&apos;re restoring a classic or maintaining your beloved ride, we
            have the parts you need to keep your vintage car on the road
          </p>
        </div>
        <ul className="collection__section--list">
          {images.map((image, index) => {
            const { img } = image;
            return (
              <li key={index} className="collection__section--listItem">
                <img src={img} loading="lazy" alt="Classic vintage car" />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
