import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HeroBanner from "../components/HeroBanner";
import CollectionSection from "../components/CollectionSection";
import PassionSection from "../components/PassionSection";
import ContactSeciton from "../components/ContactSection";
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
          <ContactSeciton />
        </main>
      </div>
    </>
  );
}
