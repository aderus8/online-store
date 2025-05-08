import React, { useState, useEffect } from 'react';
import productsDATA from '../../components/productsData';
import './AllProducts.css';
import HeaderTyping from '../../components/header/HeaderTyping';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFilter, FaTimes } from 'react-icons/fa';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  // Filtry
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  
  const toggleFilters = () => setShowFilters(prev => !prev);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
    if (productsDATA && Array.isArray(productsDATA.products)) {
      setProducts(productsDATA.products);
      setFilteredProducts(productsDATA.products);
    }
  }, []);

  // Obsługa zmiany checkboxów i radio
  const handleCheckboxChange = (setter, value) => {
    setter(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  // Zastosuj filtry
  const applyFilters = () => {
    let filtered = [...products];

    if (selectedCompanies.length > 0) {
      filtered = filtered.filter(product => selectedCompanies.includes(product.company));
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }

    if (selectedPrice) {
      filtered = filtered.filter(product => {
        const price = parseFloat(product.price);
        if (selectedPrice === '0-100') return price <= 100;
        if (selectedPrice === '100-200') return price > 100 && price <= 200;
        if (selectedPrice === '200+') return price > 200;
        return true;
      });
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className='all-products-page-container'>
      {showFilters && ( 
      <div className='products-sidebar'>
        <h5 className="sidebar-title">Filters</h5>

        <div className="filter-group">
          <h6>Company</h6>
          {['Nike', 'Adidas', 'Puma'].map(company => (
            <label key={company}>
              <input
                type="checkbox"
                value={company}
                onChange={() => handleCheckboxChange(setSelectedCompanies, company)}
              />
              {company}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h6>Category</h6>
          {['shoes', 'clothes', 'accessories'].map(category => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                onChange={() => handleCheckboxChange(setSelectedCategories, category)}
              />
              {category}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h6>Price</h6>
          {['0-100', '100-200', '200+'].map(range => (
            <label key={range}>
              <input
                type="radio"
                name="price"
                value={range}
                onChange={handlePriceChange}
              />
              {range === '0-100' ? 'up to 100 zł' : range === '100-200' ? '100–200 zł' : 'over 200 zł'}
            </label>
          ))}
        </div>

        <button className="apply-filters-button" onClick={applyFilters}>Zastosuj filtry</button>
      </div>
)}
      <div className='rest-of-page'>
        <HeaderTyping title='All products' />
        <div className='filter-button-section'> 
            <p> Products: {products.length}</p>
            <button onClick={toggleFilters}> 
            {showFilters ? <FaTimes className="icon" /> : <FaFilter className="icon" />}
            {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
          </div>

        <div className='all-products-container'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className='product-card'
         
              >
                <div className='product-image-container'>
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <h3 className="product-name">{product.name}</h3>
                <div className='price-company'>
                  <p className="product-price">{product.price} zł</p>
                  <p className="product-company">{product.company}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Brak produktów spełniających kryteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
