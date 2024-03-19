import React from 'react';
import '../assets/css/navbar2.css'
import { Link } from "react-router-dom";
const BigNavbar = () => {
  return (
    <nav className="partyhub-navbar">
      <div className="partyhub-navbar-left">
        <h1 className='h1'>Event Hub!!</h1>
      {/* <img className="logo-1" src={"src/assets/images/Screenshot 2024-01-31 204130.png"} alt="Event Hub Logo" /> */}
      </div>
        <span className="partyhub-navbar-item"><Link to={`/login`}style={{ textDecoration: 'none' ,color:'white'}}>Login</Link></span>
    
      
    </nav>
  );
}

export default BigNavbar;
