import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPanelSection from "../components/AdminPanelSection";
export default function AdminPanel() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const checkIfAdmin = async () => {
    try {
      const req = await fetch("http://localhost:3000/api/checkAdmin", {
        method: "GET",
        credentials: "include",
      });
      const body = await req.json();
      if (!body.admin) {
        setTimeout(() => {
          navigate("/admin/login");
        }, 1500);
      }
      setIsAdmin(body.admin);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    checkIfAdmin();
  }, []);
  return <>{isAdmin ? <AdminPanelSection /> : "Not an admin!"}</>;
}
