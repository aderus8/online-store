import React, { useState } from 'react';
import './Offer.css';
import OfferHero from '../../components/offer/offerHero/OfferHero';
import NewArrivals from '../../components/offer/newArrivals/NewArrivals';
import PromoGrid from '../../components/offer/promoGrid/PromoGrid';

const Offer = () => {


    return (
        <div class="page-offer-container">
            
            <OfferHero/>
            <div className='mt50'/>

            <NewArrivals/>

            <PromoGrid/>
        </div>

    );
};

export default Offer;
