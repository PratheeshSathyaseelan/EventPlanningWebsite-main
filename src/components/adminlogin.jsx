import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = () => {
    const form = {
      email: email,
      password: password
    };

    console.log("Form submitted:", form);

    // You can add your authentication logic here
    // For demo purposes, we're logging form data
    // and navigating to admin dashboard
    navigate('/admindashboard', { state: { email: email } });
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
              <h2>Login As Admin</h2>
            </div>
            <div className="login-info">
              <input type="email" className="login-username-input" placeholder="Email" value={email} onChange={handleEmailChange}></input>
              <input type="password" className="login-email-input" placeholder="Password" value={password} onChange={handlePasswordChange}></input>
              <button className="login-button" onClick={handleFormSubmit}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
