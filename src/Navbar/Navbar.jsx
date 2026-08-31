import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../Components/ProfileCard/ProfileCard';
import ReportsLayout from '../Components/ReportsLayout/ReportsLayout';
import './Navbar.css';
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileTab, setProfileTab] = useState('profile');
  const handleClick = () => {
    setMenuActive((prev) => !prev);
  };
  const toggleProfile = () => {
    setProfileOpen((prev) => !prev);
  };
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy
          <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
            <title>Doctor With Stethoscope SVG icon</title>
            <g>
              <g>
                <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
              </g>
            </g>
          </svg>
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={`fa ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <ul className={`nav__links ${menuActive ? 'active' : ''}`}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/appointments">Appointments</Link>
        </li>
        <li className="link nav__profile">
          <button className="btn1" onClick={toggleProfile}>Profile ▾</button>
          {profileOpen && (
            <div className="profile-dropdown">
              <div className="profile-dropdown-tabs">
                <button
                  className={profileTab === 'profile' ? 'active' : ''}
                  onClick={() => setProfileTab('profile')}
                >
                  Profile
                </button>
                <button
                  className={profileTab === 'reports' ? 'active' : ''}
                  onClick={() => setProfileTab('reports')}
                >
                  Your Reports
                </button>
              </div>
              {profileTab === 'profile' ? <ProfileCard /> : <ReportsLayout />}
            </div>
          )}
        </li>
        <li className="link">
          <Link to="/signup">
            <button className="btn1">Sign Up</button>
          </Link>
        </li>
        <li className="link">
          <Link to="/login">
            <button className="btn1">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
