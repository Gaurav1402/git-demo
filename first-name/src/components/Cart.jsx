import React from "react";

const Cart=(props)=>{

    return(
        <>
        <h1> Cart Produts</h1>
        <p>Product Name: {props.prd.name}</p>
        <p>Product Price: {props.prd.price}</p>
        <p>Product Avalaible: {props.prd.isAvalaibe ? "Yes":"No"}</p>

        <div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src="https://img.tatacliq.com/images/i18//658Wx734H/MP000000019822200_658Wx734H_202406301656561.jpeg" alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">
        <p>Product Name: {props.prd.name}</p>
        <p>Product Price: {props.prd.price}</p>
        <p>Product Avalaible: {props.prd.isAvalaibe ? "Yes":"No"}</p></p>
  </div>
</div>
        </>
    )
}

export default Cart