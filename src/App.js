import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Dropdown menu icon
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  // Close dropdown when clicking outside
  const handleOutsideClick = (event) => {
    if (!event.target.closest(".dropdown-container")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <Router>
      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <nav className="navbar">
  <div className="nav-left">
    <button className="dropdown-btn" onClick={(e) => { 
      e.stopPropagation(); 
      setDropdownOpen(!dropdownOpen); 
    }}>
      <FaBars /> Menu
    </button>

    {dropdownOpen && (
      <div className="dropdown-menu dropdown-container" onClick={(e) => e.stopPropagation()}>
        <NavLink to="/" end onClick={() => setDropdownOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setDropdownOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={() => setDropdownOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>
          Contact
        </NavLink>
      </div>
    )}
  </div>

  {/* Dark Mode Toggle */}
  <button className="toggle-btn" onClick={toggleDarkMode}>
    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
  </button>
</nav>


        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
