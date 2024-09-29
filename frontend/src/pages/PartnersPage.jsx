import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Partners.css";

export default function Partners({ logo }) {
  return (
    <>
      <div className="main main-bg">
        <Header logo={logo} />
        <main className="main-content">
          <section className="partners-section">
            <h1 className="partners-section__title">Our Partners</h1>
            <p className="partners-section__text">
              We are proud to collaborate with a range of partners who share our
              passion for classic cars. Our partners include:
            </p>
            <ul className="partners-section__list">
              <li className="partners-section__list-item">Partner 1</li>
              <li className="partners-section__list-item">Partner 2</li>
              <li className="partners-section__list-item">Partner 3</li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
