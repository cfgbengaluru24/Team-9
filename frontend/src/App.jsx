import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Auth from './pages/SignInSide';
import NotFound from './pages/NotFound';
import Volunteer from './pages/Volunteer';
import Footer from './pages/Footer';
import './App.css';
import logo from './assets/logo.png';
import SignInSide from './pages/SignInSide';
import SignUpSide from './pages/SignUpSide';

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

  useEffect(() => {
    if (location.pathname === '/signup' || location.pathname === '/signin') {
      setShowNavAndFooter(false);
    } else {
      setShowNavAndFooter(true);
    }
  }, [location.pathname]);

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
          <li><Link to="/signin">Login</Link></li>
        </ul>)}
      </nav>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<NotFound />} />
        <Route path="/testimonials" element={<NotFound />} />
        <Route path="/volunteers" element={<Volunteer />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUpSide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showNavAndFooter && <Footer />}
    </>
  );
}

export default App;
