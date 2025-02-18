import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css"; // Ensure you have a CSS file for styling
import About from "./About";

function  Home () {

  return (
    <div className={`container`}>
        <div className="header-container">
     <header>
  <h1>Portfolio of Najib Sheikh-Mohamed</h1>
  <p>BsC Computer Science Student | University of Westminster | 2022-2025</p>
  <a href="https://drive.google.com/file/d/1SsgwKN_MJGWTNZWhs90PzuD1c5Xurpuw/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cv-button">
    View CV
  </a>
</header>
</div>

      
      <div className="main-content">

      <section className="projects">
        <div className="project-grid">
        <h2> My Projects</h2>
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Project 1</h3>
            <p>Description of the project.</p>
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </motion.div>
          
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3>Project 2</h3>
            <p>Description of another project.</p>
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3>Project 3</h3>
            <p>Description of another project.</p>
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3>Project 4</h3>
            <p>Description of another project.</p>
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </motion.div>
          
        </div>
      </section>

     

    </div>
    </div>


  );
}

export default Home;
