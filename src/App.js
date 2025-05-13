import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Auth from './pages/auth/Auth';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './components/context/AuthContext';
import './App.css';
import AllProducts from './pages/allProducts/AllProducts';
import UserProducts from './components/UserProduct';
import Offer from './pages/offer/Offer';
import ProductDetails from './pages/productDetails/ProductDetails';
import NewPage from './pages/contact/NewPage';
import ShoesPage from './pages/shoes/ShoesPage';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth" />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <ScrollToTop />
          <div className="page-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<NewPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth" element={<Auth />} />
                
                {/* Nowe trasy: */}
                <Route path="/user-products" element={
                  <PrivateRoute>
                    <UserProducts />
                  </PrivateRoute>
                } />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/shoes" element={<ShoesPage />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                {/* <Route path="/offer/:id" element={<Offer />} /> */}
        
              </Routes>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
