import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import MoreInfo1 from "./MoreInfo1";
import MoreInfo2 from "./MoreInfo2";
import MoreInfo3 from "./MoreInfo3";

function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const scrollRef = useRef(null);
  const scrollbarThumbRef = useRef(null);

  const projects = [
    {
      title: "Pure Eats",
      description:
        "iOS application designed and developed as part of my final year dissertation project.",
      github: "https://github.com/Nxjiii/PureEats",
      modalId: "pureEats",
      tags: ["React Native", "Node.js", "Supabase", "Rasa"],
    },
    {
      title: "TravelTales",
      description:
        "Web application for sharing travel experiences, built for my Advanced server-side programming module.",
      github: "https://github.com/Nxjiii/TravelTales",
      modalId: "travelTales",
      tags: ["React", "Express", "MongoDB", "Node.js"],
    },
    {
      title: "QuranMind",
      description:
        "Platform designed to make Quran learning easier, structured, and trackable for students, teachers, madrasahs, and families.",
      github: "https://github.com/Nxjiii/QuranMind",
      modalId: "QuranMind",
      tags: ["React", "React Native", "Node.js", "Supabase"],
    },
  ];

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Handle scroll and update scrollbar thumb position
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || !scrollbarThumbRef.current) return;

      const scrollContainer = scrollRef.current;
      const scrollThumb = scrollbarThumbRef.current;

      // Get scroll dimensions
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      // If there's no scrollable content, hide the thumb
      if (maxScroll <= 0) {
        scrollThumb.style.display = "none";
        return;
      } else {
        scrollThumb.style.display = "block";
      }

      // Calculate scroll percentage (0 to 1)
      const scrollPercentage = scrollLeft / maxScroll;

      // Calculate thumb width as percentage of track (represents visible area)
      const thumbWidthPercentage = Math.max(
        (clientWidth / scrollWidth) * 100,
        10
      ); // minimum 10%

      // Calculate available space for thumb movement
      const availableSpace = 100 - thumbWidthPercentage;

      // Position the thumb
      const thumbPosition = scrollPercentage * availableSpace;

      // Apply styles
      scrollThumb.style.width = `${thumbWidthPercentage}%`;
      scrollThumb.style.left = `${thumbPosition}%`;
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);

      // Also update on window resize
      window.addEventListener("resize", handleScroll);

      // Initialize scrollbar thumb
      handleScroll();

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }
  }, [projects.length]);

  // Scroll to first card on initial render
  useEffect(() => {
    // Wait for DOM to fully render
    const timer = setTimeout(() => {
      // Reset the scroll position first to ensure consistent behavior
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = 0;
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to card on indicator click
  // Handle scrollbar track click
  const handleScrollbarClick = (e) => {
    if (!scrollRef.current || !scrollbarThumbRef.current) return;

    const scrollContainer = scrollRef.current;
    const scrollThumb = scrollbarThumbRef.current;

    // Get click position relative to track
    const trackRect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - trackRect.left;
    const trackWidth = trackRect.width;

    // Get thumb dimensions
    const thumbWidth = scrollThumb.offsetWidth;

    // Calculate where to position the center of the thumb
    const targetThumbCenter = clickX;
    const targetThumbLeft = targetThumbCenter - thumbWidth / 2;

    // Convert to percentage of available movement space
    const availableSpace = trackWidth - thumbWidth;
    const thumbPositionPercentage = Math.max(
      0,
      Math.min(1, targetThumbLeft / availableSpace)
    );

    // Calculate corresponding scroll position
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const newScrollPosition = thumbPositionPercentage * maxScroll;

    // Scroll to the position
    scrollContainer.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
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
          {/* Removed button-group div */}
        </header>
      </div>

      <main className="main-content">
        <section className="projects">
          {/* Removed "My Projects" heading */}

          {/* View CV button moved here */}
          <div className="view-cv-container">
            <a
              href="https://drive.google.com/file/d/1bnbhvopZXYf97LYrgVUAdqRytyeKFQnx/view?usp=drive_link"
              className="cv-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </div>

          {/* Horizontal scrolling project cards */}
          <div className="project-scroll" ref={scrollRef}>
            {projects.map((project, index) => (
              <motion.div
                className="project-card"
                key={index}
                initial={{ scale: 0.9, opacity: 0.8 }}
                whileInView={{ scale: 0.95, opacity: 1 }}
                whileHover={{ scale: 1, rotate: 3 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
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
              </motion.div>
            ))}
          </div>

          {/* Scrollbar replaces indicators */}
          <div className="custom-scrollbar-container">
            <div
              className="custom-scrollbar-track"
              onClick={handleScrollbarClick}
            >
              <div
                className="custom-scrollbar-thumb"
                ref={scrollbarThumbRef}
              ></div>
            </div>
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
