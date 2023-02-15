import React, { useState } from "react";
import Calender from "./Calender";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [center, setCenter] = useState(0);
  const [dest, setDest] = useState(0);
  const [charge, setCharge] = useState(0);

  let name = localStorage.getItem("name");

  const handleSubmit = (e) => {
    e.preventDefault();
    let distance = center + dest;
    setCharge(distance * 50);
    setTitle("");
    setPhone("");
  };

  
  const changeDestination = (e) => {
    console.log(dest);
    setDest(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Please fill the form</h1>
        <input value={name} type="text" />
        <input
          type="number"
          placeholder="Enter your phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <select value={dest} onChange={changeDestination}>
            <option value="">Destination</option>
            <option value="10">Baghajatin, Kolkata, WB</option>
            <option value="20">Garia, Kolkata, WB</option>
            <option value="15">Sealdaha, Kolkata, WB</option>
            <option value="25">Jadavpur, Kolkata, WB</option>
          </select>
        </div>
        <Calender />
        <button type="submit">Submit</button>
      </form>
      <h3>{`You will have to pay RS: ${charge}`}</h3>
      <Link to="/payment">
        <p>For Payment</p>
      </Link>
    </div>
  );
};

export default CheckOut;