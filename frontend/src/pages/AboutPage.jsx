import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image1 from "../assets/images/passion-1.webp";
import image2 from "../assets/images/passion-2.webp";
import "../assets/css/About.css";

export default function About({ logo }) {
  return (
    <>
      <div className="main main-bg">
        <Header logo={logo} />
        <main className="main-content">
          <section className="about-section">
            <h1 className="about-section__title">About Us</h1>
            <p className="about-section__intro">
              Welcome to Classic Auto Parts, your trusted source for
              high-quality autoparts for vintage and classic cars. Our mission
              is to keep the legacy of classic cars alive by providing
              enthusiasts and collectors with the parts they need to restore and
              maintain their beloved vehicles.
            </p>

            <div className="about-section__images">
              <img
                src={image1}
                alt="Classic Car 1"
                className="about-section__image"
              />
              <img
                src={image2}
                alt="Classic Car 2"
                className="about-section__image"
              />
            </div>

            <h2 className="about-section__subtitle">Our Story</h2>
            <p className="about-section__text">
              Founded in 2004, Classic Auto Parts was born out of a passion for
              vintage automobiles. Our founder, Donald Hanson, a lifelong car
              enthusiast, recognized the need for a reliable source of authentic
              autoparts for classic cars. What started as a small business in a
              garage has grown into a comprehensive online store, serving
              customers worldwide.
            </p>

            <h2 className="about-section__subtitle">What We Offer</h2>
            <p className="about-section__text">
              We specialize in providing a wide range of autoparts for vintage
              cars, including:
            </p>
            <ul className="about-section__list">
              <li className="about-section__list-item">Engine components</li>
              <li className="about-section__list-item">
                Suspension and brake parts
              </li>
              <li className="about-section__list-item">Electrical systems</li>
              <li className="about-section__list-item">
                Interior and exterior trim
              </li>
              <li className="about-section__list-item">
                Rare and hard-to-find parts
              </li>
            </ul>
            <p className="about-section__text">
              Each part is meticulously sourced and tested to ensure it meets
              our high standards of quality and authenticity.
            </p>

            <h2 className="about-section__subtitle">Why Choose Us?</h2>
            <p className="about-section__text">
              At Classic Auto Parts, we are more than just a store. We are a
              community of car lovers dedicated to preserving the history and
              heritage of classic automobiles. Here’s why our customers trust
              us:
            </p>
            <ul className="about-section__list">
              <li className="about-section__list-item">
                <strong>Expert Knowledge:</strong> Our team is comprised of
                classic car experts who are always ready to help you find the
                right part for your vehicle.
              </li>
              <li className="about-section__list-item">
                <strong>Quality Assurance:</strong> We stand by the quality of
                our parts, ensuring they meet the original specifications.
              </li>
              <li className="about-section__list-item">
                <strong>Customer Service:</strong> We pride ourselves on
                providing exceptional customer service, from the moment you
                visit our site to the delivery of your parts.
              </li>
              <li className="about-section__list-item">
                <strong>Global Reach:</strong> No matter where you are, we can
                ship our parts to you, ensuring that vintage car enthusiasts
                around the world have access to the best parts available.
              </li>
            </ul>

            <h2 className="about-section__subtitle">Get In Touch</h2>
            <p className="about-section__text">
              Have questions or need assistance? Our friendly team is here to
              help. Contact us at [contact information], and let us help you
              keep your classic car running smoothly.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
