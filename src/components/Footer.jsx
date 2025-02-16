import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <p>© 2025 Sparjan Raju Purnakanti. All Rights Reserved.</p>
          <p>Passionate Web Developer | ReactJS Enthusiast | Lifelong Learner</p>
        </div>

        <div className="footer-socials">
          <h3>Connect with me:</h3>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Sparju" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href="sparju.p@gmail.com">sparju.p@gmail.com</a></p>
          <p>Phone: (***) ***-**90</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
