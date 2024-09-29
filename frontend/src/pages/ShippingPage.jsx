import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Shipping.css";

export default function Shipping({ logo }) {
  return (
    <>
      <div className="main main-bg">
        <Header logo={logo} />
        <main className="main-content">
          <section className="shipping-section">
            <h1 className="shipping-section__title">Shipping Information</h1>
            <p className="shipping-section__text">
              We offer various shipping options to meet your needs. Standard
              shipping typically takes 5-7 business days, while expedited
              options are available for faster delivery.
            </p>
            <h2 className="shipping-section__subtitle">
              International Shipping
            </h2>
            <p className="shipping-section__text">
              International shipping rates and times vary by destination. Please
              enter your address at checkout to see the available options.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
