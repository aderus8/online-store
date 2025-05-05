import React, { useEffect } from 'react';
import './TestimonialSlider.css';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: "Kacper",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Training sessions are focused and professional. I improved quickly.",
  },
  {
    name: "Michał",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Thanks to these sessions, I finally got selected to my dream team.",
  },
  {
    name: "Ola",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Very supportive coaching. I gained both confidence and strength.",
  },
  {
    name: "Bartek",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Professional environment, fun and challenging. Highly recommend!",
  },
  {
    name: "Julia",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "Mental training helped me stay calm during key matches.",
  },
  {
    name: "Michał",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Thanks to these sessions, I finally got selected to my dream team.",
  },
  {
    name: "Ola",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Very supportive coaching. I gained both confidence and strength.",
  },
  {
    name: "Bartek",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Professional environment, fun and challenging. Highly recommend!",
  },
  {
    name: "Julia",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "Mental training helped me stay calm during key matches.",
  },
];

const TestimonialSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="testimonial-slider" id="testimonials">
      <div className="testimonial-slider-container">
        <h2 data-aos="fade-up">What Athletes Say</h2>
        <div className="testimonial-card-slider" data-aos="fade-up">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <img src={t.img} alt={t.name} className="testimonial-avatar" />
              <h3>{t.name}</h3>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="gold" />
                ))}
              </div>
              <p>"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
