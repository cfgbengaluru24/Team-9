import React, { useEffect } from 'react';
import '../css/VolunteerPrograms.css';
import Nav from '../components/Navbar/Nav';
import { useState } from 'react';
import { getFormControlLabelUtilityClasses } from '@mui/material';

const camps = [
  {
    name: 'Summer Camp 2024',
    description: 'A fun summer camp for kids aged 8-12.',
    volunteersNeeded: 10,
    location: 'Central Park, NYC',
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.0663856669767!2d-73.9681583241534!3d40.78255467138306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sin!4v1722127666413!5m2!1sen!2sin"
  },
  {
    name: 'Winter Camp 2024',
    description: 'An exciting winter camp with snow activities.',
    volunteersNeeded: 8,
    location: 'Aspen, CO',
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49471.27792620949!2d-106.87792424666665!3d39.198474194999235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8740397cf7413c7d%3A0xc12b42dc782cf672!2sAspen%2C%20CO%2081611%2C%20USA!5e0!3m2!1sen!2sin!4v1722127739691!5m2!1sen!2sin"

  },
  {
    name: 'Summer Camp 2024',
    description: 'A fun summer camp for kids aged 11-19.',
    volunteersNeeded: 10,
    location: 'Central Park, NYC',
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.0663856669767!2d-73.9681583241534!3d40.78255467138306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sin!4v1722127666413!5m2!1sen!2sin"
  },

  
  // {
  //   name: 'Winter Camp 2024',
  //   description: 'An exciting winter camp with snow activities.',
  //   volunteersNeeded: 8,
  //   location: 'Aspen, CO',
  // }
];
const VolunteerPrograms = () => {
    const [Camps, setCamps] = useState([]);
    const [iframeVisible, setIframeVisible] = useState([]);
  
    const handleRegister = (campName) => {
      fetch('http://localhost:3000/api/v1/campus/reduceCount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Convert response to JSON
        })
        .then(data => {
          console.log('Success:', data); // Handle the JSON data from the response
        })
        .catch(error => {
          console.error('Error:', error); // Handle any errors
        });
      alert(`You have registered for ${campName}`);
      // Here, you can add further registration logic
    };
  
    const toggleIframe = (index) => {
      setIframeVisible(prev => {
        const newVisibility = [...prev];
        newVisibility[index] = !newVisibility[index];
        return newVisibility;
      });
    };
  
    useEffect(() => {
      fetch('http://localhost:3000/api/v1/campus/getAllCampaings', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Convert response to JSON
        })
        .then(data => {
          setCamps(data);
          setIframeVisible(Array(data.length).fill(false)); // Update iframeVisible based on the new length of camps
          console.log('Success:', data); // Handle the JSON data from the response
        })
        .catch(error => {
          console.error('Error:', error); // Handle any errors
        });
    }, []);
  
    const gmapsSrc = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
    return (
      <>
        <Nav />
        <header className="header1">
          <h1 className="headline">Join the Adventure: Volunteer for Our Exciting Upcoming Camps!</h1>
        </header>
        <div className="camps-container">
          {camps.length > 0 ? (
            camps.map((camp, index) => (
                <div key={index} className="camp-card">
                  <h2 className="camp-name">{camp.name}</h2>
                  <p className="camp-description">{camp.description}</p>
                  <p className="camp-volunteers">
                    Volunteers Needed: {camp.volunteersNeeded}
                  </p>
                  <p className="camp-location">Location: {camp.location}</p>
                  <button
                    className="register-button"
                    onClick={() => handleRegister(camp.name)}
                  >
                    Register
                  </button>
                  <br />
                  <button
                    className="register-button"
                    style={{ backgroundColor: 'white', border: '1px blue solid', color: 'blue' }}
                    onClick={() => toggleIframe(index)}
                  >
                    {!iframeVisible[index] ? 'View location' : 'Hide location'}
                  </button>
                  {iframeVisible[index] && (
                    <iframe
                      src={`${camp.url}`} // Example usage of gmapsSrc
                      width="100%"
                      height="200"  // Adjust height as needed
                      style={{ border: '0', marginTop: '10px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  )}
                </div>
              ))
          ) : (
            'Loading...'
          )}
        </div>
      </>
    );
  };
  
  export default VolunteerPrograms;