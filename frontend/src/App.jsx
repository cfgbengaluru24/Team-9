import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Volunteer from './pages/Volunteer';
import Footer from './pages/Footer';
import logo from './assets/logo.png';
import VolunteerSignInSide from './pages/VolunteerSignInSide';
import VolunteerSignUpSide from './pages/VolunteerSignUpSide';
import UserSignInSide from './pages/UserSignInSide';
import UserSignUpSide from './pages/UserSignUpSide';
import DocSignInSide from './pages/DocSignInSide';
import DocSignUpSide from './pages/DocSignUpSide';
import VolunteerPrograms from './pages/VolunteerPrograms';
import Report from './pages/Report';
import DentalPrediction from './pages/DentalPrediction';

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
      
       {/* <nav style={{ position: 'sticky', top: '0', zIndex: '100' }}>
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
      </nav>  */}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<NotFound />} />
        <Route path="/testimonials" element={<NotFound />} />
        <Route path="/volunteers" element={<Volunteer />} />
        <Route path="/vol-signin" element={<VolunteerSignInSide logged={logged} setLogged={setLogged}/>} />
        <Route path="/vol-signup" element={<VolunteerSignUpSide logged={logged} setLogged={setLogged}/>} />
        <Route path="/user-signin" element={<UserSignInSide logged={logged} setLogged={setLogged}/>} />
        <Route path="/dental" element={<DentalPrediction />} />
        <Route path="/user-signup" element={<UserSignUpSide logged={logged} setLogged={setLogged}/>} />
        <Route path="/doc-signin" element={<DocSignInSide logged={logged} setLogged={setLogged}/>} />
        <Route path="/doc-signup" element={<DocSignUpSide logged={logged} setLogged={setLogged}/>} />
        <Route path="/volunteer-programs" element={<VolunteerPrograms logged={logged} setLogged={setLogged}/>} />
        <Route path="/reports" element={<Report logged={logged} setLogged={setLogged}/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
