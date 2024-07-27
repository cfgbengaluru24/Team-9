import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Volunteer from './pages/Volunteer';
import SignInSide from './pages/SignInSide';
import SignUpSide from './pages/SignUpSide';
import Donation from './pages/Donations';
import VolunteerPrograms from './pages/VolunteerPrograms';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    localStorage.setItem('logged_in', false);
  }, []);

  return (
    <>
      
       <nav style={{ position: 'sticky', top: '0', zIndex: '100' }}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        {showNavAndFooter && (<ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/volunteers">Volunteers</Link></li>
          <li><Link to="/volunteer-programs">Upcoming Programs</Link></li>
          <li><Link to="/signin">Login</Link></li>
        </ul>)}
      </nav> 
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donations" element={<Donation />} />
        <Route path="/volunteers" element={<Volunteer />} />
        <Route path="/signin" element={<SignInSide logged={logged} setLogged={setLogged}/>} />
        <Route path="/signup" element={<SignUpSide logged={logged} setLogged={setLogged}/>} />
        <Route path="/volunteer-programs" element={<VolunteerPrograms logged={logged} setLogged={setLogged}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
