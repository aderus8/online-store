import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Auth.css';
import { useTheme } from '../../context/ThemeContext';
import AuthForm from '../../components/form/AuthForm';

const Auth = () => {
  const { theme } = useTheme();

  return (
    <div
      key={theme}
      className={`auth-container ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}
    >
      <div>
        <AuthForm />
      </div>
     
    </div>
  );
};

export default Auth;
