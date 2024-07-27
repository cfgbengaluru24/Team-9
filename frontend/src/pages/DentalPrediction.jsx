import { useState } from 'react';
import './DentalPrediction.css';
import { Dropzone, FileMosaic } from '@dropzone-ui/react';


function DentalPrediction() {
  let [file, setFile] = useState([]);
  const [error, setError] = useState('');
  const [responseData, setResponseData] = useState('');

  const handleFileChange = (files) => {
    const selectedFile = files;
    
    if (selectedFile) {
      // Check file size (example: limit to 2MB)
      const maxSize = 2 * 1024 * 1024;
      if (selectedFile.size > maxSize) {
        setError('File size exceeds the limit of 2MB');
        setFile(undefined);
        return;
      }
      
      setFile(selectedFile);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('No file selected');
      return;
    }
    try {
      const formData = new FormData();
      formData.set("file",file[0].file)

      const response = await fetch('http://127.0.0.1:5000/predictDental', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      const result = await response.json();
      file=undefined
      console.log(result);
      setResponseData(result.result);
     
    } catch (err) {
      setError(err.message);
    }
  };
  const handleCopyUrl = () => {
    if (responseData) {
      navigator.clipboard.writeText(responseData)
        .then(() => alert('URL copied to clipboard'))
        .catch(err => console.error('Failed to copy URL', err));
    }
  };

  return (
    <div id="root">
      <header>
        <img src="https://media.licdn.com/dms/image/C560BAQHmUC8ijS63wQ/company-logo_200_200/0/1630652343957/rohini_right_to_oral_health_society_logo?e=2147483647&v=beta&t=eaBvgjz4N-QLH7L7PynW-RToPekm_Vlrmvl7GpMlJaY" alt="Link Icon" className="header-logo" />
        <h1>Dental Pediction</h1>
        <p>Upload your files and get a Dental Prediction!</p>
      </header>
      <div className="file-upload-container">
        <h2>Upload Your File</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Dropzone
            onChange={handleFileChange}
            value={file}
          >
            {file&&file.map((file) => (
                <FileMosaic key={file.id} {...file} onDelete={handleFileChange} info preview darkMode/>
              ))}
          </Dropzone>
          <br/>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="upload-button">Upload</button>
        </form>
        {responseData && (
          <div className="response-container">
            <p>Your Predictions: <a href={responseData}>{responseData}</a></p>
            
          </div>
        )}
      </div>
      <footer>
        <p>&copy; 2024 genURL. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DentalPrediction;