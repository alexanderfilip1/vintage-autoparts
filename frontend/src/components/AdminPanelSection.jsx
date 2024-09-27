import React, { useState, useEffect } from "react";
import "../assets/css/AdminPanelSection.css";

export default function AdminPanelSection() {
  const [settings, setSettings] = useState({});
  const [categories, setCategories] = useState([]);
  const [parts, setParts] = useState([]);
  const [visitors, setVisitors] = useState({});
  const [notification, setNotification] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editingCategoryName, setEditingCategoryName] = useState("");

  useEffect(() => {
    fetchSettings();
    fetchCategories();
    fetchParts();
    fetchVisitors();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/site-data");
      const data = await response.json();
      setSettings(data[0]);
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/categories");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log("Fetched categories:", data); // Debugging line
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchParts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/parts");
      const data = await response.json();
      setParts(data);
    } catch (error) {
      console.error("Error fetching parts:", error);
    }
  };

  const fetchVisitors = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/log-visit");
      const data = await response.json();
      setVisitors(data);
    } catch (error) {
      console.error("Error fetching visitors:", error);
    }
  };

  const updateSettings = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/site-data", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sitename: settings.sitename,
          phone_number: settings.phone_number,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setNotification("Settings updated successfully!");
        fetchSettings();
      } else {
        setNotification(`Error updating settings: ${data.message}`);
      }
    } catch (error) {
      setNotification(`Error updating settings: ${error.message}`);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory) {
      setNotification("Category name cannot be empty.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category_name: newCategory }),
      });

      if (response.ok) {
        setNotification("Category added successfully!");
        setNewCategory("");
        fetchCategories();
      } else {
        const data = await response.json();
        setNotification(`Error adding category: ${data.message}`);
      }
    } catch (error) {
      setNotification(`Error adding category: ${error.message}`);
    }
  };

  const handleEditCategory = async (id) => {
    if (!editingCategoryName) {
      setNotification("Category name cannot be empty.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/categories/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category_name: editingCategoryName }),
        }
      );

      if (response.ok) {
        setNotification("Category updated successfully!");
        setEditingCategoryId(null);
        setEditingCategoryName("");
        fetchCategories();
      } else {
        const data = await response.json();
        setNotification(`Error updating category: ${data.message}`);
      }
    } catch (error) {
      setNotification(`Error updating category: ${error.message}`);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/categories/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setNotification("Category deleted successfully!");
        fetchCategories();
      } else {
        const data = await response.json();
        setNotification(`Error deleting category: ${data.message}`);
      }
    } catch (error) {
      setNotification(`Error deleting category: ${error.message}`);
    }
  };

  return (
    <div className="admin-panel main-bg">
      <h1>Admin Panel</h1>

      {notification && <div className="notification">{notification}</div>}

      <section className="card">
        <h2>Visitor Statistics</h2>
        <p>Visitors in last 24 hours: {visitors.last24h}</p>
        <p>Visitors in last 7 days: {visitors.last7d}</p>
        <p>Visitors in last 30 days: {visitors.last30d}</p>
      </section>

      <section className="card">
        <h2>Settings</h2>
        <input
          type="text"
          value={settings.sitename || ""}
          onChange={(e) =>
            setSettings({ ...settings, sitename: e.target.value })
          }
          placeholder="Site Name"
        />
        <input
          type="text"
          value={settings.phone_number || ""}
          onChange={(e) =>
            setSettings({ ...settings, phone_number: e.target.value })
          }
          placeholder="Phone Number"
        />
        <button onClick={updateSettings}>Update Settings</button>
      </section>

      <section className="card">
        <h2>Categories</h2>
        <ul>
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category.id}>
                {editingCategoryId === category.id ? (
                  <>
                    <input
                      type="text"
                      value={editingCategoryName}
                      onChange={(e) => setEditingCategoryName(e.target.value)}
                      placeholder="Edit Category"
                    />
                    <button onClick={() => handleEditCategory(category.id)}>
                      Save
                    </button>
                    <button onClick={() => setEditingCategoryId(null)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    {category.category_name}
                    <div className="buttons">
                      <button
                        onClick={() => {
                          setEditingCategoryId(category.id);
                          setEditingCategoryName(category.category_name);
                        }}
                      >
                        Edit
                      </button>
                      <button onClick={() => handleDeleteCategory(category.id)}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))
          ) : (
            <li>No categories available.</li>
          )}
        </ul>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add New Category"
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </section>

      <section className="card">
        <h2>Parts</h2>
        <ul>
          {parts.map((part) => (
            <li key={part.id}>
              {part.name}
              <button onClick={() => {}}>Edit</button>
              <button onClick={() => {}}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => {}}>Add Part</button>
      </section>
    </div>
  );
}
