import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom'; // Import useLocation and Link
import '../assets/css/addevents.css';

const BookEvents = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation hook
  const email = location.state?.email;
  const [venue, setVenue] = useState('');
  const [bookingdate, setBookingDate] = useState('');
  const [eventtype, setEventType] = useState('');
  const [participantsCount, setParticipantsCount] = useState(0);
  const [venuesList, setVenuesList] = useState([]);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    // Simulate fetching venues
    const sampleVenues = [
      { venueId: 1, venueName: 'Venue A' },
      { venueId: 2, venueName: 'Venue B' },
      // Add more sample data as needed
    ];
    setVenuesList(sampleVenues);

    // Simulate fetching event types
    const sampleEvents = [
      { eventId: 1, eventType: 'Birthday Party' },
      { eventId: 2, eventType: 'Wedding' },
      // Add more sample data as needed
    ];
    setEventList(sampleEvents);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submitting form and navigating to make payment page
    navigate('/makepayment', { state: { email: email } });
  };

  return (
    <div className='mydiv'>
      <div className='add-event-div'>
        <h2>Book Event</h2>
        <form className="add-event-form" onSubmit={handleSubmit}>
          <label>
            Venue:
            <select value={venue} onChange={(e) => setVenue(e.target.value)} >
              <option value=''>Select Venue</option>
              {venuesList.map((venue) => (
                <option key={venue.venueId} value={venue.venueName} style={{ color: 'black' }}>
                  {venue.venueName}
                </option>
              ))}
            </select>
          </label>
          <br />

          <label>
            Booking Date:
            <input
              type="datetime-local"
              value={bookingdate}
              onChange={(e) => setBookingDate(e.target.value)}
            />
          </label>
          <br />

          <label>
            Participants Count:
            <input
              type="number"
              value={participantsCount}
              onChange={(e) => setParticipantsCount(parseInt(e.target.value))}
            />
          </label>
          <br />

          <label>
            Event Type:
            <select value={eventtype} onChange={(e) => setEventType(e.target.value)} >
              <option value=''>Select Event Type</option>
              {eventList.map((event) => (
                <option key={event.eventId} value={event.eventType} style={{ color: 'black' }}>
                  {event.eventType}
                </option>
              ))}
            </select>
          </label>
          <br />

          <button type="submit">Make Payment</button>
        </form>
      </div>
    </div>
  );
};

export default BookEvents;
