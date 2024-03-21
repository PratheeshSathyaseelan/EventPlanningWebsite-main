import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "./home-side-nav";

const AllEvents = () => {
  return (
    <div>
      <div className="all-events-inside-div">
        <nav className="venue-navbar">
          <div className="venue-navbar-left">
           <h1 className="h1">Event Hub!!</h1>
          </div>
          <span className="partyhub-navbar-item">
            <Link
              to={`/addevent`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Add Event
            </Link>
          </span>
        </nav>
        <div className="al-d3">
          <p>Available Events:</p>
        </div>

        <div className="side-card-section">
          <div className="side-cards">
            <div className="side-card-1">
              <MediaCard
                title="Success Event"
                content="Content for Birthday Event"
                imageSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdA21O6QvdY3EGPGnyAlfNXQ2PCC2ItmemrmCCk3rTTy8SvauKoRb0aX5ZZEX9_GegK9s&usqp=CAU"}
              />
            </div>
            <div className="side-card-2">
              <MediaCard
                title="Meeting Event"
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
    </div>
  );
};

export default AllEvents;
