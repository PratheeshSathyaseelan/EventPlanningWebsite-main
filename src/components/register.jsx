import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = {
      email: email,
      password: password,
      name: name
    };
    console.log(form);
    // Handle form submission logic here, like form validation
  };

  return (
    <div className="mydiv">
      <div className="container-login">
        <div className="left-container">
          <div className="login-left-container">
            <div className="login-left-container-h2">
              <h2>Register</h2>
            </div>
            <div className="login-info">
              <input
                type="email"
                className="login-username-input"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                className="login-email-input"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <input
                className="login-email-input"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              <button className="login-button" onClick={handleFormSubmit}>
                <Link to={`/login`} style={{ textDecoration: 'none', color: 'white' }}>
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div id="signupForm" className="right-container signup-form">
          <div className="partyhub-info">
            <h2>PartyHub!</h2>
            <p>
              Revolutionizing event planning with a central hub for users to showcase services and
              clients to seamlessly book and manage events. A user-friendly experience enhancing
              event planning for both users and clients.
            </p>
          </div>
          <div className="partyhub-features">
            <ul>
              <li>Seamless Booking</li>
              <li>User-Friendly Experience</li>
              <li>Comprehensive Showcase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
