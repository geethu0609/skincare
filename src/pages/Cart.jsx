import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const initialCart = [
  { id: 1, name: "Glow Face Wash", price: 299, quantity: 1 },
  { id: 4, name: "Vitamin C Serum", price: 699, quantity: 2 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const navigate = useNavigate();

  const increment = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item));
  };

  const decrement = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1} : item));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleConfirm = () => {
    navigate("/payment", { state: { totalPrice, totalQuantity } });
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-control">
                <button onClick={() => decrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increment(item.id)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p>Total Quantity: <strong>{totalQuantity}</strong></p>
          <p>Total Price: <strong>₹{totalPrice}</strong></p>
          <button className="confirm-btn" onClick={handleConfirm}>Confirm & Pay</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
