import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/OurMission.css";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
export default function OurMission({ logo }) {
  useDocumentTitle("Our Mission");
  return (
    <>
      <div className="main main-bg">
        <Header logo={logo} />
        <main className="main-content">
          <section className="mission-section">
            <h1 className="mission-section__title">Our Mission</h1>
            <p className="mission-section__text">
              At Classic Auto Parts, our mission is to preserve the history and
              heritage of classic automobiles by providing high-quality,
              authentic parts to enthusiasts and collectors worldwide.
            </p>
            <h2 className="mission-section__subtitle">Our Commitment</h2>
            <p className="mission-section__text">
              We are committed to sourcing the best parts and providing
              exceptional customer service to ensure your classic car remains in
              top condition for years to come.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
