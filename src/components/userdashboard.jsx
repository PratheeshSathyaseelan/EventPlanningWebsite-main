import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import '../assets/css/userdashboard.css'; 
import Dchart from './dchart';
import Footer from './footer';
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
                        <h4>Elevate Your Occasion: Book Unforgettable Moments for General Meetings, Success Parties, and Corporate Gatherings!</h4>
                       </div>

                    
                    </div>
                   <br></br><br></br>
                    <div className='side-card-section'>
                        <div className='side-cards'>
                            <div className='side-card-2'>
                            <MediaCard title="Success Party" content="Content for Success Event" imageSrc={"data:image/jpeg;base64,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"} />
                            </div>
                            <div className='side-card-2'>
                            <MediaCard title="General Meeting" content="Content for General Meeting" imageSrc={"src/assets/images/images.jpeg"}/>
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
        {/* <Footer/> */}
        </div>

  );
};

export default DashboardUser;
