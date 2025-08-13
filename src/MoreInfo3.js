import React from "react";

function MoreInfo3() {
  return (
    <div className="container">
      <div className="main-content">
        <section className="about">
          <h2>QuranMind – Smart Quran Learning Platform</h2>
          <br />
          <p>
            <i>
              QuranMind is a modern platform and app designed to make Quran
              learning easier, structured, and trackable for students, teachers,
              madrasahs, and families.
            </i>
          </p>
          <br />
          <p>
            Think of it as Seneca for the Quran — QuranMind brings smart
            learning tools, homework tracking, progress monitoring, and light
            gamification to the world of Quran education. The platform is built
            to keep individuals engaged and make learning structured, using
            scientifically backed memory recollection and learning techniques.
          </p>
          <p>
            Students can follow a personalised learning journey, complete
            assignments, and track their progress. Teachers and madrasahs can
            assign homework, monitor student performance, and communicate
            easily. Families can support and monitor their children’s Quran
            learning in a transparent, collaborative way.
          </p>
          <br />
          <h3>Key Features</h3>
          <ul>
            <li>Personalised learning journeys for each student</li>
            <li>Homework assignment and tracking for teachers and madrasahs</li>
            <li>Progress monitoring and analytics dashboards</li>
            <li>Smart revision tools based on proven memory techniques</li>
            <li>Light gamification to boost engagement</li>
            <li>Family and teacher collaboration features</li>
            <li>Secure cloud-based data storage</li>
          </ul>
          <br />
          <h3>Tech Stack</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> React, React Native
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express, FastAPI
            </li>
            <li>
              <strong>Database & Auth:</strong> Supabase (PostgreSQL)
            </li>
            <li>
              <strong>APIs:</strong> Custom RESTful APIs
            </li>
            <li>
              <strong>Dev Tools:</strong> Git, Agile methodology, Render
            </li>
          </ul>
          <br />
          <h3>Project Status</h3>
          <p>
            QuranMind is actively being developed and is set to be piloted in UK
            madrasahs. For more details, visit{" "}
            <a
              href="https://www.quranmind.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.quranmind.co.uk
            </a>
            .
          </p>
          <div className="button-group" style={{ marginTop: "2rem" }}>
            <a
              href="https://github.com/Nxjiii/QuranMind"
              className="cv-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="https://www.quranmind.co.uk"
              className="cv-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MoreInfo3;
