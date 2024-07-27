import React, { useState } from 'react';
import '../css/Volunteer.css';
import volunteers from '../assets/volunteers.jpg';
import teeth from '../assets/teeth.png';
import { Stepper, Step, StepLabel, Button, Box, TextField, Select, MenuItem } from '@mui/material';

const steps = ['Personal Info', 'Role Selection', 'Additional Info'];

// Regular expression for email validation
const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const Volunteer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    role: 'Doctor',
    cv: null,
    experience: 0,
    qualification: ''
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
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
        return formData.name && isValidEmail(formData.email) && formData.phone;
      case 1:
        return formData.role && formData.qualification;
      case 2:
        return formData.address && formData.cv;
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
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      console.log(formDataToSend);
      // Handle form submission here
    } else {
      alert('Please fill out all required fields correctly.');
    }
  };

  return (
    <>
      {previewUrl && (
        <div className="file-preview">
          <iframe src={previewUrl} width="100%" height="500px" title="CV Preview"></iframe>
        </div>
      )}
      <div className="header">
        <div className="header-contents">
          <h2>VOLUNTEERS</h2>
          <a href='#volunteer-form' style={{ backgroundColor: 'white', padding: '5px', borderRadius: '3%' }}>Volunteer Now</a>
        </div>
      </div>
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
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ padding: '16px' }}>
          {activeStep === steps.length ? (
            <div>
              <h2>All steps completed</h2>
              <Button onClick={() => setActiveStep(0)}>Reset</Button>
            </div>
          ) : (
            <div>
              {activeStep === 0 && (
                <>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    type="email"
                    required
                  />
                  <TextField
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                </>
              )}
              {activeStep === 1 && (
                <>
                <div className="form-group">
                  <label htmlFor="role">Role*</label>
                  <Select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  >
                    <MenuItem value="Doctor">Doctor</MenuItem>
                    <MenuItem value="Nurse">Nurse</MenuItem>
                    <MenuItem value="Nutritionist">Nutritionist</MenuItem>
                  </Select>
                </div>
                <TextField
                    label="Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    required
                  />
                  <TextField
                    label="Qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  /></>
              )}
              {activeStep === 2 && (
                <>
                  <TextField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <div className="form-group">
                    <label htmlFor="file">Upload CV*</label>
                    <input
                      type="file"
                      id="file"
                      name="cv"
                      accept="application/pdf"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {previewUrl && (
                    <div className="file-preview">
                      <iframe src={previewUrl} width="100%" height="500px" title="CV Preview"></iframe>
                    </div>
                  )}
                </>
              )}
              <Box sx={{ marginTop: '16px' }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ marginRight: '8px' }}
                >
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button onClick={handleSubmit}>Submit</Button>
                ) : (
                  <Button onClick={handleNext}>Next</Button>
                )}
              </Box>
            </div>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Volunteer;
