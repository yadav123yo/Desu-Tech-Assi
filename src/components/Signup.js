import React, { useState } from "react";
import styles from "../Style/signup.module.css"

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
  
    window.location.href = "/login";
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label> <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label> <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label> <br />
      <button className={styles.button} type="submit">Sign up</button>
    </form>
  );
}

export default Signup;