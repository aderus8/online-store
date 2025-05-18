// components/routes/AuthRedirect.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthRedirect = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Jeśli użytkownik zalogowany, przekieruj go gdzieś (np. na stronę główną)
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return !user ? children : null; // renderuj tylko jeśli nie ma usera
};

export default AuthRedirect;
