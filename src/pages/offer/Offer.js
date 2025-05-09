import React, { useState } from 'react';
import './Offer.css';
import OfferHero from '../../components/hero/offerHero/OfferHero';
import HeaderTyping from '../../components/header/HeaderTyping';
import NewArrivals from '../../components/offer/newArrivals/NewArrivals';

const Offer = () => {


    return (
        <div class="page-offer-container">
            <OfferHero/>
            <div className='mt50'/>

            <NewArrivals/>
        </div>

    );
};

export default Offer;
