import React from "react";
import { Link } from "react-router-dom";

const MoreInfo4 = () => {
  return (
    <div className="more-info-container">
      <div className="more-info-content">
        <h1>DevPortfolio</h1>
        <p>
          A modern, responsive portfolio website template for developers with
          customizable sections and interactive elements.
        </p>

        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>Framer Motion</li>
          <li>CSS3</li>
          <li>Responsive Design</li>
        </ul>

        <h2>Key Features</h2>
        <ul>
          <li>Circular project cards with horizontal scrolling</li>
          <li>Responsive design that works on mobile and desktop</li>
          <li>Smooth animations and transitions</li>
          <li>Clean, modern UI with customizable color schemes</li>
          <li>Interactive elements that enhance user experience</li>
        </ul>

        <h2>Development Process</h2>
        <p>
          This portfolio template was designed with a focus on modern UI
          principles and responsive behavior. The circular card design provides
          a unique way to showcase projects while maintaining readability.
          Horizontal scrolling was implemented with device-specific behavior to
          ensure optimal user experience on both desktop and mobile devices.
        </p>

        <div className="more-info-links">
          <a
            href="https://github.com/Nxjiii/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub Repository
          </a>
          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo4;
