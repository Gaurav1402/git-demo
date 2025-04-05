import { useState } from 'react'
import React from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';
import Vegtables from './components/Vegtables';
import Category from './components/Category';
import Product from './components/Product';

export const AppContext = React.createContext(null);
function App() {
  const [prData, setprData] = useState([])
  const [category, setCategory] = useState(["fruits", "meat", 'vegetables', 'seafood', 'dairy'])
  const [filterData, setfilterData] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const url = "https://dummyjson.com/products/category/groceries";
        const responce = await axios.get(url);
        if (responce) {
          console.log(responce.data);
          setprData(responce.data.products);
          filterProduct(responce.data.products, "fruits")
        }
      }
      catch (error) {
        console.log(error.message)
      }
    };

    fetchAPI()
  }, [])

  function filterProduct(prData, category) {
    let filData = prData.filter((el) => el.tags[0] === category);
    setfilterData(filData)
  }



  // let type = [];
  // type = prData.map(element => {
  //   return element.tags;
  // });
  // console.log("jfdsdsdsfff", type)
  // let arr = type.flat(Infinity);
  // console.log("jffff", arr)
  // const categories = new Set(arr);
  // console.log("unique", categories)

  return (
    <>
      <div className="conatianer border bg-light ">
        <h6>Groceries with Async Await</h6>
        <AppContext.Provider value={{ prData, filterData, category, filterProduct }}>
          <Category />
          {/* <Vegtables /> */}
          <Product />
        </AppContext.Provider>
      </div>
    </>
  )
}

export default App
