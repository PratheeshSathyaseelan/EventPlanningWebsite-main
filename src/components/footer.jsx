import React from 'react';
import classNames from 'classnames';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="card">
      <img className="social-icon" src={"src/assets/images/balloon_10072456.png"} alt="Party Hub Logo" />
      <br></br>
        <h2 className="footer-heading">Friendly <br></br>Team</h2>
        <p className="footer-text">Our dedicated and friendly team is ready to make your event memorable.</p>
      </div>

      <div className="card">
      <img className="social-icon" src={"src/assets/images/red-carpet_12046871.png"} alt="Party Hub Logo" />

        <h2 className="footer-heading">Perfect Venues</h2>
        <p className="footer-text">Discover the perfect venues for your special occasion with our expert guidance.</p>
      </div>

      <div className="card">
      <img className="social-icon" src={"src/assets/images/balloon_10072456.png"} alt="Party Hub Logo" />

        <h2 className="footer-heading">Unique Scenarios</h2>
        <p className="footer-text">Create unforgettable memories with our unique and customized event scenarios.</p>
      </div>

     
    </footer>
  );
};

export default Footer;