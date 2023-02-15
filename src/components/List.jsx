import React, {useState, useEffect } from 'react'
import axios from "axios";

const List = () => {
   const [data, setData] = useState([]);
   var item = [];

   const getData =() => {
      axios.get(`https://odd-jade-cocoon-shoe.cyclic.app/gameList`).then((res)=>{
          setData(res.data);
      }).catch((err)=>{
         console.log(err);
      })
   }

   useEffect(() =>{
    getData();
   },[])

    const addCart = (data) =>{
          item.push(data);
          localStorage.setItem("Cart", JSON.stringify(item));
          alert("Item Added To The Cart")
   }

  return (
     <div>
        {
            data.map((item,i) => {
                return <div  key={i}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <button onClick={() => addCart(item)}>Add To Cart</button>
                </div>
            })
        }
     </div>
  )
}

export default List;