import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/CategoriesPage.css";

const partsData = {
  mercedes: [
    { name: "Mercedes Part 1", image: "mercedes1.jpg" },
    { name: "Mercedes Part 2", image: "mercedes2.jpg" },
  ],
  bmw: [
    { name: "BMW Part 1", image: "bmw1.jpg" },
    { name: "BMW Part 2", image: "bmw2.jpg" },
  ],
  audi: [
    { name: "Audi Part 1", image: "audi1.jpg" },
    { name: "Audi Part 2", image: "audi2.jpg" },
  ],
};

const allParts = [...partsData.mercedes, ...partsData.bmw, ...partsData.audi];

const ITEMS_PER_PAGE = 9;

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredParts = (
    selectedCategory === "all" ? allParts : partsData[selectedCategory]
  ).filter((part) =>
    part.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredParts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedParts = filteredParts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="main main-bg">
        <Header />
        <main className="main-content">
          <section className="categories-section">
            <h1>Categories</h1>
            <div className="categories-buttons">
              <button
                className={`category-button ${
                  selectedCategory === "all" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("all");
                  setCurrentPage(1);
                }}
              >
                All Parts
              </button>
              <button
                className={`category-button ${
                  selectedCategory === "mercedes" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("mercedes");
                  setCurrentPage(1);
                }}
              >
                Mercedes
              </button>
              <button
                className={`category-button ${
                  selectedCategory === "bmw" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("bmw");
                  setCurrentPage(1);
                }}
              >
                BMW
              </button>
              <button
                className={`category-button ${
                  selectedCategory === "audi" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("audi");
                  setCurrentPage(1);
                }}
              >
                Audi
              </button>
            </div>
            <input
              type="text"
              placeholder="Filter parts..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="filter-input"
            />
            <div className="parts-list">
              {paginatedParts.map((part, index) => (
                <div key={index} className="part-item">
                  <img
                    src={part.image}
                    alt={part.name}
                    className="part-image"
                  />
                  <div className="part-name">{part.name}</div>
                </div>
              ))}
            </div>
            <div className="pagination-buttons">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
