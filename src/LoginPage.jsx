// LoginPage.jsx - Updated for mobile layout
import React, { useState } from "react";
import "./LoginPage.css";
import botImage from "./OneScreen.png";
import users from "./users.json";
import { useAuth } from "./App";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login, guestLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      login(foundUser);
      navigate("/dashboard");
    } else {
      setError("Invalid credentials.");
    }
  };

  const handleGuest = () => {
    guestLogin();
    navigate("/guest");
  };

  return (
    <div className="login-wrapper">
      {/* Background Circles + Stars */}
      <div className="bg-elements">
        <div className="circle circle1 outer"></div>
        <div className="circle circle1 inner"></div>

        <div className="circle circle2 outer"></div>
        <div className="circle circle2 inner"></div>

        <div className="circle circle3 outer"></div>
        <div className="circle circle3 inner"></div>

        {/* Stars around background */}
        <div className="stars">
          <span style={{ top: "4.3%", left: "20%", width: "6px", height: "6px" }}></span>
          <span style={{ top: "2%", left: "20.5%", width: "4.5px", height: "4.5px" }}></span>
          <span style={{ top: "6.5%", left: "19.5%", width: "4.5px", height: "4.5px"}}></span>
          <span style={{ top: "6.5%", left: "21%", width: "4.5px", height: "4.5px" }}></span>

          <span style={{ top: "24%", left: "45.7%", width: "6px", height: "6px"  }}></span>
          <span style={{ top: "26.5%", left: "47%", width: "4.5px", height: "4.5px" }}></span>
          <span style={{ top: "30%", left: "45.5%",width: "4.5px", height: "4.5px"}}></span>

          <span style={{ top: "28%", left: "39.1%", width: "4.5px", height: "4.5px" }}></span>
          <span style={{ top: "29.5%", left: "40%", width: "3.5px", height: "3.5px" }}></span>
          <span style={{ top: "33%", left: "38.7%", width: "3.5px", height: "3.5px" }}></span>

          <span style={{ top: "58.1%", left: "33.1%", width: "4.5px", height: "4.5px" }}></span>
          <span style={{ top: "56.5%", left: "32%", width: "3.5px", height: "3.5px"}}></span>
          <span style={{ top: "61%", left: "32.7%", width: "3.5px", height: "3.5px" }}></span>
          <span style={{ top: "61.5%", left: "30%", width: "3.5px", height: "3.5px" }}></span>

          <span style={{ top: "71%", left: "35%",width: "6px", height: "6px"  }}></span>
          <span style={{ top: "67%", left: "37%", width: "4.5px", height: "4.5px" }}></span>
          <span style={{ top: "73.5%", left: "34%", width: "4.5px", height: "4.5px"}}></span>
          <span style={{ top: "74%", left: "36%", width: "4.5px", height: "4.5px" }}></span>

          <span style={{ top: "87%", left: "55.5%",width: "6px", height: "6px" }}></span>
          <span style={{ top: "84%", left: "56.5%",width: "4.5px", height: "4.5px" }}></span>
          <span style={{ top: "89%", left: "57%", width: "4.5px", height: "4.5px"}}></span>
          <span style={{ top: "90%", left: "55%",width: "4.5px", height: "4.5px" }}></span>

          <span style={{ top: "59%", left: "59.5%", width: "6px", height: "6px" }}></span>
          <span style={{ top: "54%", left: "60%", width: "4.5px", height: "4.5px" }}></span>
          <span style={{ top: "56%", left: "58.5%",width: "4.5px", height: "4.5px"}}></span>

          <span style={{ top: "87%", left: "91.7%", width: "6px", height: "6px"  }}></span>
          <span style={{ top: "90%", left: "91.7%", width: "4.5px", height: "4.5px"}}></span>
          <span style={{ top: "84%", left: "93%",width: "4.5px", height: "4.5px"}}></span>
          <span style={{ top: "85%", left: "90%", width: "4.5px", height: "4.5px"}}></span>

          <span style={{ top: "5.3%", left: "84%", width: "6px", height: "6px"  }}></span>
          <span style={{ top: "3%", left: "83%", width: "4.5px", height: "4.5px" }}></span>
          <span style={{ top: "7%", left: "85%", width: "4.5px", height: "4.5px"}}></span>
          <span style={{ top: "8%", left: "82%",width: "4.5px", height: "4.5px" }}></span>

          <span style={{ top: "50%", left: "96.5%", width: "6px", height: "6px"  }}></span>
          <span style={{ top: "48%", left: "95%", width: "4.5px", height: "4.5px" }}></span>
          <span style={{ top: "53%", left: "95.5%",width: "4.5px", height: "4.5px"}}></span>
          <span style={{ top: "49%", left: "98%", width: "4.5px", height: "4.5px" }}></span>

          <span style={{ top: "69.5%", left: "16%",width: "4.5px", height: "4.5px" }}></span>
          <span style={{ top: "72%", left: "16.5%", width: "4px", height: "4px" }}></span>

          <span style={{ top: "66%", left: "9%", width: "4px", height: "4px" }}></span>
          <span style={{ top: "68.5%", left: "8.5%", width: "4.5px", height: "4.5px" }}></span>

          <span style={{ top: "18%", left: "3.7%", width: "6px", height: "6px" }}></span>
          <span style={{ top: "20.5%", left: "4%", width: "4px", height: "4px" }}></span>
          <span style={{ top: "22%", left: "2.5%", width: "4.5px", height: "4.5px" }}></span>
        </div>
      </div>

      {/* Left Section with Bot + Title */}
      <div className="left-section">
        <div className="robot-text-container">
          <div className="robot-container">
            <img src={botImage} alt="Bot" className="robot-img" />
            {/* Stars near the bot */}
            <div className="star star1"></div>
            <div className="star star2"></div>
          </div>
          <div className="text-area side-text">
            <h1>OneScreen Sage</h1>
            <p>
              Your All in One <b>OneScreen</b> Guide
            </p>
          </div>
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="right-section">
        <div className="login-card">
          <h2>Log in</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>

            {error && <p style={{ color: "#191536" }}>{error}</p>}

            <button type="submit" className="primary-btn">
              Login
            </button>
            <div className="divider">OR</div>
            <button
              type="button"
              className="secondary-btn"
              onClick={handleGuest}
            >
              Use as Guest
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}