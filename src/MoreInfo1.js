import React from "react";

function MoreInfo1() {
  return (
    <div className="container">
      <div className="main-content">
        <section className="about">
          <h2>Pure Eats – Final Year Dissertation Project</h2>

          <br />
          <p>
            <i>Development: Nov 2024 - May 2025</i>
          </p>
          <br />
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

          <br />
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

          <br />
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

          <br />
          <h3>Project Status</h3>
          <p>
            Total development time was approximately 6 months, with the project
            submitted in May 2025. The final year dissertation was graded at 70%
          </p>

          <div className="button-group" style={{ marginTop: "2rem" }}>
            <a
              href="https://drive.google.com/file/d/1mrc5ZSpeDaUNG1rlO3oNZ0PLCIaTQORy/view?usp=sharing"
              className="cv-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report
            </a>
            <a
              href="https://drive.google.com/file/d/1bmg_XYnoZbmYaN8TfJC8ortwUOHTwrZ1/view?usp=sharing"
              className="cv-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test Cases
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MoreInfo1;
