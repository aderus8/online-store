import React, { useState, useRef, useEffect } from 'react';


const About = () => {


  return (
    <div className="App">
    <header>
      <h1>To jest Nagłówek H1</h1>
      <h2>To jest Nagłówek H2</h2>
      <h3>To jest Nagłówek H3</h3>
      <h4>To jest Nagłówek H4</h4>
      <h5>To jest Nagłówek H5</h5>
      <h6>To jest Nagłówek H6</h6>
    </header>

    <section>
      <p>
        To jest przykładowy paragraf. Zawiera normalny tekst, który będzie miał
        rozmiar czcionki zależny od szerokości ekranu dzięki użyciu funkcji{" "}
        <code>clamp()</code>.
      </p>

      <p>
        <span>Span może być użyty w tekście wewnątrz paragrafu, np. do wyróżnienia fragmentu tekstu.</span>
      </p>

      <p>
        A tutaj <small>mały tekst</small> o mniejszym rozmiarze czcionki.
      </p>
    </section>

    <footer>
      <p>To jest stopka</p>
    </footer>
  </div>
  )
};

export default About;
