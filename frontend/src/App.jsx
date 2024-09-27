import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import "animate.css";
import About from "./pages/AboutPage";
import CategoriesPage from "./pages/CategoriesPage";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<CategoriesPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
