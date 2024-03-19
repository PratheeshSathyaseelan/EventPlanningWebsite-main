import React from 'react';
import '../assets/css/home2.css';
import MediaCard from './home-side-nav';
import BigNavbar from './navbar2';

import Footer from './footer';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-div">
      <div className='inside-div'>
        <BigNavbar />
        <div className='home-content1'>
          <div className='home-heading'><h1>Event Hub!</h1></div>
         
          <div className='home-heading-2'>
          <h3>Plan Your Events with Style and Joy!</h3>
          <h3>Explore a world of possibilities for birthdays, weddings, and corporate events.</h3>
          </div>
        </div>

        <div className="home-center-container">
        <button className="home-custom-button" ><Link to={`/register` } style={{ textDecoration: 'none' ,color:'white'}}className="Register-link">Register</Link></button>
        </div>
        <br></br>
        <br></br>
        <Footer/>
        <br></br><br></br><br></br><br></br>    
        <div className='side-card-section'>
          <div className='side-cards'>
            <div className='side-card-1'>
              <MediaCard title="Birthday Event" content="Content for Birthday Event" imageSrc={"src/assets/images/Birthday-Cake-with-candles.jpg"} />
            </div>
            <div className='side-card-2'>
              <MediaCard title="Marriage Event" content="Content for Marriage Event" imageSrc={"src/assets/images/images.jpeg"}/>
            </div>
            <div className='side-card-3'>
              <MediaCard title="Corporate Event" content="Content for Corporate Event" imageSrc={"src/assets/images/download.jpeg"}/>
            </div>
            <div className='side-card-4'>
              <MediaCard title="Custom Event" content="Custom Content for Event" imageSrc={"src/assets/images/download (1).jpeg"}/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
