import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/FAQ.css";

export default function FAQ({ logo }) {
  return (
    <>
      <div className="main main-bg">
        <Header logo={logo} />
        <main className="main-content">
          <section className="faq-section">
            <h1 className="faq-section__title">Frequently Asked Questions</h1>
            <div className="faq-section__item">
              <h2 className="faq-section__question">
                What is your return policy?
              </h2>
              <p className="faq-section__answer">
                We offer a 30-day return policy on all items. Please refer to
                our Returns page for more details.
              </p>
            </div>
            <div className="faq-section__item">
              <h2 className="faq-section__question">
                Do you ship internationally?
              </h2>
              <p className="faq-section__answer">
                Yes, we ship to most countries around the world. Shipping rates
                and times vary depending on the destination.
              </p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
