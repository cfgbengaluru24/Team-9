import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="contact-container">
            <h5 className='blinking-text'>Get in Touch with us!</h5>
            <div className="contact-info">
                <h6>Rohini Foundation</h6>
                <p>C/o Little Smile Dental Hospital</p>
                <p>10/3/304/13, Opposite Post Office, Humayunagar</p>
                <p>Masab Tank, Hyderabad, Telangana</p>
                <p>Phone: <a href="tel:+914023535656">+91 40 2353 5656</a>, <a href="tel:+919246371730">+91 92463 71730</a></p>
                <p>Email: <a href="mailto:rohinioralhealthsociety@gmail.com">rohinioralhealthsociety@gmail.com</a></p>
            </div>
            <p style={{color: 'white'}}>&copy; {new Date().getFullYear()} Rohini Foundation. All rights reserved.</p>
        </div>
      {/* <div className="footer-content"> */}
        {/* <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/volunteers">Volunteers</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
