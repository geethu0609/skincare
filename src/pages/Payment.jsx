import React from "react";
import { useLocation } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; // ✔ use named import
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const { totalPrice, totalQuantity } = location.state || { totalPrice: 0, totalQuantity: 0 };

  // calculate delivery date: 3 days from now
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const deliveryDateString = deliveryDate.toLocaleDateString();

  const qrData = `Amount: ₹${totalPrice}\nQuantity: ${totalQuantity}\nEstimated Delivery: ${deliveryDateString}`;

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <p>Scan this QR code to pay ₹{totalPrice}</p>
      <QRCodeCanvas value={qrData} size={250} fgColor="#ff6f61" />
      <p>Estimated Delivery: {deliveryDateString}</p>
    </div>
  );
};

export default Payment;
