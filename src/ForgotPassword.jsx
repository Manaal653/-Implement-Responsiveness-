// ForgotPassword.jsx - Updated for responsiveness
import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate password reset process
    setMessage("If this email exists, a reset link has been sent!");
    setTimeout(() => navigate("/"), 2500); // Redirect back to login after 2.5s
  };

  return (
    <div className="login-wrapper">
      <div className="center-section">
        <div className="login-card">
          <h2>Forgot Password</h2>
          <p className="note">Enter your email to reset your password.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {message && <p style={{ color: "#191536" }}>{message}</p>}

            <button type="submit" className="primary-btn">
              Send Reset Link
            </button>

            <button
              type="button"
              className="secondary-btn"
              onClick={() => navigate("/")}
            >
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}