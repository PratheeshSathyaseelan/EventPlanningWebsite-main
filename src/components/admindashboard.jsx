import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/admindashboard.css'; // Import the CSS file

const SidebarAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openNav = () => {
    setIsSidebarOpen(true);
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("welcome").style.transform = "translateX(120px)";
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("welcome").style.transform = "translateX(0)";
  };

  return (
    <div className='dashboard-div'>
      <div >
        <button className="menu-button" onClick={openNav} />

        {isSidebarOpen && (
          <div className="user-navbar" id="sidenav">
            <button className="close-button" onClick={closeNav}>
              x
            </button>
            <nav className="user-side-bar">
              <ul>
                <li>
                  <Link to={`/adminprofile`} className="add-events-link" color="white">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to={`/bookevents`} className="add-events-link">
                    Book Events
                  </Link>
                </li>
                <li>
                  <Link to={`/all-bookings`} className="all-bookings-link">
                    All Bookings
                  </Link>
                </li>
                <li>
                  <Link to={`/all-event`} className="all-events-link">
                    All Events
                  </Link>
                </li>
                <li>
                  <Link to={`/logout`} className="logout-btn">
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="row">
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
