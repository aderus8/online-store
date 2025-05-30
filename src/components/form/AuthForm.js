import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase"; 
import { useTheme } from "../../context/ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom'; 

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { theme } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); 

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setIsRegister(!isRegister);
    setError(null);  
    setSuccessMessage(null); 
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, [theme, isLogin]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/'); 
      }
    });
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccessMessage('Zarejestrowano pomyślnie!');
        setTimeout(() => setSuccessMessage(null), 3000); 
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccessMessage('Zalogowano pomyślnie!');
        setTimeout(() => setSuccessMessage(null), 3000); 
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className={`auth-form-box ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}
      data-aos={isLogin ? 'zoom-in' : 'zoom-out'}
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
    >
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="hero-video-cta-button">
          {isLogin ? "Log In" : "Register"}
        </button>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="auth-switch" onClick={handleToggle}>
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
        </div>
      </form>

      <div className="auth-form">
        <div className="social-button">
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png"
            alt="Google"
          />
          {isLogin ? 'Log in with Google' : 'Sign up with Google'}
        </div>
        <div className="social-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
          />
          {isLogin ? 'Log in with Microsoft' : 'Sign up with Microsoft'}
        </div>
      </div>

    </div>
  );
}
