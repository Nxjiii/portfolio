import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  //  dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <Router basename="/portfolio">
      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
        <nav className="toggle-button">
          <button className="toggle-btn" onClick={toggleDarkMode}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
