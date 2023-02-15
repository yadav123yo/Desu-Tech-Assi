import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);

    let data = JSON.parse(localStorage.getItem("user"))


    const HandleFormSubmit = () => {
         if(data.email===email && data.password===password)
         {
              setAuth(true);
              localStorage.setItem("cred", auth);
              alert("Login Successfully");
              navigate("/list");
         }else{
            setAuth(false);
            alert("Please Fill Valid Information");
         }
         setEmail("");
         setPassword("");
    }

  return (
    <div>
        <form  onSubmit={HandleFormSubmit}>
            <h1>Login Form</h1>
            <div>
                <label>Username : </label>
                <input type="email" value={email} placeholder='Enter your username' onChange={(e) => setEmail(e.target.value)}  />
                <br/>
                <label>Password : </label>
                <input type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}  />
                <br/>
                <button type="submit">Login</button>
                <br/>
                <p>New user ? {<a href='./signup'>Click here for Register</a>}</p>
            </div>
        </form>
    </div>
  )
}

export default Login