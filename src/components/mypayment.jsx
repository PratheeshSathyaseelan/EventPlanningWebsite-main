import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MyPayments = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [payments, setPayments] = useState([]);

  // Dummy data for payments (replace with actual backend logic)
  useEffect(() => {
    const dummyPayments = [
      {
        paymentId: 1,
        amount: 100,
        userId: 'john@example.com',
        paymentMethod: 'Credit Card',
        paidDate: 1638252000, // Unix timestamp for payment date (change as needed)
      },
      {
        paymentId: 2,
        amount: 150,
        userId: 'alice@example.com',
        paymentMethod: 'PayPal',
        paidDate: 1638252000, // Unix timestamp for payment date (change as needed)
      },
      // Add more dummy payments as needed
    ];

    setPayments(dummyPayments);
  }, []);

  return (
    <div className='whole-user-dashboard'>
      <div className='my-bookings-container'>
        <nav className="partyhub-navbar">
          <div className="partyhub-navbar-left">
            <img className="logo-1" src={"src/assets/images/Screenshot 2024-01-31 204130.png"} alt="Party Hub Logo" />
          </div>
        </nav>
        <h3>My Payments:</h3>
        <div className='user-inside-div'>
          <ul className='bookings-list'>
            {payments.map((payment) => (
              <li key={payment.paymentId} className='booking-item'>
                <div className='payment-card-left'>
                  <h3>Amount: {payment.amount}$</h3>
                  <p>User ID: {payment.userId}</p>
                  {/* <p>Payment Date: {new Date(payment.paidDate * 1000).toLocaleDateString()}</p> */}
                  <p>Payment Method: {payment.paymentMethod}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPayments;
