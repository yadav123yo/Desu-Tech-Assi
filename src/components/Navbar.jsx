import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
      <div style={{display:"flex", gap:"10px",margin:"auto" } }>
        <Link to="/">Home</Link>
        <Link to="/list">Games</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">CheckOut</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
       
      </div>
        
    </div>
  )
}

export default Navbar