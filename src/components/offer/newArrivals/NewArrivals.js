import React from 'react';
import './NewArrivals.css';
import CardArrivals from '../cardArrival/CardArrivals';
import HeaderTyping from '../../header/typingHeader/HeaderTyping';

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <HeaderTyping title="New arrivals"
        subtitle="Discover the freshest styles – where comfort meets confidence." />

      <div className="components-wrapper">
        {arrivalsData.map((item, index) => (
          <CardArrivals key={index} img={item.img} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;


const arrivalsData = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1675129933526-5eb24a763248?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Urban Explorer',
    subtitle: 'Gear up for the city with layered looks and street-ready sneakers.'
  },
  {
    img: 'https://images.unsplash.com/photo-1619042823674-4f4ad8484b08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Smart Casual Edit',
    subtitle: 'Balance between relaxed and refined for your daily transitions.'
  },
  {
    img: 'https://images.unsplash.com/photo-1586082696103-bfd1903f610e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Weekend Chill',
    subtitle: 'Cozy knits, soft joggers and layers made for lounging in style.'
  },
  {
    img: 'https://images.unsplash.com/photo-1618453292507-4959ece6429e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Monochrome Mood',
    subtitle: 'Minimal color, maximum impact. Explore timeless black & white pieces.'
  }
];
