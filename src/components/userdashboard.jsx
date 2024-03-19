import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import '../assets/css/userdashboard.css'; 
import Dchart from './dchart';
import MediaCard from './home-side-nav';
import { useLocation } from 'react-router-dom';
const DashboardUser= (props) => {
    const location = useLocation();
    const email = location.state?.email;
console.log("email:",email);
const navigate = useNavigate();
const mybooking =()=>{
    navigate('/mybookings', { state: { email: email } });
}
const gotomypayment =()=>{
    navigate('/mypayment', { state: { email: email } });
}
  return (
    
    <div className='whole-user-dashboard'>
<div className='user-inside-div'>
       
            <div className='user-sidebar'>
                <ul>
                        <li>
                        <Link to={`/`} className="add-events-link" color="white">

                            Home
                        </Link>
                        </li>
                        <li>
                        <Link to={`/all-event-user`} className="all-events-link">
                            All Events
                        </Link>
                        </li>
                        <li>
                        <Link to={`/adminprofile`} className="add-events-link" color="white">

                            My Profile
                        </Link>
                        </li>
                    
                        <li className="all-bookings-link" onClick={()=>mybooking()}>

                My Bookings
            
                        </li>
                        
                        <li className="all-events-link" onClick={()=>gotomypayment()}>
                         
                            My Payment
                       
                        </li>
                        <li>
                        <Link to={`/logout`} className="logout-btn">
                            Logout
                        </Link>
                        </li>
                    </ul>

            </div>
            <div className='main-dashboard'>

                    <div className='ud-d2'>
                        <h2>Welcome</h2>
                      <div className='ud-d3'>
                        <h4>Elevate Your Occasion: Book Unforgettable Moments for Birthdays, Marriages, and Corporate Gatherings!</h4>
                       </div>

                    
                    </div>
                   <br></br><br></br>
                    <div className='side-card-section'>
                        <div className='side-cards'>
                            <div className='side-card-2'>
                            <MediaCard title="Birthday Event" content="Content for Birthday Event" imageSrc={"src/assets/images/Birthday-Cake-with-candles.jpg"} />
                            </div>
                            <div className='side-card-2'>
                            <MediaCard title="Marriage Event" content="Content for Marriage Event" imageSrc={"src/assets/images/images.jpeg"}/>
                            </div>
                            <div className='side-card-2'>
                            <MediaCard title="Corporate Event" content="Content for Corporate Event" imageSrc={"src/assets/images/download.jpeg"}/>
                            </div>
                            <div className='side-card-4'>
                            <MediaCard title="Custom Event" content="Custom Content for Event" imageSrc={"src/assets/images/download (1).jpeg"}/>
                            </div>
                        </div>
                </div>

        

     
            </div>
        </div>
        </div>

  );
};

export default DashboardUser;
