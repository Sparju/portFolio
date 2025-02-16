import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS SDK

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!name || !email || !message) {
      setSuccessMessage('Please fill out all fields.');
      return;
    }

    // Use EmailJS to send form data
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    // Replace these values with your actual IDs
    emailjs.send('service_wkv9gvm', 'template_pj9ns45', templateParams, 'user'  // You can now omit the User ID or use the default 'user_' prefix
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Thank you for your message! I\'ll get back to you shortly.');
        // Reset form fields after submission
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.log('FAILED...', err);
        setSuccessMessage('Something went wrong. Please try again later.');
      });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="input-container">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="input-container">
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  );
}

export default Contact;
