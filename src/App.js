
import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import List from './components/List';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {


  return (
    <>
      <Navbar/>
      <h1 style={{textAlign:"center", padding:"20px 0px 20px 0px",}}>Event-Game-Booking</h1>
      <Routes className="App">
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/list" element={<List />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}



      
      </Routes>
    </>
  );
}

export default App;
