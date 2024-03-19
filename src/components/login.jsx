import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = () => {
    // Perform form validation here if needed
    // Simulate successful login
    sessionStorage.setItem('token', 'dummy_token');
    navigate('/userdashboard', { state: { email: email } });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mydiv">
      <div className="container-login">
        <div className="left-container">
          <div className="login-left-container">
            <div className="login-left-container-h2">
              <h2>Login</h2>
              <p><Link to={`/adminlogin`}> Or Login as Admin</Link></p>
            </div>
            <div className="login-info">
              <input type="email" className="login-username-input" placeholder="Email" value={email} onChange={handleEmailChange}></input>
              <input type="password" className="login-email-input" placeholder="Password" value={password} onChange={handlePasswordChange}></input>
              <p>Don't have an account? </p><Link to={`/register`} className="Register-link">Register</Link>
              <button className="login-button" onClick={handleFormSubmit}>Login</button>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="partyhub-info">
            <h2>PartyHub!</h2>
            <br></br>
            <p>
              Revolutionizing event planning with a central hub for users to showcase services and clients to seamlessly book and manage events. A user-friendly experience enhancing event planning for both users and clients.
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

export default Login;
