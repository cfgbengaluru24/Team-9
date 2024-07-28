import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import logo from '../../assets/teeth.png';
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
// import gmap_src from 'C:/Users/olirv/Documents/React Apps/Team-9/backend/.env'

function NavBar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] =useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span class='logo'>Rohini Oral Health Foundation</span>
            <img src={logo} class='logo-image' />
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dental"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Dental
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/anemia"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Anemia 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/donation"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Donations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
      <div style={{'color': "white"}}
        onClick={toggleDropdown}
      >
        Login
      </div>
      {dropdownOpen && (
        <div style={{'color': "white", 'position': 'absolute', 'backgroundColor': 'black','width':"50px"}}>
          <div onClick={() => {setDropdownOpen(false);navigate('/user-signin')}}>
            User
          </div>
          <div onClick={() => {setDropdownOpen(false);navigate('/vol-signin')}}>
          Volunteer
          </div>
        </div>
      )}
    </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;