import React, { useState } from 'react';

const AddVenue = () => {
  const [venueName, setVenueName] = useState('');
  const [venueLocation, setVenueLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      venueName: venueName,
      location: venueLocation
    };

    console.log(data);
    // You can add your Axios request here to send data to the backend

    // Reset the form fields after submission
    setVenueName('');
    setVenueLocation('');
  };

  return (
    <div className='mydiv'>
      <div className='add-event-div'>
        <h2>Add Venue</h2>
        <form className="add-event-form" onSubmit={handleSubmit}>
          <label>
            Venue Name:
            <input
              type="text"
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
            />
          </label>
          <br />

          <label>
            Venue Location:.
            <input
              type="text"
              value={venueLocation}
              onChange={(e) => setVenueLocation(e.target.value)}
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddVenue;
