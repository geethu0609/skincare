import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const location = useLocation();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // If navigating from Payment page, add the order to orders
    if (location.state?.totalPrice && location.state?.cartItems) {
      const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        total: location.state.totalPrice,
        items: location.state.cartItems,
        deliveryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      };
      setOrders((prev) => [newOrder, ...prev]);
    }
  }, [location.state]);

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p className="no-orders">You haven’t placed any orders yet!</p>
      ) : (
        <div className="orders-grid">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-header">
                <h3>Order ID: {order.id}</h3>
                <p>Date: {order.date}</p>
              </div>
              <div className="order-items">
                {order.items.map((item) => (
                  <div className="order-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p className="item-name">{item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-summary">
                <p><strong>Total:</strong> ₹{order.total}</p>
                <p><strong>Estimated Delivery:</strong> {order.deliveryDate}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
