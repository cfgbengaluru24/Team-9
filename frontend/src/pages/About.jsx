import React from 'react'
import Aboutus from '../assets/image.png';
import Nav from '../components/Navbar/Nav';
import './About.css'


export default function About() {
  return (
    <>
    <Nav/>
    <div className='c'>
        <div className='container-ab'>
            <div className='image'>
                <img src={Aboutus}></img>
            </div>
            <div className='info'>
                <h2 className='heading'>About Us</h2>
                <p>Wellness Whisper is a dedicated mental health support platform offering tranquility and guidance. It provides various tools and resources, including a motivational quote generator, a mental support chatbot, an anonymous chat app, and relaxing games. These features are designed to help individuals manage their mental health effectively and confidentially. The platform ensures user privacy while fostering a supportive environment for sharing experiences and seeking advice. With personalized content, progress tracking, and multilingual support, Wellness Whisper is committed to making mental health care accessible and approachable, empowering users to lead healthier, happier lives.</p>
            </div>
        </div>
    </div>
    </>
  )
}