import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const location = useLocation(); // hook używany wewnątrz Routera

  useEffect(() => {
    window.scrollTo(0, 0); // Przewiń stronę na górę przy każdej zmianie lokalizacji
  }, [location]);

  return null; // Ten komponent nie renderuje nic
};

export default ScrollToTop;
