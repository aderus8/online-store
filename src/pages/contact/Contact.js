import React, { useState } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import HeaderTyping from '../../components/header/typingHeader/HeaderTyping';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <section className="contact-container">
      <section >
        <HeaderTyping
          title="Let's Get in Touch"
          subtitle="Have a question, feedback, or just want to say hello? Drop us a message!" />

      </section>

         <section className="contact-form">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
           <button className='hero-video-cta-button' to="/submit" variant="gold">
          Send
        </button>
      </form>
       </section>

      <section className="contact-info">
        <div className="contact-item">
          <FaPhone />
          <p>+48 123 456 789</p>
        </div>
        <div className="contact-item">
          <FaEnvelope />
          <p>contact@website.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />
          <p>ul. Przykładowa 1, Warszawa</p>
        </div>
      </section>
    </section>
  );
};

export default Contact;
