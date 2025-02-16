import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {/* Educational Site Project */}
        <div className="project-card">
          <img src="/assets/project1.jpg" alt="Educational Site" />
          <div className="card-content">
            <p className="preview-text">Educational site for developers</p>
            <div className="overlay">
              <h3>Educational Site for Developers</h3>
              <p>
                A platform designed for developers to learn various languages like React, Java, and others.
                Users can easily access tutorials, resources, and documentation to improve their skills.
              </p>
              <a href="#" className="view-details">View Details</a>
            </div>
          </div>
        </div>

        {/* eCommerce Site Project */}
        <div className="project-card">
          <img src="/assets/project2.jpg" alt="eCommerce Site" />
          <div className="card-content">
            <p className="preview-text">eCommerce platform</p>
            <div className="overlay">
              <h3>eCommerce Application</h3>
              <p>
                An eCommerce platform where users can browse products, add them to the cart, and complete purchases.
                Built with a user-friendly interface and robust back-end integration.
              </p>
              <a href="#" className="view-details">View Details</a>
            </div>
          </div>
        </div>

        {/* Small Business Application */}
        <div className="project-card">
          <img src="/assets/project3.jpg" alt="Small Business App" />
          <div className="card-content">
            <p className="preview-text">Business management app</p>
            <div className="overlay">
              <h3>Small Business Application</h3>
              <p>
                A simple yet powerful application for small businesses to manage inventory, sales, and customer data.
                Helps small businesses streamline operations and improve productivity.
              </p>
              <a href="#" className="view-details">View Details</a>
            </div>
          </div>
        </div>

        {/* You can continue adding more project cards here */}
      </div>
    </section>
  );
}

export default Projects;
