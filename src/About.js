import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"; // Ensure you have a CSS file for styling


function About() {

    return (
      <div className={`container`}>   
        <div className="main-content">
  
        <section className="about">
          <h2>About Me</h2>
          <p>Brief description about your skills, university, and interests.</p>
        </section>
        
  
   
      </div>
      </div>
  
  
    );
  
  
}

export default About;
