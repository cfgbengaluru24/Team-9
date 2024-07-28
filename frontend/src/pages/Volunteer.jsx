import React, { useState } from 'react';
import '../css/Volunteer.css';
import volunteers from '../assets/volunteers.jpg';
import teeth from '../assets/teeth.png';
import { Stepper, Step, StepLabel, Button, Box, TextField, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const steps = ['Personal Info', 'Role Selection', 'Additional Info'];

// Regular expression for email validation
const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const Volunteer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    address: '',
    role: 'Doctor',
    experience: 0,
    qualification: '',
    password: '',
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (name === 'cv') return;
    if (type === 'file') {
      const file = files[0];
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: file,
      }));
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const validateStep = (step) => {
    switch (step) {
      case 0:
        return formData.name && isValidEmail(formData.email) && formData.contactNo;
      case 1:
        return formData.role && formData.qualification;
      case 2:
        return formData.address; //&& formData.cv;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      alert('Please fill out all required fields correctly.');
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(activeStep)) {
      console.log( formData);
      fetch('http://localhost:3000/api/v1/volunter/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData) 
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
      
    } else {
      alert('Please fill out all required fields correctly.');
    }
  };

  return (
    <>
      {/* {previewUrl && (
        <div className="file-preview">
          <iframe src={previewUrl} width="100%" height="500px" title="CV Preview"></iframe>
        </div>
      )} */}
      <h1>Join Us as a Partner in Our Social Cause</h1>
      <div className="volunteer-container">
        <div className="volunteer-image">
          <img src={volunteers} alt="Volunteer" />
        </div>
        <div className="volunteer-content">
          <p>Join us as a partner in our social cause to promote <b>"The Concept of Zero Cavities in the state of Telangana."</b></p>
          <h2>Role of Volunteers</h2>
          <p>Volunteers with Rohini Foundation play a crucial role in:</p>
          <ul className="volunteer-role">
            <li><img src={teeth} className="bulletin" alt="bullet" />Assisting during dental screening camps.</li>
            <li><img src={teeth} className="bulletin" alt="bullet" />Providing oral hygiene instructions to children.</li>
            <li><img src={teeth} className="bulletin" alt="bullet" />Supporting dental treatment procedures.</li>
          </ul>
        </div>
      </div>
      <h2 id="volunteer-form">What Volunteers with Rohini Foundation Receive</h2>
      <p>Volunteering is an enriching experience with numerous benefits:</p>
      <ul className="volunteer-role">
        <li>➕ Gain confidence and a profound sense of accomplishment.</li>
        <li>➕ Make a tangible and positive impact on children and society as a whole.</li>
        <li>➕ Receive a certificate of appreciation from the Rohini Foundation.</li>
      </ul>
      <p>
        In essence, volunteering with us guarantees a fulfilling and enjoyable experience, regardless of the task at hand. Join us today to make a difference!
      </p>
      <h2>Interested in Volunteering?</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={()=>{navigate('/vol-signup')}}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Volunteer;
