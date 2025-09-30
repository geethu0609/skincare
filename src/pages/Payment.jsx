// src/components/Payment.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { total } = location.state || { total: 0 };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <p>Total Amount: ₹{total}</p>

      <div className="qr-section">
        <p>Scan this QR code to complete your payment:</p>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=merchant@upi&pn=MyShop&am=100&cu=INR"
          alt="QR Code"
          className="qr-code"
        />
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default Payment;
