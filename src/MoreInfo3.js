function MoreInfo3() {
  return (
    <div className="container">
      <div className="main-content">
        <section className="about">
          <h2>SmartLift</h2>
 
         <p> <i> Development June 2025 - October 2025 MVP/Beta Release (Expected)</i> </p>
         <br />
         <p>You can follow development as I post on LinkedIn </p>
         <br/>
          <p>
            <strong>SmartLift</strong> is a cross-platform mobile app designed
            to streamline and enhance the workout planning experience. It offers
            a robust set of features for tracking workouts, building custom
            routines, and managing fitness progress over time. SmartLift
            intelligently prevents scheduling conflicts—such as training the
            same muscle group on back-to-back days—helping users build
            sustainable routines that support optimal recovery.
            <br />
            <br />
            <strong>SmartLift+</strong> unlocks premium features including
            recovery-aware scheduling, advanced workout templates, progress
            analytics, and a built-in fitness chatbot powered by AI. These tools
            are designed to personalize each user’s fitness journey and help
            them stay consistent, informed, and motivated.
          </p>

          <br />

          <h3>Tech Stack</h3>
          <p>
            SmartLift tech stack is as follows:
            <ul>
              <li>
                <strong>Frontend:</strong> React Native (via Expo), JavaScript,
                Zustand (state management), AsyncStorage (local caching)
              </li>
              <li>
                <strong>Backend:</strong> FastAPI (Python), Pydantic for data
                validation, optional SQLAlchemy for ORM, Docker for
                containerized deployment
              </li>
              <li>
                <strong>Database & Auth:</strong> Supabase (PostgreSQL,
                email/password & OAuth authentication, JWT-based sessions)
              </li>
              <li>
                <strong>Chatbot Integration:</strong> OpenAI API (GPT-3.5) via a
                custom API layer for fitness-specific prompts and usage tracking
              </li>
            </ul>
          </p>

          <br />

          <h3>Key Features</h3>
          <ul>
       
            <li>
              Workout planning with core logic and intelligent conflict
              prevention
            </li>
            <li>Training goal selection to personalize plan generation</li>
            <li>Save, edit, and reuse custom workout splits</li>
            <li>Basic progress tracking and workout history</li>
            <li>
              User authentication via email/password and social logins (OAuth)
            </li>
            <li>Local caching for offline access and session persistence</li>
            <li>
              <strong>Premium-only:</strong> Recovery-aware scheduling
            </li>
            <li>
              <strong>Premium-only:</strong> AI-powered fitness chatbot
            </li>
            <li>
              <strong>Premium-only:</strong> Curated workout templates and
              advanced analytics
            </li>
            <li>
              <strong>Premium-only:</strong> Subscription management for
              SmartLift+
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
export default MoreInfo3;
