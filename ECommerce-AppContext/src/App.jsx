import { useState } from 'react'
import React from 'react'
import ProductList from './components/ProductList';
import Header from './components/Header';

export const AppContext = React.createContext(null);
function App() {
  const products = [{
    id: 1, name: "Titan", price: 2000, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS79JFzgiXBrDq4Teyfn-K0v7Fr2NErucEIysQlg7vpzoncODMJGMJTjPPWkhjg2BT6CeJUWrTPSQZg0-H_2UNJ0v-wC-DKXDOy2oUSYjJs3l27MX2BK8Nk&usqp=CAE",
    desc: "For the stylish men who love to stay atop their style game.",
    qty: 7,
    totalprice: 2000
  }, {
    id: 2, name: "BVLGARI", price: 6100, img: "https://img.tatacliq.com/images/i21//658Wx734H/MP000000024623528_658Wx734H_202412211909181.jpeg",
    desc: "BVLGARI is crafted to suit their needs. Safeguarded by a minera",
    qty: 7,
    totalprice: 6100
  }, {
    id: 3, name: "Serpenti Viper Ring", price: 8800, img: "https://img.tatacliq.com/images/i21//658Wx734H/MP000000024148433_658Wx734H_202412202218421.jpeg",
    desc: "Serpenti Viper Ring analog watch from the Maritime collection.",
    qty: 7,
    totalprice: 8800
  },
  {
    id: 4, name: "GRIP Hand Grip/Fitness Grip ", price: 213, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/fitness-grip/p/9/c/r-shape-adjustable-hand-grip-counter-oddish-original-imahyz54mhgdgdyd.jpeg?q=70",
    desc: "GRIP Hand Grip/Fitness Grip is crafted to suit their needs. Safeguarded by a minera",
    qty: 7,
    totalprice: 213
  }
  ]
  const [prod, setprod] = useState(products)
  const [cartProd, setCartProd] = useState([])

  // const addToCart = (product) => {
  //     setCartProd([...cartProd, product]);
  // };
  const addToCart = (product) => {
    const existingProduct = cartProd.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cartProd.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1, totalprice: item.price * (item.qty + 1) } : item
      );
      setCartProd(updatedCart);
    } else {
      setCartProd([...cartProd, { ...product, qty: 1, totalprice: product.price }]);
    }
  };
  let obj = { prod, addToCart, cartProd }

  return (
    <>
      <div className="container  shadow bg-light">
        <h6>E-Commerce Apllication</h6>
        <AppContext.Provider value={obj} >
          <Header />
          <ProductList />
        </AppContext.Provider>
      </div>
    </>
  )
}

export default App
