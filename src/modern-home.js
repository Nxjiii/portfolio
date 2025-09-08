import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./modern-portfolio.css";
import MoreInfo1 from "./MoreInfo1";
import MoreInfo2 from "./MoreInfo2";
import MoreInfo3 from "./MoreInfo3";

function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "Pure Eats",
      description:
        "iOS application designed and developed as part of my final year dissertation project.",
      github: "https://github.com/Nxjiii/PureEats",
      modalId: "pureEats",
      tags: ["React Native", "Node.js", "Supabase", "Rasa"]
    },
    {
      title: "TravelTales",
      description:
        "Web application for sharing travel experiences, built for my Advanced server-side programming module.",
      github: "https://github.com/Nxjiii/TravelTales",
      modalId: "travelTales",
      tags: ["React", "Express", "MongoDB", "Node.js"]
    },
    {
      title: "QuranMind",
      description:
        "Platform designed to make Quran learning easier, structured, and trackable for students, teachers, madrasahs, and families.",
      github: "https://github.com/Nxjiii/QuranMind",
      modalId: "QuranMind",
      tags: ["React", "React Native", "Node.js", "Supabase"]
    },
  ];

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
  
  // Handle scroll indicators
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth / 1.5;
      const newIndex = Math.round(scrollPosition / cardWidth);
      
      setActiveIndex(Math.min(newIndex, projects.length - 1));
    };
    
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [projects.length]);
  
  // Scroll to card on indicator click
  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 1.5;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container">
      <div className="header-container">
        <header>
          <h1>Portfolio of Najib Sheikh-Mohamed</h1>
          <p>
            BSc Computer Science Graduate | University of Westminster |
            2022-2025
          </p>
          <div className="button-group">
            <a
              href="https://drive.google.com/file/d/1sCfYRbsCJNlWxTvUS0YJoWLLnRF5_2RF/view?usp=drive_link"
              className="cv-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </div>
        </header>
      </div>

      <main className="main-content">
        <section className="projects">
          <h2>My Projects</h2>
          
          {/* Horizontal scrolling project cards */}
          <div className="project-scroll" ref={scrollRef}>
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="button-group">
                  <a
                    href={project.github}
                    className="github-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <button
                    className="more-info"
                    onClick={() => openModal(project.modalId)}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="scroll-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`scroll-indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-contact">
            <h2>Contact</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:Najibasm178@gmail.com" className="contact-item">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/email.png"
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
                src="https://img.icons8.com/ios-filled/24/ffffff/github.png"
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
                src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
                alt="LinkedIn Icon"
              />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modals */}
      {activeModal === "pureEats" && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
            <MoreInfo1 />
          </div>
        </div>
      )}

      {activeModal === "travelTales" && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
            <MoreInfo2 />
          </div>
        </div>
      )}

      {activeModal === "QuranMind" && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
            <MoreInfo3 />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
