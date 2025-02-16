import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hello! I'm Sparjan Raju Purnakanti, a passionate and results-driven Web Developer specializing in building dynamic and interactive web applications using <strong>React.js</strong>. With a deep understanding of modern web technologies, I craft seamless, user-friendly websites that offer exceptional experiences across all devices.
        </p>

        <h3>My Skills</h3>
        <ul>
          <li><strong>React.js:</strong> Advanced knowledge of React.js, including hooks, state management (Redux), and component architecture. I build scalable and maintainable applications.</li>
          <li><strong>JavaScript:</strong> Strong JavaScript skills with a focus on ES6+ features like async/await, promises, and arrow functions.</li>
          <li><strong>Front-End Technologies:</strong> Proficient in HTML5, CSS3, and responsive design principles to ensure websites look great on all screen sizes.</li>
          <li><strong>Version Control:</strong> Extensive experience with Git, ensuring collaboration and version control are seamless.</li>
          <li><strong>APIs and Backend Integration:</strong> Expertise in working with RESTful APIs and integrating back-end services to create dynamic and data-driven web apps.</li>
          <li><strong>UI/UX Design:</strong> I also have a keen eye for design, ensuring that the interfaces I create are intuitive and user-centric.</li>
        </ul>

        <h3>What I Do</h3>
        <p>
          I specialize in creating <strong>single-page applications (SPAs)</strong> and <strong>progressive web apps (PWAs)</strong> using React.js. Whether you're a startup looking to launch your first website or an enterprise aiming to scale, I bring my deep knowledge of front-end technologies to deliver solutions that are fast, efficient, and visually appealing.
        </p>
        <p>
          I also keep myself updated with the latest trends in web development, learning new tools and frameworks that help enhance both the user and developer experience. From developing intuitive UIs to optimizing performance, I am focused on delivering the best possible web solutions.
        </p>

        <h3>Let's Collaborate</h3>
        <p>
          If you're looking for a skilled React.js developer to bring your ideas to life, I'm here to help. I believe in continuous learning, collaboration, and delivering clean, well-documented code. <strong>Feel free to reach out to discuss your next project</strong> – I’d love to work with you and turn your ideas into reality.
        </p>
      </div>

      <div className="skills">
        <div className="skill">
          <h3>HTML</h3>
          <div className="progress-bar">
            <div className="progress html"></div>
          </div>
        </div>
        <div className="skill">
          <h3>CSS</h3>
          <div className="progress-bar">
            <div className="progress css"></div>
          </div>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
          <div className="progress-bar">
            <div className="progress js"></div>
          </div>
        </div>
        <div className="skill">
          <h3>ReactJs</h3>
          <div className="progress-bar">
            <div className="progress React"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
