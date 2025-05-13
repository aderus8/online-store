import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaArrowRight, FaSignOutAlt } from 'react-icons/fa';
import { auth } from '../firebase';  // Zakładając, że masz odpowiednią konfigurację firebase
import { signOut } from 'firebase/auth'; // Funkcja do wylogowania
import "./Navbar.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CTAButton from '../button/Button';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(null);  // Stan dla użytkownika

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

  // Sprawdzenie, czy użytkownik jest zalogowany
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Cleanup na odpięcie listenera
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);  // Wylogowanie
      setUser(null);  // Aktualizacja stanu użytkownika
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div>
        <NavLink to="/" className="nav-logo">Logo</NavLink>
      </div>

      {!isMobile && (
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/all-products">All Products</NavLink>
          <NavLink to="/offer">Offer</NavLink>
          {/* <NavLink to="/user-products">User</NavLink> */}
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/new">New</NavLink>
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
        {user ? (
          // Jeśli użytkownik jest zalogowany, wyświetlamy przycisk do wylogowania
          <button onClick={handleSignOut} className="nav-icon">
            <FaSignOutAlt />
          </button>
        ) : (
          // Jeśli użytkownik nie jest zalogowany, wyświetlamy ikonę logowania
          <NavLink to="/auth" className="nav-icon">
            <FaUser />
          </NavLink>
        )}
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
              <div className='h3-nav'>Home</div>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="mobile-link">
              <div className='h3-nav'>About</div>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            <NavLink to="/user-products" onClick={() => setIsMenuOpen(false)} className="mobile-link">
              <div className='h3-nav'>User products</div>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            <NavLink to="/all-products" onClick={() => setIsMenuOpen(false)} className="mobile-link">
              <div className='h3-nav'>All products</div>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            <NavLink to="/offer" onClick={() => setIsMenuOpen(false)} className="mobile-link">
              <div className='h3-nav'>Offer</div>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="mobile-link">
              <div className='h3-nav'>Contact</div>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            <NavLink to="/auth" onClick={() => setIsMenuOpen(false)} className="mobile-link">
              <div className='h3-nav'>Account</div>
              <FaArrowRight className="arrow-icon" />
            </NavLink>

            {user && (
              <div className="mobile-link" onClick={handleSignOut}>
                <div className='h3-nav'>Log out</div>
                <FaSignOutAlt className="arrow-icon" />
              </div>
            )}

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
