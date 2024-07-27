import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../components/Cards/Cards.jsx'
import './Home.css'
import Aboutus from '../assets/AboutUs.png';
const backgroundImages = [
  'url(../../assets/home.jpg)',
  'url(../../assets/home.jpg)',
  'url(../../assets/home.jpg)'
];
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
    // Add more card data as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows if you only want dots
};
  return (
    <div className='home'>
      <div className="header">
      <div className="header-contents">
        <h2>Project Iron And Girl Child </h2>
        <p>Join us</p>
        <button >JOin us</button>
      </div>
      </div>
      <div className='c'>
        <div className='container-ab'>
            <div className='image'>
                <img src={Aboutus}></img>
            </div>
            <div className='info'>
                <h2>About Us</h2>
                <p>At Rohini Foundation, we believe every child deserves a healthy smile and a bright start in life. Founded by Dr. Sampath Reddy and his dedicated team, our mission is to make oral care accessible to all, especially underprivileged children in Telangana.

Our team includes three pediatric dentists, three dental surgeons, and a compassionate gynecologist, all working towards a future free from cavities.

ROHINI has been at the forefront of healthcare, organizing numerous health development programs and impacting countless lives for the past three years. We've screened over 75,000 children and treated more than 5,000 through our health camps.

Understanding the challenges in remote areas, we've introduced Mobile Clinics, bringing essential dental care directly to towns and rural communities. This eco-friendly initiative ensures that no child is left behind in receiving dental care.

We are proud to be one of the few foundations in Telangana granted both 12A and 80G certificates. These certifications reflect our dedication and the positive impact of our initiatives. With the collective efforts of our team, partners, and supporters, we remain committed to expanding our reach and making a lasting difference in the lives of children throughout Telangana.</p>
            </div>
        </div>
    </div>
      <div className="center-container">
      <div className="card-container">
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
