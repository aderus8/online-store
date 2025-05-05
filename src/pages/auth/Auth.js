import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Auth.css';
import { useTheme } from '../../context/ThemeContext';

const Auth = () => {
  const { theme } = useTheme();
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, [theme, isLogin]);

  return (
    <div
      key={theme}
      className={`auth-container ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}
    >
      <div
        className="auth-form-box"
        data-aos={isLogin ? 'zoom-in' : 'zoom-out'}
        data-aos-duration="800"
        data-aos-easing="ease-out-cubic"
        key={isLogin ? 'login' : 'signup'} // powoduje restart animacji
      >
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form className="auth-form">
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && <input type="password" placeholder="Confirm Password" required />}
          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-switch" onClick={handleToggle}>
          {isLogin ? 'Don’t have an account? Sign up' : 'Already have an account? Login'}
        </div>

        <div className="auth-form">
          <div className="social-button">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png"
              alt="Google"
            />
            {isLogin ? 'Login with Google' : 'Sign Up with Google'}
          </div>
          <div className="social-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
            />
            {isLogin ? 'Login with Microsoft' : 'Sign Up with Microsoft'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
