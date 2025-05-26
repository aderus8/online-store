import React, { useState, useEffect } from 'react';
import productsDATA from '../../components/productsData';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFilter, FaTimes } from 'react-icons/fa';
import './AllProducts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductCard from '../../components/product/productCard/ProductCard';
import { useNavigate, useLocation } from 'react-router-dom';

const AllProducts = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);

  const [allCompanies, setAllCompanies] = useState([]);
  const [allColors, setAllColors] = useState([]);
  const [allSizes, setAllSizes] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allGenders, setAllGenders] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleFilters = () => setShowFilters(prev => !prev);
  const toggleMobileFilters = () => setShowMobileFilters(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setShowFilters(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowFilters(false);
      setShowMobileFilters(false);
    } else {
      setShowFilters(true);
    }
  }, [isMobile]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

    if (productsDATA && Array.isArray(productsDATA.products)) {
      const allProducts = productsDATA.products;
      setProducts(allProducts);
      setFilteredProducts(allProducts);

      setAllCompanies([...new Set(allProducts.map(p => p.company))]);
      setAllColors([...new Set(allProducts.map(p => p.color))]);
      setAllSizes([...new Set(allProducts.map(p => p.size))]);
      setAllCategories([...new Set(allProducts.map(p => p.type))]);
      setAllGenders([...new Set(allProducts.map(p => p.category))]);
    }
  }, []);

  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const company = [];
    const category = [];
    const color = [];
    const size = [];
    const gender = [];
    let price = '';

    pathParts.forEach(part => {
      const [key, val] = part.split('-');
      if (key === 'company') company.push(val);
      if (key === 'category') category.push(val);
      if (key === 'color') color.push(val);
      if (key === 'size') size.push(val);
      if (key === 'gender') gender.push(val);
      if (key === 'price') price = val;
    });

    setSelectedCompanies(company);
    setSelectedCategories(category);
    setSelectedColors(color);
    setSelectedSizes(size);
    setSelectedGenders(gender);
    setSelectedPrice(price);
  }, [location.pathname]);

  useEffect(() => {
    applyFilters();
  }, [selectedCompanies, selectedCategories, selectedColors, selectedSizes, selectedGenders, selectedPrice]);

  const applyFilters = () => {
    let filtered = [...products];

    if (selectedCompanies.length > 0) {
      filtered = filtered.filter(product => selectedCompanies.includes(product.company));
    }
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.type));
    }
    if (selectedGenders.length > 0) {
      filtered = filtered.filter(product => selectedGenders.includes(product.category));
    }
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => selectedColors.includes(product.color));
    }
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => selectedSizes.includes(product.size));
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

  const updateUrl = (changedKey, updatedValues) => {
    const filters = {
      company: selectedCompanies,
      category: selectedCategories,
      color: selectedColors,
      size: selectedSizes,
      gender: selectedGenders,
      price: selectedPrice ? [selectedPrice] : [],
      [changedKey]: updatedValues
    };

    let newUrl = '/all-products';
    Object.entries(filters).forEach(([key, values]) => {
      values.forEach(val => {
        newUrl += `/${key}-${val}`;
      });
    });

    navigate(newUrl);
  };

  const handleCheckboxChange = (setter, value, filterType) => {
    setter(prev => {
      const updated = prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value];
      updateUrl(filterType, updated);
      return updated;
    });
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setSelectedPrice(value);
    updateUrl('price', value ? [value] : []);
  };

  const clearFilters = () => {
    setSelectedCompanies([]);
    setSelectedCategories([]);
    setSelectedPrice('');
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedGenders([]);
    navigate('/all-products');
  };

  const renderFilters = () => (
    <>
      <div className="filter-group">
        <h6>Company</h6>
        {allCompanies.map(company => (
          <label key={company}>
            <input
              type="checkbox"
              value={company}
              checked={selectedCompanies.includes(company)}
              onChange={() => handleCheckboxChange(setSelectedCompanies, company, 'company')}
            />
            {company}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h6>Category</h6>
        {allCategories.map(category => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(setSelectedCategories, category, 'category')}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h6>Gender</h6>
        {allGenders.map(gender => (
          <label key={gender}>
            <input
              type="checkbox"
              value={gender}
              checked={selectedGenders.includes(gender)}
              onChange={() => handleCheckboxChange(setSelectedGenders, gender, 'gender')}
            />
            {gender}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h6>Color</h6>
        {allColors.map(color => (
          <label key={color}>
            <input
              type="checkbox"
              value={color}
              checked={selectedColors.includes(color)}
              onChange={() => handleCheckboxChange(setSelectedColors, color, 'color')}
            />
            {color}
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
              checked={selectedPrice === range}
              onChange={handlePriceChange}
            />
            {range === '0-100' ? 'up to 100 zł' : range === '100-200' ? '100–200 zł' : 'over 200 zł'}
          </label>
        ))}
      </div>

      <button className="apply-filters-button clear" onClick={clearFilters}>Clear</button>
    </>
  );

  return (
    <div className='offer-page'>
      <div className='offer-page-container'>
        {showFilters && !isMobile && (
          <div className='offer-side'>
            <div className='offer-side-title'>Filters</div>
            {renderFilters()}
          </div>
        )}

        {showMobileFilters && isMobile && (
          <div className='mobile-offer-side'>
            <h2 className='offer-side-title'>Filters</h2>
            {renderFilters()}
          </div>
        )}

        <div className='offer-rest'>
          <div className='offer-filters'>
            Products: {filteredProducts.length}
            {!isMobile ? (
              <button onClick={toggleFilters}>
                {showFilters ? <FaTimes className="filter-icon" /> : <FaFilter className="filter-icon" />}
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            ) : (
              <button onClick={toggleMobileFilters}>
                {showMobileFilters ? <FaTimes className="filter-icon" /> : <FaFilter className="filter-icon" />}
                {showMobileFilters ? 'Hide Mobile Filters' : 'Show Mobile Filters'}
              </button>
            )}
          </div>

          <div className='offer-products-container'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  company={product.company}
                  image={product.image}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              ))
            ) : (
              <p>No products match the selected criteria.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
