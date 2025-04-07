import React from 'react'
import { AppContext } from '../App'

function ProductList() {
  const { prod, addToCart } = React.useContext(AppContext);
  return (
    <div className="row conatiner p-2">
      {prod.map((el, index) =>
        <div key={index} className="col-3 card ms-4 " style={{ width: "18rem" }}>
          <img className="card-img-top" src={el.img} style={{ width: '15rem', height: "18rem", margin: '1rem' }} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{el.name}</h5>
            <p className="card-text">₹{el.price}</p>
            <p className="card-text">{el.desc}</p>
            <p className="card-text">{el.qty}</p>
            <p className="card-text">{el.totalprice}</p>
            <button className="btn btn-primary" onClick={() => addToCart(el)}>Add To Cart</button>
          </div>
        </div>

      )}
    </div>
  )
}

export default ProductList
