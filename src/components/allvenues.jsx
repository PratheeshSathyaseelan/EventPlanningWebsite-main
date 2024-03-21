import BigNavbar from "./venue-nav-bar";
import "../assets/css/venue.css";
import React, { useEffect, useState } from 'react';

const Allvenues = () => {
    const [venueData, setVenues] = useState([]);

    // Assuming you already have some data for venues, either hardcoded or from another source

    useEffect(() => {
        // Simulating data fetching from the backend API
        const fetchVenues = async () => {
            try {
                // Simulated response data
                const responseData = [
                    { venueId: 1, venueName: "Venue 1", location: "Location 1" },
                    { venueId: 2, venueName: "Venue 2", location: "Location 2" },
                    // Add more venues as needed
                ];
                // Set the fetched venues into state
                setVenues(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchVenues();
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
                            {/* Edit button can be added here */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Allvenues;
