import { useState } from "react";
import styles from "../Style/signup.module.css"


function Payment() {
  const [upiId, setUpiId] = useState("");
  const [password, setPassword] = useState("");

  function handleUpiIdChange(event) {
    setUpiId(event.target.value);
  }
  const total= JSON.parse(localStorage.getItem('total')) || [];

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handlePaymentSubmit(event) {
    event.preventDefault();
    localStorage.setItem("upi", password);
    alert(`Your booking is done. 
    Your Total Amount is ${total}`);

    window.location.href = "/list";
  }

  if (localStorage.getItem('login') === 'true') {
    // user is logged in
    return (
      <div className={styles.payment}>
        <div className={styles.upi}>
          <img src="https://tse1.mm.bing.net/th?id=OIP.KebWINzXtrBknNlsBxEivQHaFj&pid=Api&P=0" alt="UPI" />
        </div>
        <h1>Make a Payment</h1>
        <form onSubmit={handlePaymentSubmit}>
          <label>
            UPI ID:
            <input type="text" value={upiId} onChange={handleUpiIdChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    // user is not logged in
  alert("Login First")

  }
}

export default Payment;
