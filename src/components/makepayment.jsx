import React, { useState } from 'react';
import '../assets/css/addevents.css';

const MakePayment = () => {
  const [amount, setAmount] = useState(0);
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    const data = {
      amount: amount,
      paidDate: paymentDate,
      paymentMethod: paymentMethod,
    };

    console.log(data);
    // You can add further logic here, such as form validation

    // Reset form fields after submission if needed
    setAmount(0);
    setPaymentDate('');
    setPaymentMethod('');
  };

  return (
    <div className='mydiv'>
      <div className='add-event-div'>
        <h2>Make Payment</h2>
        <form className="add-event-form" onSubmit={handlePaymentSubmit}>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </label>
          <br />
          <label>
            Payment Date:
            <input
              type="date"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
            />
          </label>
          <br />
          <label>
            Payment Method:
            <input
              type="text"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;
