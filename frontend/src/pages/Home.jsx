import React from 'react';
import Card from '../components/Cards/Cards.jsx';
import './Home.css';
import volunteer from '../assets/18827.jpg';
import children from '../assets/6642817.jpg';
import Nav from '../components/Navbar/Nav.jsx';

const Home = () => {
  const cards = [
    {
      title: 'Sanjay',
      subtitle: 'Top Volunteer',
      image: 'https://thumbs.dreamstime.com/b/golden-first-prize-medal-label-blue-ribbon-gold-isolated-white-background-award-badge-champion-symbol-victory-314660781.jpg',
      details: 'Sanjay is a great volunteer',
    },
    {
      title: 'Olirva',
      subtitle: '2nd Top Volunteer',
      image: 'https://cdn5.vectorstock.com/i/1000x1000/59/99/silver-medal-for-second-place-prize-vector-12655999.jpg',
      details: 'Olirva is a great volunteer'
    },
    {
      title: 'Rajesh',
      subtitle: '3rd Best Volunteer',
      image: 'https://cdn1.vectorstock.com/i/1000x1000/60/55/bronze-medal-for-third-place-prize-vector-12656055.jpg',
      details: 'Great work rajesh'
    }
  ];

  const handleImageClick = (image) => {
    console.log(`Image clicked: ${image}`);
    if (image === volunteer) {
      window.location.href = '/volunteers';
    } else if (image === children) {
      window.location.href = '/user-signup';
    }
  };

  return (
    <div className="content-page">
      <Nav />
      <div>
        <h1 className='heading1'>Let's Start Your Journey with Rohini</h1>
      </div> 
      <div className='flex content2'>
        <button className="image-button" onClick={() => handleImageClick(volunteer)}>
          <legend class='legend'>Volunteer</legend>
          <img src={volunteer} alt="Volunteer" />
        </button>
        <button className="image-button" onClick={() => handleImageClick(children)}>
          <legend className='legend'>Children</legend>
          <img src={children} alt="Children" />
        </button>
      </div>
      <h1 className='heading2'>Our Top Performing Volunteers</h1>
      <div className="flex flex-wrap py-8">
        <div className="card-container flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default Home;
