import React from "react";
import MediaCard from "./home-side-nav";

const AllEventsUser = () => {
  return (
    <div className="home-div">
      <nav className="venue-navbar">
        <div className="venue-navbar-left">
          <img
            className="logo-1"
            src={"src/assets/images/Screenshot 2024-01-31 204130.png"}
            alt="Party Hub Logo"
          />
        </div>
      </nav>
      <div className="al-d3">
        <p>Available Events:</p>
      </div>

      <div className="side-card-section">
        <div className="side-cards">
          <div className="side-card-1">
            <MediaCard
              title="Birthday Event"
              content="Content for Birthday Event"
              imageSrc={
                "src/assets/images/Birthday-Cake-with-candles.jpg"
              }
            />
          </div>
          <div className="side-card-2">
            <MediaCard
              title="Marriage Event"
              content="Content for Marriage Event"
              imageSrc={"src/assets/images/images.jpeg"}
            />
          </div>
          <div className="side-card-3">
            <MediaCard
              title="Corporate Event"
              content="Content for Corporate Event"
              imageSrc={"src/assets/images/download.jpeg"}
            />
          </div>
          <div className="side-card-4">
            <MediaCard
              title="Custom Event"
              content="Custom Content for Event"
              imageSrc={"src/assets/images/download (1).jpeg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEventsUser;
