import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import GuestPage from "./GuestPage";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "./ForgotPassword";

// Auth Context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function App() {
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);

  // ✅ Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedGuest = localStorage.getItem("isGuest");

    if (storedUser && storedUser !== "null") {
      setUser(JSON.parse(storedUser));
    }
    if (storedGuest === "true") {
      setIsGuest(true);
    }
  }, []);

  // ✅ Login and save to localStorage
  const login = (userData) => {
    setUser(userData);
    setIsGuest(false);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isGuest", "false");
  };

  // ✅ Guest login and save to localStorage
  const guestLogin = () => {
    setUser(null);
    setIsGuest(true);
    localStorage.setItem("user", "null");
    localStorage.setItem("isGuest", "true");
  };

  // ✅ Logout and clear localStorage
  const logout = () => {
    setUser(null);
    setIsGuest(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isGuest");
  };

  return (
    <AuthContext.Provider value={{ user, isGuest, login, guestLogin, logout }}>
      <Router>
        <Routes>
          {/* Default route goes to login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Login */}
          <Route
            path="/login"
            element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
          />

          {/* Forgot Password */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Guest Page */}
          <Route
            path="/guest"
            element={isGuest ? <GuestPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;