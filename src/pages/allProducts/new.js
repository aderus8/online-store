import React, { useState, useEffect } from 'react';
import productsDATA from '../../components/productsData'; import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import CTAButton from '../../components/button/Button';
import Header from '../../components/header/HeaderTyping';
import HeaderTyping from '../../components/header/HeaderTyping';
import { FaFilter, FaTimes } from 'react-icons/fa';
import "./new.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionHeader from '../../components/header/sectionHeader/SectionHeader';

const Newpage = () => {
    const [showFilters, setShowFilters] = useState(true);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Zmienna do monitorowania szerokości okna
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    // Filtry
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState('');

    const toggleFilters = () => setShowFilters(prev => !prev);
    const toggleMobileFilters = () => setShowMobileFilters(prev => !prev);

    // Nasłuchujemy zmian szerokości okna
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Aktualizujemy stan, czy urządzenie to mobilne
            if(window.innerWidth > 768){
                setIsMobile(false);
            }
        };

        // Dodajemy nasłuchiwanie zmian okna
        window.addEventListener('resize', handleResize);

        // Cleanup przy odmontowaniu
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        if (isMobile) {
            setShowFilters(false); // Na urządzeniach mobilnych filtry są domyślnie ukryte
            setShowMobileFilters(false); // Na urządzeniach mobilnych filtry są ukryte
        } else {
            setShowFilters(true); // Na urządzeniach desktopowych filtry są widoczne
        }
    }, [isMobile]);


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
        <div className='offer-page'>
            <div className='offer-page-container'>
                {showFilters && !isMobile && (
                    <div className='offer-side'>
                        <div className='offer-side-title'> Filters</div>
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

                {showMobileFilters && isMobile &&(
                    <div>mobile filters</div>
                )}

                <div className='offer-rest'>
                    {/* <div className='offer-header'> 
                        <SectionHeader title='All products' />    
                        <HeaderTyping title='All products' />    
                    </div> */}
                    <div className='offer-filters'>
                        Products:
                        {!isMobile ? (
                            <button onClick={toggleFilters}>
                                {showFilters ? <FaTimes className="icon" /> : <FaFilter className="icon" />}
                                {showFilters ? 'Hide Filters' : 'Show Filters'}
                            </button>
                        ) : (
                            <button onClick={toggleMobileFilters}>
                                {showFilters ? <FaTimes className="icon" /> : <FaFilter className="icon" />}
                                {showFilters ? 'Hide Mobile Filters' : 'Show Mobile Filters'}
                            </button>
                        )}
                    </div>

        <div className='offer-products-container'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={product.id} className='product-card'>
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
        </div>
    );
};

export default Newpage;
