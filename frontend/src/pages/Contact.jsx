import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactus from '../assets/photo.jpg';
import Nav from '../components/Navbar/Nav';
import './Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h6zledt', 'template_9x4ezyt', form.current, 'NRhBefwAyjHoET8sY')
      .then(
        (result) => {
          console.log(result.text);
          alert('Successfully sent the message!');
          
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again later.');
        }
      );
      e.target.reset();
  };

  return (
    <>
    <Nav/>
    <div className='c'>
      <div className='container-c'>
        <div className='image'>
          <img src={contactus} alt="Contact us" />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h2 className='title'>Contact us</h2>
          <input type="text" name="user_name" placeholder='Your Name' required />
          <input type="email" name="user_email" placeholder='Email id' required />
          <textarea name="message" placeholder='How can we help you?' required />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
    </>
  );
}