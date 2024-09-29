import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import "animate.css";
import About from "./pages/AboutPage";
import CategoriesPage from "./pages/CategoriesPage";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import useAuthToken from "./hooks/getSiteData";
import FAQ from "./pages/FAQPage";
import Shipping from "./pages/ShippingPage";
import Returns from "./pages/ReturnsPage";
import OurMission from "./pages/OurMissionPage";
import Partners from "./pages/PartnersPage";
function App() {
  const data = useAuthToken();
  const [siteName, setSiteName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    if (data && data.length > 0) {
      setSiteName(data[0].sitename);
      setPhoneNumber(data[0].phone_number);
    }
  }, [data]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage phone={phoneNumber} />} />
        <Route path="/about" element={<About logo={siteName} />} />
        <Route
          path="/shop"
          element={<CategoriesPage logo={siteName} phone={phoneNumber} />}
        />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/faq" element={<FAQ logo={siteName} />} />
        <Route path="/shipping" element={<Shipping logo={siteName} />} />
        <Route path="/returns" element={<Returns logo={siteName} />} />
        <Route path="/our-mission" element={<OurMission logo={siteName} />} />
        <Route path="/partners" element={<Partners logo={siteName} />} />
      </Routes>
    </Router>
  );
}

export default App;
