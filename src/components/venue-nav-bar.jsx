import React from 'react';
import '../assets/css/navbar2.css'
import { Link } from "react-router-dom";
const BigNavbar = () => {
  return (
    <nav className="venue-navbar">
      <div className="venue-navbar-left">
        
      <h1 className='h1'>Event Hub!!</h1>
      </div>
        <span className="partyhub-navbar-item"><Link to={`/addvenue`}style={{ textDecoration: 'none' ,color:'white'}}>Add Venue</Link></span>
      {/* <h1 className="partyhub-navbar-title">Party Hub</h1> */}
      
    </nav>
  );
}

export default BigNavbar;