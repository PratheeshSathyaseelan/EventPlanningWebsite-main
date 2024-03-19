import React, { useState } from 'react';
import '../assets/css/addevents.css';

const AddEvents = () => {
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [participantsCount, setParticipantsCount] = useState(0);
  const [charges, setCharges] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      EventType: eventType,
      Description: description,
      ParticipantCount: participantsCount,
      Charges: charges
    };

    console.log(data);
    // You can add your Axios request here to send data to the backend

    // Reset the form fields after submission
    setEventType('');
    setDescription('');
    setParticipantsCount(0);
    setCharges(0);
  };

  return (
    <div className='mydiv'>
      <div className='add-event-div'>
        <h2>Add Event</h2>
        <form className ="add-event-form" onSubmit={handleSubmit}>
          <label>
            Event Type:
            <input
              type="text"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            />
          </label>
          <br />

          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            Charges:
            <input
              type="number"
              value={charges}
              onChange={(e) => setCharges(parseFloat(e.target.value))}
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;
