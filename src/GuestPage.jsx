// GuestPage.jsx - Updated for responsiveness
import React from "react";
import { useAuth } from "./App";
import { useNavigate } from "react-router-dom";
import { Lock, ArrowLeft } from "lucide-react";

export default function GuestPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleBack = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="page-wrapper">
      <div className="glass-card">
        <h1 className="fade-in">🔒 Guest Access</h1>
        <p><Lock className="inline-icon" /> You are browsing in Guest Mode.</p>
        <p className="note">Some features are restricted. Please log in for full access.</p>

        <button className="logout-btn" onClick={handleBack}>
          <ArrowLeft className="inline-icon" /> Back to Login
        </button>
      </div>
    </div>
  );
}