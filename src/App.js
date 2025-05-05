import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Footer from './components/footer/Footer';
import Coaches from './pages/coaches/Coaches';
import Auth from './pages/auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <div className="page-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/coaches" element={<Coaches />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
