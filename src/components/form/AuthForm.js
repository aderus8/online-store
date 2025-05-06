import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";  // Zakładając, że masz odpowiednią konfigurację w firebase.js
import { useTheme } from "../../context/ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom'; // Do przekierowania użytkownika po udanym logowaniu

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { theme } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();  // Do przekierowania użytkownika

  // Funkcja zmieniająca tryb logowania/rejestracji
  const handleToggle = () => {
    setIsLogin(!isLogin);
    setIsRegister(!isRegister);
    setError(null);  // Resetowanie błędów, jeśli przechodzimy między loginem a rejestracją
    setSuccessMessage(null);  // Resetowanie komunikatów sukcesu
  };

  // Inicjalizacja AOS do animacji
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Obsługuje zmianę tematów
  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, [theme, isLogin]);

  // Obsługuje stan zalogowanego użytkownika
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');  // Jeśli użytkownik jest zalogowany, przekierowujemy na stronę główną
      }
    });
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      if (isRegister) {
        // Rejestracja
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccessMessage('Zarejestrowano pomyślnie!');
        setTimeout(() => setSuccessMessage(null), 3000); // Usuwamy wiadomość po 3 sekundach
      } else {
        // Logowanie
        await signInWithEmailAndPassword(auth, email, password);
        setSuccessMessage('Zalogowano pomyślnie!');
        setTimeout(() => setSuccessMessage(null), 3000); // Usuwamy wiadomość po 3 sekundach
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
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
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
          placeholder="Hasło"
          required
        />
        <button type="submit" className="auth-button">
          {isLogin ? "Zaloguj" : "Zarejestruj"}
        </button>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="auth-switch" onClick={handleToggle}>
          {isLogin ? 'Don’t have an account? Sign up' : 'Already have an account? Login'}
        </div>
      </form>

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
  );
}
