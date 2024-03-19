import React from 'react';
import '../assets/css/navbar2.css'
import { Link } from "react-router-dom";
const BigNavbar = () => {
  return (
    <nav className="venue-navbar">
      <div className="venue-navbar-left">
        
      <img className="logo-1" src={"src/assets/images/Screenshot 2024-01-31 204130.png"} alt="Party Hub Logo" />
      </div>
        <span className="partyhub-navbar-item"><Link to={`/addvenue`}style={{ textDecoration: 'none' ,color:'white'}}>Add Venue</Link></span>
      {/* <h1 className="partyhub-navbar-title">Party Hub</h1> */}
      
    </nav>
  );
}

export default BigNavbar;