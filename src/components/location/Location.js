import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section className="location-section" data-aos="fade-up">
      <div className="location-wrapper">
        <h2 className="location-title">📍 Gdzie trenujemy?</h2>
        <div className="location-content">
          <div className="location-text">
            <h3>Gdańsk – Wrzeszcz</h3>
            <p>
              Nasze treningi odbywają się na nowoczesnym, pełnowymiarowym boisku
              przy <strong>ul. Kościuszki 10</strong>. Obiekt jest oświetlony, ogrodzony i dostępny przez cały rok.
            </p>
          </div>

          <div className="location-map">
            <iframe
              title="Boisko Gdańsk Wrzeszcz"
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
