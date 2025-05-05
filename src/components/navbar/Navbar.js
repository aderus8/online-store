import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import "./Navbar.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CTAButton from '../button/Button';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Ustaw początkową wartość
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div>
        <NavLink to="/" className="nav-logo">Logo</NavLink>
      </div>

      {!isMobile && (
        <div className="nav-links">
          <NavLink to="/" end>Coach</NavLink>
          <NavLink to="/about">Offer</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      )}

      <div className="navbar-right-side">
        <div className="nav-theme-toggle-container">
          <button onClick={toggleTheme} className={`theme-toggle ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className="toggle-switch"></div>
          </button>
        </div>
        <NavLink to="/cart" className="nav-icon">
          <FaShoppingCart />
        </NavLink>
        <NavLink to="/auth" className="nav-icon">
          <FaUser />
        </NavLink>
      </div>

      {isMobile && (
        <div className='nav-mobile-right'>
          <div className="nav-theme-toggle-container">
            <button onClick={toggleTheme} className={`theme-toggle ${theme === 'light' ? 'light' : 'dark'}`}>
              <div className="toggle-switch"></div>
            </button>
          </div>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`mobile-nav-links ${isMenuOpen ? 'slide-in' : 'slide-out'}`}>
            <div className="menu-close-box">
              <button className="menu-toggle-open" onClick={toggleMenu} aria-label="Toggle menu" >
                <FaTimes />
              </button>
            </div>

            <NavLink to="/" end onClick={() => setIsMenuOpen(false)} className="mobile-link">
              <span>Home</span>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="mobile-link">
              <span>About</span>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="mobile-link">
              <span>Contact</span>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            <NavLink to="/auth" onClick={() => setIsMenuOpen(false)} className="mobile-link">
              <span>Account</span>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            <div className="nav-mobile-text-box">
              <span className="nav-mobile-text">Take the step that sets you apart. Join our team of dedicated athletes.</span>
            </div>

            <CTAButton to="/auth" variant="gold">
              Get Started
            </CTAButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
