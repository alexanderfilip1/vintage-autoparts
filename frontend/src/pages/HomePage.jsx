import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HeroBanner from "../components/HeroBanner";
import CollectionSection from "../components/CollectionSection";
import PassionSection from "../components/PassionSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <>
      <div className="main-bg">
        <Header />
        <main className="main">
          <HeroSection />
          <HeroBanner />
          <CollectionSection />
          <PassionSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
