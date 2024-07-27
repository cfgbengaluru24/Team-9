import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Stepper, Step, StepLabel } from '@mui/material';
import { useState } from 'react';
import image from '../assets/user.png'; // Adjust the path if necessary
import createTheme from "@mui/material/styles/createTheme";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:5173">
        Rohini Foundation
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function UserLogin() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Personal Info', 'Role Selection', 'Additional Info'];

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    password: '',
    parentName: '',
    dob: '',
    location: '',
    schoolName: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') return;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateStep = (step) => {
    switch (step) {
      case 0:
        return formData.name && isValidEmail(formData.email) && formData.contactNo && formData.password;
      case 1:
        return formData.parentName && formData.dob && formData.location && formData.schoolName;
      case 2:
        return true; // Additional Info step doesn't have required fields in this example
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
      fetch('http://localhost:3000/api/v1/user/signup', {
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
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: { xs: '30vh', sm: '50vh', md: '100vh' },
          }}
        />
        <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 40, height: 40 }}>
              <LockOutlinedIcon sx={{ fontSize: 20 }} />
            </Avatar>
            <Typography component="h1" variant="h6">
              User Information
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                          />
                          <TextField
                            label="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            type="password"
                            required
                          />
                        </>
                      )}
                      {activeStep === 1 && (
                        <>
                          <TextField
                            label="Parent Name"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                          />
                          <TextField
                            label="Date of Birth"
                            name="dob"
                            type="date"
                            value={formData.dob}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            required
                          />
                          <TextField
                            label="Location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                          />
                          <TextField
                            label="School Name"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                          />
                        </>
                      )}
                      {activeStep === 2 && (
                        <>
                          {/* Additional Info fields */}
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
              <Grid container>
                <Grid item xs>
                  <Link href="signin" variant="body2" sx={{ fontSize: 9 }}>
                    Already have an account? Sign In
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 3, fontSize: 9 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
