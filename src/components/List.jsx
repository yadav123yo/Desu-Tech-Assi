import React, {useState, useEffect } from 'react'
import axios from "axios";
import styles from "../Style/signup.module.css";


const List = () => {
   const [data, setData] = useState([]);
   var item = [];

   const getData =() => {
      axios.get(`https://odd-jade-cocoon-shoe.cyclic.app/gameList`).then((response)=>{
          setData(response.data);
      }).catch((err)=>{
         console.log(err);
      })
   }

   useEffect(() =>{
    getData();
   },[])

    const addToCart = (data) =>{
          item.push(data);
          localStorage.setItem("Cart", JSON.stringify(item));
          localStorage.setItem("name", JSON.stringify(item[1]));

          alert("Item Added To The Cart")
   }
   
   if (localStorage.getItem('login') === 'true') {
      // user is logged in
      
  return (
   <div className={styles.container} >
      {
          data.map((item,i) => {
              return <div className={styles.dive}  key={i}>
                  <img src={item.image} alt={item.name} />
                  <h2>{item.name}</h2>
                  
                  <button className={styles.buttone} onClick={() => addToCart(item)}>Add To Cart</button>
              </div>
          })
      }
   </div>
)
    } else {
      // user is not logged in
    alert("Login first")

}
}

export default List;