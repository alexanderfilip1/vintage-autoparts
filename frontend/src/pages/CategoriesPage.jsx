import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/CategoriesPage.css";

const ITEMS_PER_PAGE = 9;

export default function CategoriesPage({ logo }) {
  const [partsData, setPartsData] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoriesAndPartsData = async () => {
      try {
        const categoriesResponse = await fetch(
          "http://localhost:3000/api/categories"
        );
        if (!categoriesResponse.ok) {
          throw new Error("Failed to fetch categories");
        }
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        const partsResponse = await fetch("http://localhost:3000/api/parts");
        if (!partsResponse.ok) {
          throw new Error("Failed to fetch parts");
        }
        const partsData = await partsResponse.json();

        const groupedPartsData = categoriesData.reduce((acc, category) => {
          acc[category.category_name] = partsData.filter(
            (part) => part.category_id === category.id
          );
          return acc;
        }, {});

        setPartsData(groupedPartsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesAndPartsData();
  }, []);

  const allParts = Object.values(partsData).flat();

  const filteredParts = (
    selectedCategory === "all" ? allParts : partsData[selectedCategory] || []
  ).filter((part) =>
    part.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredParts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedParts = filteredParts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="main main-bg">
        <Header logo={logo} />
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
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-button ${
                    selectedCategory === category.category_name ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.category_name);
                    setCurrentPage(1);
                  }}
                >
                  {category.category_name.charAt(0).toUpperCase() +
                    category.category_name.slice(1)}
                </button>
              ))}
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
                    src={`http://localhost:3000/${part.image}`}
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
