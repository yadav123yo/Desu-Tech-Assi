// import React, { useState } from 'react';


// function Checkout({ cartItems, total, handlePaymentMethod, handleTransportCharge }) {
//     const [eventStartDate, setEventStartDate] = useState('');
//     const [eventEndDate, setEventEndDate] = useState('');
//     const [setupDate, setSetupDate] = useState('');
//     const [location, setLocation] = useState('');
//     const [paymentMethod, setPaymentMethod] = useState('');
//     const [transportCharge, setTransportCharge] = useState(0);
  
//     const handleEnquiry = () => {
//     };
//     let cartItems = JSON.parse(localStorage.getItem('Cart'))

  
//     return (
//       <div>
//         <h2>Checkout</h2>
//         <form>
//           <label>Event Start Date and Time</label>
//           <input type="datetime-local" value={eventStartDate} onChange={(e) => setEventStartDate(e.target.value)} />
  
//           <label>Event End Date and Time</label>
//           <input type="datetime-local" value={eventEndDate} onChange={(e) => setEventEndDate(e.target.value)} />
  
//           <label>Setup Date and Time</label>
//           <input type="datetime-local" value={setupDate} onChange={(e) => setSetupDate(e.target.value)} />
  
//           <label>Location</label>
//           <select value={location} onChange={(e) => setLocation(e.target.value)}>
//             <option value="Baghajatin, Kolkata, WB">Baghajatin, Kolkata, WB</option>
//             <option value="Garia, Kolkata, WB">Garia, Kolkata, WB</option>
//             <option value="Newtown, Kolkata, WB">Newtown, Kolkata, WB</option>
//           </select>
  
//           <label>Payment Method</label>
//           <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//             <option value="UPI">UPI</option>
//             <option value="Cash">Cash</option>
//             <option value="Online">Online</option>
//             <option value="Cheque">Cheque</option>
//           </select>
  
//           <label>Transport Charge</label>
//           <input type="number" value={transportCharge} onChange={(e) => setTransportCharge(e.target.value)} />
  
//           <button onClick={handlePaymentMethod}>Calculate Payment Method</button>
//           <button onClick={handleTransportCharge}>Calculate Transport Charge</button>
//           <button onClick={handleEnquiry}>Make Enquiry</button>
//         </form>
  
//         <h3>Summary</h3>
//         <ul>
//           {cartItems.map((item, index) => (
//             <li key={index}>
//               {item.name} - ${item.price}
//             </li>
//           ))}
//         </ul>
//         <p>Total: ${total}</p>
//       </div>
//     );
//   }

//   export default Checkout