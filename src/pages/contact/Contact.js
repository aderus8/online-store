import React, { useState } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import CTAButton from '../../components/button/Button';
import Header from '../../components/header/HeaderTyping';
import HeaderTyping from '../../components/header/HeaderTyping';

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
    console.log(formData); // Przykładowe logowanie danych formularza
  };

  return (
    <section className="contact-container">


      <section >
      <HeaderTyping
        title="Contact Us"
        subtitle="Have questions? Write to us — we’re happy to help!" />

      </section>

{/* 
      {/* Druga sekcja z formularzem */}
      {/* <section className="contact-form">
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
           <CTAButton to="/signup" variant="gold">
          Get Started
        </CTAButton>
          {/* <button type="submit">Wyślij</button> */}
        {/* </form> */}
      {/* </section> */} 

      {/* Trzecia sekcja z danymi kontaktowymi */}
      <section className="contact-info">
        <div className="contact-item">
          <FaPhone />
          <p>+48 123 456 789</p>
        </div>
        <div className="contact-item">
          <FaEnvelope />
          <p>kontakt@twojastrona.pl</p>
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
