import React, { useState, useEffect } from 'react';

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('Cart')) || [];
    setCartItems(items);
  }, []);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('Cart', JSON.stringify(updatedItems));
    
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
           <img src={item.image} alt="" /> 
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;