import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/MyBookings.css';
import BigNavbar from './navbar2';

const MyBookings = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const bookNewPage = () => {
    navigate('/bookevents', { state: { email: email } });
  };

  // Dummy data for bookings (replace with actual backend logic)
  useEffect(() => {
    const dummyBookings = [
      {
        bookingId: 1,
        eventType: 'Success Party',
        noOfPersons: 20,
        userId: 'john@example.com',
        venueId: 'Venue A',
        ondate: '2024-03-20',
        paymentStatus: 'Paid',
      },
      {
        bookingId: 2,
        eventType: 'Meeting',
        noOfPersons: 50,
        userId: 'alice@example.com',
        venueId: 'Venue B',
        ondate: '2024-03-25',
        paymentStatus: 'Pending',
      },
      // Add more dummy bookings as needed
    ];

    setBookings(dummyBookings);
  }, []);

  return (
    <div className='whole-user-dashboard'>
      <div className='my-bookings-container'>
        <nav className="partyhub-navbar">
          <div className="partyhub-navbar-left">
           <h1 className='h1'>Event Hub!!</h1>
          </div>
          <span className="partyhub-navbar-item" onClick={bookNewPage}>Book New!</span>
        </nav>
        <h3>My Bookings:</h3>
        <div className='user-inside-div'>
          <ul className='bookings-list'>
            {bookings.map((booking) => (
              <li key={booking.bookingId} className='booking-item'>
                <div className='venue-card-left'>
                  <h3>{booking.eventType}</h3>
                  <p>No. of Persons: {booking.noOfPersons}</p>
                  <p>Username: {booking.userId}</p>
                  <p>Venue Name: {booking.venueId}</p>
                  <p>On Date: {booking.ondate}</p>
                  <p>Payment Status: {booking.paymentStatus}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
