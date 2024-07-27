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

export default function DocSignUpSide() {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  // const steps = ['Personal Info', 'Role Selection', 'Additional Info'];

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

  const validateStep = () => {
    return formData.name && isValidEmail(formData.email) && formData.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(activeStep)) {
      console.log( formData);
      fetch('http://localhost:3000/api/v1/admin/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json' ,
          'Authorization': `admin`
        },
        body: JSON.stringify(formData) 
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      navigate('/doc-signin')
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
              'url("/static/images/templates/templates-images/sign-in-side-bg.png")',
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
              Doctor Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Box sx={{ width: '100%' }}>
    
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
                <Button onClick={handleSubmit}>Submit</Button>
                <Grid item xs>
                  <Link href="/doc-signin" variant="body2" sx={{ fontSize: 9 }}>
                    Already have an account? Sign In
                  </Link>
                </Grid>
            </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
