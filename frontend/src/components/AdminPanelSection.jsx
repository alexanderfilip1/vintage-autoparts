import React, { useState, useEffect } from "react";
import "../assets/css/AdminPanelSection.css";

export default function AdminPanelSection() {
  const [settings, setSettings] = useState({});
  const [categories, setCategories] = useState([]);
  const [parts, setParts] = useState([]);
  const [visitors, setVisitors] = useState({});

  useEffect(() => {
    fetchSettings();
    fetchCategories();
    fetchParts();
    fetchVisitors();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/settings");
      const data = await response.json();
      setSettings(data);
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchParts = async () => {
    try {
      const response = await fetch("/api/parts");
      const data = await response.json();
      setParts(data);
    } catch (error) {
      console.error("Error fetching parts:", error);
    }
  };

  const fetchVisitors = async () => {
    try {
      const response = await fetch("/api/visits");
      const data = await response.json();
      setVisitors(data);
    } catch (error) {
      console.error("Error fetching visitors:", error);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

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
        <button onClick={() => {}}>Update Settings</button>
      </section>

      <section className="card">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              {category.category_name}
              <button onClick={() => {}}>Edit</button>
              <button onClick={() => {}}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => {}}>Add Category</button>
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
