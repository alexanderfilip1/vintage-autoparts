import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Returns.css";

export default function Returns({ logo }) {
  return (
    <>
      <div className="main main-bg">
        <Header logo={logo} />
        <main className="main-content">
          <section className="returns-section">
            <h1 className="returns-section__title">Return Policy</h1>
            <p className="returns-section__text">
              We want you to be completely satisfied with your purchase. If you need to return an item, please follow our return process outlined below.
            </p>
            <h2 className="returns-section__subtitle">Return Process</h2>
            <p className="returns-section__text">
              To return an item, please contact our customer service team with your order number and reason for return. We will provide you with a return authorization and shipping instructions.
            </p>
            <!-- Add more return details as needed -->
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
