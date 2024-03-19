import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MediaCard from "./home-side-nav";
import "../assets/css/addevents.css"; // Reusing the CSS file from the previous component

const AllBookings = () => {
  const [bookingsData, setBooking] = useState([]);

  const handleReject = (bookingId) => {
    // Implement the functionality to reject a booking here
    // You can call an API to delete the booking with the given bookingId
    console.log(`Rejecting booking ${bookingId}`);
  };

  useEffect(() => {
    // Simulate fetching booking data from the server
    // Replace this with actual API calls to fetch booking data
    const fetchData = async () => {
      try {
        // Make API call to fetch booking data
        // const response = await fetch('API_ENDPOINT');
        // const data = await response.json();
        // setBooking(data);

        // For demonstration purpose, using mock data
        const mockData = [
          { bookingId: 1, eventType: 'Meeting', noOfPersons: 50, userId: 'John Doe', venueId: 'Venue A', ondate: '2024-02-14' },
          { bookingId: 2, eventType: 'Success Party', noOfPersons: 100, userId: 'Jane Smith', venueId: 'Venue B', ondate: '2024-03-20' }
        ];
        setBooking(mockData);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="venue-whole">
      <div className="venue-nav">
        <nav className="venue-navbar">
          <div className="venue-navbar-left">
            <img className="logo-1" src={"src/assets/images/Screenshot 2024-01-31 204130.png"} alt="Party Hub Logo" />
          </div>
        </nav>
      </div>
      <h3 style={{ color: "white", padding: "30px" }}>All Bookings:</h3>

      <div className="venue-cards">
        {bookingsData.map((booking, index) => (
          <div className="venue-card1" key={index}>
            <div className="venue-card-left">
              <h3>{booking.eventType}</h3>
              <p>No. of Persons: {booking.noOfPersons}</p>
              <p>Username: {booking.userId}</p>
              <p>Venue Name: {booking.venueId}</p>
              <p>On Date: {booking.ondate}</p>
              <p>Payment Status: pending</p>
            </div>
            <div className="venue-card-right">
              <button className="login-button">Approve</button>
              <button className="login-button" style={{ padding: "20px" }} onClick={() => handleReject(booking.bookingId)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBookings;
