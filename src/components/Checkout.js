import React, { useState } from 'react';
import {Link} from "react-router-dom";

const locationOptions = [
  {
    Id: 1,
    Name: "Baghajatin, Kolkata, WB",
    Distance: 10,
  },
  {
    Id: 2,
    Name: "Garia, Kolkata, WB",
    Distance: 20,
  },
  {
    Id: 3,
    Name: "Sealdaha, Kolkata, WB",
    Distance: 15,
  },
  {
    Id: 4,
    Name: "Jadavpur, Kolkata, WB",
    Distance: 25,
  },
];

function Checkout() {
  const [eventStartDateTime, setEventStartDateTime] = useState('');
  const [eventEndDateTime, setEventEndDateTime] = useState('');
  const [setupDateTime, setSetupDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState(0);
  const [charge, setCharge] = useState(0);
  const [dest, setDest] = useState(0);



  const handleEventStartDateTimeChange = (event) => {
    setEventStartDateTime(event.target.value);
  };

  const handleEventEndDateTimeChange = (event) => {
    setEventEndDateTime(event.target.value);
  };

  const handleSetupDateTimeChange = (event) => {
    setSetupDateTime(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    let distance = (0+dest);
    setCharge(distance*50);
  
 }
 const changeDestination = (e) =>{
  console.log(dest);
  setDest(e.target.value);

}
localStorage.setItem("total", JSON.stringify(charge));

  return (
    <div>
      <h1>Checkout Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event Start date and time:
          <input
            type="datetime-local"
            value={eventStartDateTime}
            onChange={handleEventStartDateTimeChange}
            required
          />
        </label>
        <br />
        <label>
          Event End date and time:
          <input
            type="datetime-local"
            value={eventEndDateTime}
            onChange={handleEventEndDateTimeChange}
            required
          />
        </label>
        <br />
        <label>
          Setup date and time:
          <input
            type="datetime-local"
            value={setupDateTime}
            onChange={handleSetupDateTimeChange}
            required
          />
        </label>
        <br />
        <label>
          Location where event will be held:
          <select value={dest} onChange={changeDestination}>
            <option value="">Destination</option>
            <option value="20">Baghajatin, Kolkata, WB</option>
            <option value="40">Garia, Kolkata, WB</option>
            <option value="30">Sealdaha, Kolkata, WB</option>
            <option value="50">Jadavpur, Kolkata, WB</option>

          </select>
        </label>
        <br />
        <button type="submit">Submit Enquiry</button>
      </form>
      <h3>{`you will have to pay : ${charge}`}</h3>

      <Link to="/payment"><p>Click here to pay</p></Link>
    </div>
  );
}

export default Checkout;
