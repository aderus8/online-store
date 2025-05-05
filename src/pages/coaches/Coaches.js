import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/header/Header';
import "./Coaches.css";
import CardsGroup from '../../components/card/cardsGroup/CardsGroup';
import SectionHeader from '../../components/header/sectionHeader/SectionHeader';

const trainers = [
    {
      name: "Jurgen Klopp",
      role: "Football Coach",
      image: "https://lfc.pl/images/past_managers/100.png?m=1670893850",
      description: "Jurgen specializes in individual training, enhancing technical skills."
    },
    {
      name: "Jurgen Klopp",
      role: "Goalkeeper Coach",
      image: "https://lfc.pl/images/past_managers/100.png?m=1670893850",
      description: "Jurgen is an expert in goalkeeper training, under his guidance you'll achieve mastery."
    },
    {
      name: "Jurgen Klopp",
      role: "Mental Coach",
      image: "https://lfc.pl/images/past_managers/100.png?m=1670893850",
      description: "Jurgen helps build mental strength and concentration in players."
    },
    {
      name: "Jurgen Klopp",
      role: "Physical Coach",
      image: "https://lfc.pl/images/past_managers/100.png?m=1670893850",
      description: "Jurgen specializes in training that enhances endurance and speed."
    },
];


const Coaches = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [animateTrainer, setAnimateTrainer] = useState(false);
  const trainerDetailsRef = useRef(null);

  const handleCardClick = (trainer) => {
    setAnimateTrainer(false);
    setSelectedTrainer(trainer);

    // Krótkie opóźnienie na reset animacji
    setTimeout(() => {
      setAnimateTrainer(true);

      // Scroll do sekcji, wyśrodkowanie względem widoku
      if (trainerDetailsRef.current) {
        const rect = trainerDetailsRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offsetTop = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }, 50);
  };

  

  return (
    <div className="home-container">

        <SectionHeader
        title="Professional support and experience at every level."
        // subtitle="Professional support and experience at every level."
        />

        <CardsGroup trainers={trainers} onCardClick={handleCardClick} />

        {selectedTrainer && (
        <div
          ref={trainerDetailsRef}
          className={`trainer-details ${animateTrainer ? 'active' : ''}`}
        >
          <div className="trainer-info">
            <img
              src={selectedTrainer.image}
              alt={selectedTrainer.name}
              className={`trainer-image fade-in-seq step-1 ${animateTrainer ? 'active' : ''}`}
            />
            <div className="trainer-description">
              <h2 className={`fade-in-seq step-2 ${animateTrainer ? 'active' : ''}`}>
                {selectedTrainer.name}
              </h2>
              <h3 className={`fade-in-seq step-3 ${animateTrainer ? 'active' : ''}`}>
                {selectedTrainer.role}
              </h3>
              <p className={`fade-in-seq step-4 ${animateTrainer ? 'active' : ''}`}>
                {selectedTrainer.description}
              </p>
            </div>
          </div>
        </div>
      )}
    


    </div>
  );
};

export default Coaches;
