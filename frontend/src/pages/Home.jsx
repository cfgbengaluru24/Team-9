import React from 'react';
import Card from '../components/Cards/Cards.jsx';
import './Home.css';
import Aboutus from '../assets/AboutUs.png';
import Nav from '../components/Navbar/Nav.jsx';
import volunteer from '../assets/18827.jpg';
import children from '../assets/6642817.jpg';

const Home = () => {
  const cards = [
    {
      title: 'Donate Now',
      subtitle: 'Promoting The Concept Of "Zero Cavities In The State Of Telangana"',
      image: 'https://via.placeholder.com/300x180',
      details: "Your support can transform the lives of underprivileged children through the Rohini Foundation. Donations help us provide essential dental care to kids with hearing impairments, visual challenges, and those in government schools or juvenile homes. Contribute today to make a lasting impact and create healthier futures for all.",
      buttonText: 'Donate Now'
    },
    {
      title: 'Volunteer',
      subtitle: '"Step up, make a smile! Volunteer with us to spread dental health and brighten futures."',
      image: 'https://via.placeholder.com/300x180',
      details: "Partner with us to promote 'Zero Cavities' in Telangana. Volunteers with the Rohini Foundation assist in dental screenings, provide oral hygiene education, and support treatment procedures. Your involvement is vital to achieving our mission and improving children's dental health across the state.",
      buttonText: 'Register Now'
    },
    {
      title: 'Product 2',
      subtitle: 'Category: Home Appliances',
      image: 'https://via.placeholder.com/300x180',
      details: 'A brief description of Product 2, highlighting key features and benefits.',
      buttonText: 'Learn More'
    }
  ];

  const card2 = [
    {
      image: '',
      details: '',
      buttonText: 'Volunteer'
    },
    {
      image: '',
      details: '',
      buttonText: 'C'
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <Nav />
      <div className='home'>
        <div className="header text-center py-10">
          <h2 className='text-3xl font-bold'>We are <span className='text-primary'>Rohini</span></h2>
          <div className="center-container py-8 flex-wrap">
          <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img className='ig1' src={volunteer} /> 
          </div>
          <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img className='ig2' src={children} /> 
          </div>
        </div>
        </div>
        <div className="center-container py-8">
          <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                details={card.details}
                buttonText={card.buttonText}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
