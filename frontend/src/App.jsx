import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Volunteer from './pages/Volunteer';
import Footer from './pages/Footer';
import logo from './assets/logo.png';
import SignInSide from './pages/SignInSide';
import SignUpSide from './pages/SignUpSide';
import VolunteerPrograms from './pages/VolunteerPrograms';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const [showNavAndFooter, setShowNavAndFooter] = useState(true);
  const location = useLocation();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (location.pathname === '/signup' || location.pathname === '/signin') {
      setShowNavAndFooter(false);
    } else {
      setShowNavAndFooter(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('logged_in', false);
  }, []);

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<NotFound />} />
        <Route path="/testimonials" element={<NotFound />} />
        <Route path="/volunteers" element={<Volunteer />} />
        <Route path="/signin" element={<SignInSide logged={logged} setLogged={setLogged}/>} />
        <Route path="/signup" element={<SignUpSide logged={logged} setLogged={setLogged}/>} />
        <Route path="/volunteer-programs" element={<VolunteerPrograms logged={logged} setLogged={setLogged}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showNavAndFooter && <Footer />}

    </>
  );
}

export default App;
