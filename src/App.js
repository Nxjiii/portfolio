import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import MoreInfo1 from "./MoreInfo1";
import MoreInfo2 from "./MoreInfo2";
import MoreInfo3 from "./MoreInfo3";

function App() {
  // Dark mode is now the default, so we've removed the toggle

  // Apply dark mode class to body on component mount
  React.useEffect(() => {
    document.body.classList.add("dark-mode");
    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, []);

  return (
    <Router basename="/portfolio">
      <div className="container">
        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/moreinfo1" element={<MoreInfo1 />} />
          <Route path="/moreinfo2" element={<MoreInfo2 />} />
          <Route path="/moreinfo3" element={<MoreInfo3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
