import react from "react";

function Contact() {
    
return(

    <div className="main-content">
    <div className="contact">
    <h2>Contact</h2>
    <a href="mailto:your-email@example.com">
      <img src="https://img.icons8.com/ios-filled/24/007bff/email.png" alt="Email Icon" />Email</a>
    <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/ios-filled/24/007bff/github.png" alt="GitHub Icon" />
      GitHub
    </a>
    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/ios-filled/24/007bff/linkedin.png" alt="LinkedIn Icon" />
      LinkedIn
    </a>
  </div>
  </div>
);
}

export default Contact;
