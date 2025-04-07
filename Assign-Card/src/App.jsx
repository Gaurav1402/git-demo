import './App.css'
import Cart from './components/Cart'
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setcart] = useState([])

  function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios.get(url).then((responce) => {
      if (responce) {
        console.log("data fetch", responce.data);
        setcart(responce.data);
      }
    }
    ).catch((error) => {
      console.log("error message", error.message);
    })
  }
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <>
      <div className='main-body'>
        {cart.map((user) =>
          <Cart key={user.id} cartData={user} />
        )}

      </div>
    </>
  )
}

export default App
