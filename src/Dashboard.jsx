// Dashboard.jsx - Updated for responsiveness
import React from "react";
import { useAuth } from "./App";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react"; 

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="page-wrapper">
      <div className="glass-card">
        <h1 className="fade-in">👋 Welcome, {user?.name}</h1>
        <p><User className="inline-icon" /> {user?.email}</p>

        <div className="actions">
          <button className="primary-btn" onClick={() => alert("Feature Coming Soon 🚀")}>
            Go to Reports
          </button>
          <button className="primary-btn" onClick={() => alert("Feature Coming Soon 🚀")}>
            Settings
          </button>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <LogOut className="inline-icon" /> Sign Out
        </button>
      </div>
    </div>
  );
}