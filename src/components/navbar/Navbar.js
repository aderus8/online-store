import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaSignOutAlt,
  FaHeart
} from 'react-icons/fa';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CTAButton from '../button/Button';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(null);

  // 🔗 Linki
  const commonLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/offer', label: 'Offer' },
    { to: '/all-products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ];

  const userLinks = [
    { to: '/user-products', label: 'My Products' },
    { to: '/cart', label: 'Cart' },
  ];

  const guestLinks = [
    // { to: '/auth', label: 'Account' },
  ];

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
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div>
        {/* <NavLink to="/" className="nav-logo">Logo</NavLink> */}
        {user ? <p> User</p> : <p>Guest</p>}
      </div>

      {!isMobile && (
        <div className="nav-links">
          {[...commonLinks].map(({ to, label }) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))}
        </div>
      )}

      <div className="navbar-right-side">
        <div className="nav-theme-toggle-container">
          <button
            onClick={toggleTheme}
            className={`theme-toggle ${theme === 'light' ? 'light' : 'dark'}`}
          >
            <div className="toggle-switch"></div>
          </button>
        </div>

        <NavLink to="/user-products" className="nav-icon">
          <FaHeart />
        </NavLink>

        <NavLink to="/cart" className="nav-icon">
          <FaShoppingCart />
        </NavLink>

        {user ? (
          <NavLink onClick={handleSignOut} to="/" className="nav-icon">
            <FaSignOutAlt />
          </NavLink>
        ) : (
          <NavLink to="/auth" className="nav-icon">
            <FaUser />
          </NavLink>
        )}
      </div>

      {isMobile && (
        <div className="nav-mobile-right">
          <div className="nav-theme-toggle-container">
            <button
              onClick={toggleTheme}
              className={`theme-toggle ${theme === 'light' ? 'light' : 'dark'}`}
            >
              <div className="toggle-switch"></div>
            </button>
          </div>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`mobile-nav-links ${isMenuOpen ? 'slide-in' : 'slide-out'}`}>
            <div className="menu-close-box">
              <button className="menu-toggle-open" onClick={toggleMenu} aria-label="Close menu">
                <FaTimes />
              </button>
            </div>

            {[...commonLinks, ...(user ? userLinks : guestLinks)].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className="mobile-link"
              >
                <div className="h3-nav">{label}</div>
                <FaArrowRight className="arrow-icon" />
              </NavLink>
              
            ))}

   

            <div className="nav-mobile-text-box">
              <span className="nav-mobile-text">Take the step that sets you apart.</span>
            </div>

              {user && (
              <button className='hero-video-cta-button' onClick={handleSignOut}>
                <div className="h3-nav">Log out</div>
              </button>
            )}

              {!user && (
            <CTAButton to="/auth" variant="gold">
              Get Started
            </CTAButton>
            )}


          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
