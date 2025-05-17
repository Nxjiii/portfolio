import React from "react";

function MoreInfo2() {
  return (
    <div className="container">
      <div className="main-content">
        <section className="about">
          <h2>
            TravelTales – Social Travel Blog Platform (Coursework Project)
          </h2>

          <p>
            <strong>TravelTales</strong> is a full-stack social blogging
            platform built as part of my Advanced Server-Side Web Programming
            coursework at the University of Westminster. This project was
            delivered across two major parts: a secure authentication
            microservice (Coursework 1), and a client-facing blogging platform
            with integrated API usage (Coursework 2).
          </p>

          <p>
            The platform allows users to create and share travel stories through
            multimedia blog posts, while engaging with others via comments and
            likes. It supports dynamic content rendering, user profile
            management, and keyword-based post discovery — all with a modular
            and scalable architecture following MVC principles.
          </p>

          <h3>Coursework 1 – Backend Microservice</h3>
          <ul>
            <li>
              Implemented full JWT authentication with secure session/token
              handling
            </li>
            <li>
              API key generation and management, linked to authenticated users
            </li>
            <li>
              Endpoints for user registration, login, update, deletion, and
              token blacklisting
            </li>
            <li>
              Blog-related endpoints: create, update (PUT), and delete posts
            </li>
            <li>
              Secure password hashing and account protection with database-level
              controls
            </li>
            <li>
              Modular Flask blueprint structure for clean separation of concerns
            </li>
          </ul>

          <h3>Coursework 2 – Web Application</h3>
          <ul>
            <li>Rich blog post creation with text and image support</li>
            <li>Real-time user interaction through likes and comments</li>
            <li>
              Session-based login with protected routes and role-based access
              control
            </li>
            <li>Searchable feed using country filtering</li>
            <li>
              Frontend rendered using EJS templates and styled with custom CSS
            </li>
            <li>Dynamic behaviors handled using modular EJS JavaScript</li>
          </ul>

          <h3>Tech Stack</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> HTML, CSS, JavaScript (ES Modules), EJS
            </li>
            <li>
              <strong>Backend:</strong> Python, Flask (modular blueprint
              structure)
            </li>
            <li>
              <strong>Database:</strong> SQLite (for development), JWT blacklist
              and relational user-post schema
            </li>
            <li>
              <strong>Authentication:</strong> JWT, API Keys, password hashing
              with security best practices
            </li>
            <li>
              <strong>Architecture:</strong> Microservices for auth/API,
              MVC-inspired routing in main app
            </li>
            <li>
              <strong>Dev Tools:</strong> Git, Postman, Flask Debug Toolbar
            </li>
          </ul>

          <h3>Project Status</h3>
          <p>
            TravelTales is functionally complete as per coursework requirements
            and runs locally. Future goals include refactoring the project for
            portfolio use under a new name, migrating to a production-ready
            database, adding persistent image storage, and implementing
            real-time features like notifications and follower systems.
          </p>
        </section>

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
    </div>
  );
}

export default MoreInfo2;
