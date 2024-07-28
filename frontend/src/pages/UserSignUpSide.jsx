import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Stepper, Step, StepLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import createTheme from "@mui/material/styles/createTheme";
import { useNavigate } from 'react-router-dom';

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

export default function UserSignUpSide() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Personal Info 1', 'Personal Info 2', 'Personal Info 3'];

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    location: '',
    parentName: '',
    password: '',
    dob:'',
    schoolName: ''
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
        return formData.schoolName && formData.location;
      case 2:
        return formData.parentName && formData.dob;
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
    // if (data.get('password') !== data.get('confirmPassword'))
    // {
    //   alert('Passwords should match.')
    //   return;
    // }
    if (validateStep(activeStep)) {
      console.log( formData);
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
        navigate('/user-signin')
        return response.json(); // nvert response to JSON
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //     confirmPassword: data.get('confirmPassword'),
  //   });
  //   if (data.get('password') !== data.get('confirmPassword'))
  //   {
  //     alert('Passwords should match.')
  //     return;
  //   }
  //   fetch('http://localhost:3000/api/v1/volunter/signup', {
  //     method: 'POST', 
  //     headers: {
  //       'Content-Type': 'application/json' 
  //     },
  //     body: JSON.stringify({
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     }) 
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json(); // Convert response to JSON
  //   })
  //   .then(data => {
  //     console.log('Success:', data); // Handle the JSON data from the response
  //     setLogged(true);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error); // Handle any errors
  //   });
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '70vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url("https://tms.ashoktailors.com/public/backend/img/admin-login.jpg")',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />
        <Grid item xs={9} sm={7} md={4} component={Paper} elevation={6} square>
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
              User Sign Up
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
                    label="School Name"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  {/* <label htmlFor="location">Location*</label> */}
                  <TextField
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  
                </>
              )}
              {activeStep === 2 && (
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
                  <div className="form-group">
                    <label htmlFor="dob" className="form-label">DOB</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                  {/* <div className="form-group">
                    <label htmlFor="file">Upload CV*</label>
                    <input
                      type="file"
                      id="file"
                      name="cv"
                      accept="application/pdf"
                      onChange={handleChange}
                      required
                    />
                  </div> */}
                  
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

              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type='email'
                sx={{ fontSize: 11 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                sx={{ fontSize: 11 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                sx={{ fontSize: 11 }}
              /> */}
              {/* <FormControlLabel
                control={<Checkbox value="terms" color="primary" sx={{ fontSize: 11 }} />}
                label="I agree to the terms and conditions"
                sx={{ fontSize: 11 }}
              /> */}
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1, fontSize: 11 }}
              >
                Sign Up
              </Button> */}
              <Grid container>
                <Grid item xs>
                  <Link href="/user-signin" variant="body2" sx={{ fontSize: 9 }}>
                    Already have an account? Sign In
                  </Link>
                </Grid>
                {/* <Grid item>
                  <Link href="#" variant="body2" sx={{ fontSize: 9 }}>
                    {"Forgot password?"}
                  </Link>
                </Grid> */}
              </Grid>
              <Copyright sx={{ mt: 3, fontSize: 9 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
