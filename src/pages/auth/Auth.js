import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Auth.css';
import { useTheme } from '../../context/ThemeContext';
import AuthForm from '../../components/form/AuthForm';
import HeaderTyping from '../../components/header/typingHeader/HeaderTyping';

const Auth = () => {
  const { theme } = useTheme();

  return (
    <div
      key={theme}
      className={`auth-container ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}   >
      <HeaderTyping title="Start your journey"
        subtitle="Log in or sign up and explore your personal shopping experience." />
      <div>
        <AuthForm />
      </div>

    </div>
  );
};

export default Auth;
