import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section className="location-section" data-aos="fade-up">
      <div className="location-wrapper">
        <h3 className="location-title">📍 Where We Are?</h3>
        <div className="location-content">
          <div className="location-text">
            <h6>Our Store – Gdańsk, Wrzeszcz</h6>
            <p>
              You can find our store at the modern shopping center located at{" "}
              <strong>Kościuszki 10, Gdańsk</strong>. We are open all year round, offering a wide selection of fashion and footwear.
            </p>
          </div>

          <div className="location-map">
            <iframe
              title="Store Location Gdańsk Wrzeszcz"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.2572341076895!2d18.585478415962517!3d54.37338688020315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd75a78b8b8d5f%3A0x1e8fd1057c2f110!2sKo%C5%9Bciuszki%2010%2C%2080-451%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1682452366239!5m2!1spl!2spl"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
