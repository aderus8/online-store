import React, { useEffect } from 'react';
import './PromoGrid.css';
import HeaderTyping from '../../header/typingHeader/HeaderTyping';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const PromoGrid = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);


    return (
        <div className="mt">
            <HeaderTyping title="Find Your Perfect Look"
                subtitle="Fashion for Men, Women, and Kids" />
            <div className="promo-grid">
                <div className="promo-grid-left">
                    <div className="promo-grid-div" data-aos="fade-up">
                        <img
                            className="promo-grid-img"
                            src="https://static.reserved.com/media/catalog/product/6/9/6917H-05X-003-1-938136_5.jpg"
                            alt="Promo man"
                        />
                        <Link to={"/all-products/gender-men"}>
                            <h1 className="promo-grid-div-text">Men</h1>
                        </Link>
                    </div>
                    category-shoes
                </div>
                <div className="promo-grid-right">
                    <div className="promo-grid-right-1">
                        <div className="promo-grid-div" data-aos="fade-up">
                            <img
                                className="promo-grid-img"
                                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Promo shoes"
                            />
                            <Link to={"/all-products/category-shoes"}>

                                <h1 className="promo-grid-div-text">Shoes</h1> </Link>
                        </div>


                    </div>
                    <div className="promo-grid-right-2">
                        <div className="promo-grid-right-2-1">
                            <div className="promo-grid-div" data-aos="fade-up">
                                <img
                                    className="promo-grid-img"
                                    src="https://plus.unsplash.com/premium_photo-1708271125737-d016bb801b69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Promo woman"
                                />
                                <Link to={"/all-products/gender-women"}>

                                    <h1 className="promo-grid-div-text">Women</h1>
                                </Link>
                            </div>
                        </div>


                        <div className="promo-grid-right-2-2">
                            <div className="promo-grid-div" data-aos="fade-up">
                                <img
                                    className="promo-grid-img"
                                    src="https://i.pinimg.com/736x/fa/34/4c/fa344cf1ef3591738326c51945df1c80.jpg"
                                    alt="Promo kids"
                                />
                                <Link to={"/all-products/gender-unisex"}>

                                    <h1 className="promo-grid-div-text">Kids</h1></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default PromoGrid;
