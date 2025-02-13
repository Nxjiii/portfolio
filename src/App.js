import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Your Name</h1>
        <p>Computer Science Student | Web Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>Brief description about your skills, university, and interests.</p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project 1</h3>
            <p>Description of the project.</p>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>Description of another project.</p>
          </li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>GitHub: <a href="https://github.com/yourusername">yourusername</a></p>
      </section>
    </div>
  );
}

export default App;
