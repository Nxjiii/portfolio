import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import moreInfo1 from "./MoreInfo1";

function Home() {
  return (
    <div className="container">
      <div className="header-container">
        <header>
          <h1>Portfolio of Najib Sheikh-Mohamed</h1>
          <p>
            BsC Computer Science Student | University of Westminster | 2022-2025
          </p>
          <div className="button-group">
            <a
              href="https://drive.google.com/file/d/1xtJICOfXuhDepuNOcEeEnoovV5R_ml31/view?usp=sharing"
              className="cv-button"
            >
              View CV
            </a>
          </div>
        </header>
      </div>

      <main className="main-content">
        <section className="projects">
          <div className="project-grid">
            <h2>My Projects</h2>
            {[
              {
                title: "Pure Eats",
                description:
                  "iOS application desgined and developed as part of my final year dissertation project.",
                github: "https://github.com/Nxjiii/PureEats",
                moreInfo: "MoreInfo1",
              },
              {
                title: "TravelTales",
                description:
                  "Web application for sharing travel experiences, built for my Advanced server-side programming module.",
                github: "https://github.com/yourusername/project2",
                moreInfo: "MoreInfo2",
              },
            ].map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="button-group">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                  <a href={project.moreInfo} className="more-info">
                    More Info
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="mailto:Najibasm178@gmail.com" className="contact-item">
              <img
                src="https://img.icons8.com/ios-filled/24/007bff/email.png"
                alt="Email Icon"
              />
              Email
            </a>

            <a
              href="https://github.com/Nxjiii"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <img
                src="https://img.icons8.com/ios-filled/24/007bff/github.png"
                alt="GitHub Icon"
              />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/najib-sheikh-mohamed"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <img
                src="https://img.icons8.com/ios-filled/24/007bff/linkedin.png"
                alt="LinkedIn Icon"
              />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
