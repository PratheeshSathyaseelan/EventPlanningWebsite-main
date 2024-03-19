import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/dashboardadmin.css'; // Import the CSS file
import Dchart from './dchart';

const DashboardAdmin = () => {
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [availableEvents, setAvailableEvents] = useState(0);
  const [bookingsData, setBooking] = useState([]);

  useEffect(() => {
    // Simulated data for bookings
    const sampleBookings = [
      { eventType: 'Success Party', noOfPersons: 50, userId: 'John Doe', venueId: 'Venue A', ondate: '2024-02-14' },
      { eventType: 'Meeting', noOfPersons: 100, userId: 'Jane Smith', venueId: 'Venue B', ondate: '2024-03-20' },
      // Add more sample bookings data as needed
    ];
    setBooking(sampleBookings);

    // Simulated data for dashboard cards
    setTotalBookings(sampleBookings.length);
    setTotalEarnings(0); // You can set your total earnings here
    setAvailableEvents(0); // You can set your available events count here
  }, []);

  return (
    <div className='whole-dashboard'>
      <div className='ad-sidebar'>
        <ul>
          <li><Link to={`/`} className="add-events-link" color="white">Home</Link></li>
          <li><Link to={`/adminprofile`} className="add-events-link" color="white">My Profile</Link></li>
          <li><Link to={`/all-bookings`} className="all-bookings-link">All Bookings</Link></li>
          <li><Link to={`/all-event`} className="all-events-link">All Events</Link></li>
          <li><Link to={`/allvenues`} className="all-events-link">All Venues</Link></li>
          <li><Link to={`/logout`} className="logout-btn">Logout</Link></li>
        </ul>
      </div>
      <div className='main-dashboard'>
        <div className='ad-d2'>Admin Dashboard</div>
        <div className='ad-d3'>
          <div className="dashboard-container">
            <div className="dashboard-card">
              <h4>Total Bookings</h4>
              <h4>{totalBookings}</h4>
            </div>
            <div className="dashboard-card">
              <h4>Total Earnings</h4>
              <h4>{totalEarnings}$</h4>
            </div>
            <div className="dashboard-card">
              <h4>Bookings/Day</h4>
              <h4>3</h4> {/* You can set the bookings per day count */}
            </div>
            <div className="dashboard-card">
              <h4>Available Events</h4>
              <h4>{availableEvents}</h4>
            </div>
          </div>
        </div>
        <div className='ad-d4'>
          <div className='db-chart'>
            <Dchart />
          </div>
          <div className='booking-details-table'>
            <table>
              <thead>
                <tr>
                  <th>Event Type</th>
                  <th>No. of Persons</th>
                  <th>Username</th>
                  <th>Venue Name</th>
                  <th>On Date</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingsData.slice(0, 4).map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.eventType}</td>
                    <td>{booking.noOfPersons}</td>
                    <td>{booking.userId}</td>
                    <td>{booking.venueId}</td>
                    <td>{booking.ondate}</td>
                    <td>Pending</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
