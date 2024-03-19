import React, { useState, useEffect } from 'react';
import BigNavbar from "./venue-nav-bar";

const AllVenues = () => {
    const [venueData, setVenues] = useState([]);

    // Sample venue data
    const sampleVenues = [
        { venueId: 1, venueName: 'Venue A', location: 'Location A' },
        { venueId: 2, venueName: 'Venue B', location: 'Location B' },
        // Add more sample data as needed
    ];

    useEffect(() => {
        // Simulating fetching data from backend (remove this in actual implementation)
        setVenues(sampleVenues);
    }, []);

    return (
        <div className="venue-whole">
            <div className="venue-nav">
                <BigNavbar />
            </div>
            <h3 style={{ color: "white", padding: "30px" }}>Available Venues:</h3>

            <div className="venue-cards">
                {venueData.map((venue, index) => (
                    <div className="venue-card1" key={index}>
                        <div className="venue-card-left">
                            <h3>{venue.venueName}</h3>
                            <p>Location: {venue.location}</p>
                        </div>
                        <div className="venue-card-right">
                            <button className="login-button">Edit</button>
                            <button className="login-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllVenues;
