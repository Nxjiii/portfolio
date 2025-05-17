import React from "react";

function MoreInfo1() {
  return (
    <div className="container">
      <div className="main-content">
        <section className="about">
          <h2>Pure Eats – Final Year Dissertation Project</h2>

          <p>
            <strong>Pure Eats</strong> is a full-stack iOS dietary tracking app
            I developed solo as part of my Computer Science dissertation at the
            University of Westminster (Nov 2024 – May 2025). The goal was to
            address poor user retention in health apps by building a more
            interactive, personalised experience with long-term engagement in
            mind.
          </p>

          <p>
            The app features a conversational AI Chatbot(built with Rasa) to
            deliver real-time dietary advice and nutritional insights, supported
            by daily recipe recommendations, food logging, and personal health
            metric tracking. The project was grounded in academic research
            identifying barriers to adoption and retention in existing apps,
            particularly among beginners.
          </p>

          <p>
            Although early designs included a social component (leaderboards,
            family challenges, etc.), time constraints meant the MVP submitted
            for assessment focused on core features. These community engagement
            features are in progress and planned for post-submission updates.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>
              Conversational dietary advice via a Rasa Chatbot microservice
            </li>
            <li>Daily recipe fetching from the Spoonacular</li>
            <li>Nutritional breakdowns via the USDA FoodData Central API</li>
            <li>Food logging and metric tracking (calories, macros, etc.)</li>
            <li>User authentication and secure data storage using Supabase</li>
            <li>
              RESTful API integration between frontend and chatbot service
            </li>
            <li>Modular microservices architecture</li>
          </ul>

          <h3>Tech Stack</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> React Native, JavaScript, Xcode (iOS
              build)
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express
            </li>
            <li>
              <strong>Database & Auth:</strong> Supabase (PostgreSQL)
            </li>
            <li>
              <strong>AI Chatbot:</strong> Rasa (Python) with custom NLP
              training data
            </li>
            <li>
              <strong>APIs:</strong> Spoonacular (recipes), USDA FoodData
              Central (nutrition)
            </li>
            <li>
              <strong>Architecture:</strong> Microservices with Fetch API
              integration
            </li>
            <li>
              <strong>Dev Tools:</strong> Git (version control), Agile
              methodology, Postman (API testing)
            </li>
          </ul>

          <h3>Project Status</h3>
          <p>
            Submitted in May 2025 and currently awaiting academic grading. The
            app is not yet published to the App Store, but active development
            continues to complete the social features and prepare for potential
            public deployment.
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

export default MoreInfo1;
