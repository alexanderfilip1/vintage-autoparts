import React, { useState } from "react";
import "../assets/css/AdminLogin.css";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
export default function AdminLogin() {
  useDocumentTitle("Admin | Sign In");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();
  const sendData = async (e) => {
    setError("");
    e.preventDefault();
    const data = { username, password };
    if (username === "" || password === "") {
      setError("Username and password is required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/admin-login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const body = await res.json();
      if (body.status === "error") {
        setError(body.message);
      }
      if (body.status === "success") {
        setNotification(`${body.message}. Redirecting...`);
        setTimeout(() => {
          navigate("/admin");
        }, 2000);
      }
      console.log(body);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="main main-bg admin-login">
      <section className="login__section">
        <form className="login__form" onSubmit={sendData}>
          <h2 className="login__title">Admin Login</h2>
          <label htmlFor="username" className="login__label">
            Username
            <input
              type="text"
              id="username"
              className="login__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="login__label">
            Password
            <input
              type="password"
              id="password"
              className="login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <span className="login__error">{error}</span>}
          {notification && <span className="notification">{notification}</span>}
          <button className="login__button btn" type="submit">
            Log In
          </button>
        </form>
      </section>
    </main>
  );
}
