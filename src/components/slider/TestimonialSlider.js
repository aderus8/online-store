import React, { useEffect } from 'react';
import './TestimonialSlider.css';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: "Kacper",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The shoes I bought are incredibly comfortable, and the delivery was super fast! I’ll definitely be shopping here again.",
  },
  {
    name: "Michał",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "I found the perfect jacket for the season. The quality is top-notch and it fits perfectly. I love this store!",
  },
  {
    name: "Ola",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Great selection of sneakers! The colors and designs are exactly what I was looking for, and the size was spot on.",
  },
  {
    name: "Bartek",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Amazing customer service! They helped me choose the right size, and the clothes fit perfectly. Highly recommend.",
  },
  {
    name: "Julia",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "I absolutely love my new outfit! The fabric is so comfortable, and the entire shopping experience was seamless.",
  },
  {
    name: "Michał",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Thanks to the fantastic recommendations, I found the perfect boots for winter. I'm so happy with my purchase!",
  },
  {
    name: "Ola",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The online shopping experience was so smooth. The shoes arrived on time, and I love how they feel. Will shop again soon!",
  },
  {
    name: "Bartek",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Great quality at affordable prices! The jacket I bought is stylish and warm, perfect for the winter months.",
  },
  {
    name: "Julia",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "I was looking for trendy yet comfortable clothing, and I found just what I needed here. My new wardrobe is perfect!",
  },
];


const TestimonialSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="testimonial-slider" id="testimonials">
      <div className="testimonial-slider-container">
        <h3 data-aos="fade-up">What Clients Say</h3>
        <div className="testimonial-card-slider" data-aos="fade-up">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <img src={t.img} alt={t.name} className="testimonial-avatar" />
              <h6>{t.name}</h6>
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
