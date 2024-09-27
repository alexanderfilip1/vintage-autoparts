import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HeroBanner from "../components/HeroBanner";
import CollectionSection from "../components/CollectionSection";
import PassionSection from "../components/PassionSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import useAuthToken from "../hooks/getSiteData";

export default function HomePage() {
  const data = useAuthToken();
  const [siteName, setSiteName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const logVisit = async () => {
    try {
      await fetch("http://localhost:3000/api/log-visit", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.log("Error logging visit:", err);
    }
  };

  useEffect(() => {
    logVisit();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      setSiteName(data[0].sitename);
      setPhoneNumber(data[0].phone_number);
    }
  }, [data]);

  return (
    <>
      <div className="main-bg">
        <Header logo={siteName} />
        <main className="main">
          <HeroSection />
          <HeroBanner />
          <CollectionSection />
          <PassionSection />
          <ContactSection phone={phoneNumber} />
          <Footer />
        </main>
      </div>
    </>
  );
}
