import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './AnemiaPrediction.css'

function AnemiaPrediction() {
  const [gender, setGender] = useState('');
  const [haemoglobin, setHaemoglobin] = useState('');
  const [MCV, setMCV] = useState('');
  const [error, setError] = useState('');
  const [responseData, setResponseData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gender || !haemoglobin || !MCV) {
      setError('All fields are required');
      return;
    }
    try {
      const data = {
        gender,
        haemoglobin: parseFloat(haemoglobin),
        MCV: parseFloat(MCV),
      };

      const response = await fetch('http://127.0.0.1:5000/predictAnemia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const result = await response.json();
      setGender('');
      setHaemoglobin('');
      setMCV('');
      console.log(result);
      setResponseData(result.result);

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="root">
      <header>
        <img src="https://media.licdn.com/dms/image/C560BAQHmUC8ijS63wQ/company-logo_200_200/0/1630652343957/rohini_right_to_oral_health_society_logo?e=2147483647&v=beta&t=eaBvgjz4N-QLH7L7PynW-RToPekm_Vlrmvl7GpMlJaY" alt="Link Icon" className="header-logo" />
        <h1>Anemia Prediction</h1>
        <p>Provide your details to get an Anemia Prediction!</p>
      </header>
      <div className="form-container">
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Haemoglobin"
              type="number"
              value={haemoglobin}
              onChange={(e) => setHaemoglobin(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="MCV"
              type="number"
              value={MCV}
              onChange={(e) => setMCV(e.target.value)}
              required
            />
          </Box>
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary">
            Predict Anemia
          </Button>
        </form>
        {responseData && (
          <div className="response-container">
            <p>Your Prediction: <span>{responseData}</span></p>
          </div>
        )}
      </div>
      <footer>
        <p>&copy; 2024 genURL. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AnemiaPrediction;
