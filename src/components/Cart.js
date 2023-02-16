import React, { useState, useEffect } from 'react';
import styles from "../Style/signup.module.css"

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
  if (localStorage.getItem('login') === 'true') {
    // user is logged in
    return (
      <div className={styles.container}>
        <h2>Cart</h2>
        <div>
      
          {cartItems.map((item) => (
            <div className={styles.dive}  key={item.id}>
             <img src={item.image} alt="" />  <br />
             <h2> {item.name}</h2> <br />
              <button className={styles.buttone} onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
      
        </div>
      </div>
    );
  } else {
alert("login first")  

};
}

export default Cart;