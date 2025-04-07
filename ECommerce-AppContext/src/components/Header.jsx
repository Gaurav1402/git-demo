import React from 'react'
import { AppContext } from '../App'

function Header() {
  const { cartProd } = React.useContext(AppContext);
  return (
    <div className="container  shadow p-5">
      <div className="row conatiner">
        <h2>Cart</h2>
        {cartProd.length > 0 ? (
          cartProd.map((el, index) => (
            <div key={index} className="col-3 card ms-4 " style={{ width: "18rem" }}>
              <img className="card-img-top" src={el.img} style={{ width: '15rem', height: "18rem", margin: '1rem' }} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">₹{el.price}</p>
                <p className="card-text">{el.desc}</p>
                <p className="card-text">{el.qty}</p>
                <p className="card-text">₹{el.totalprice}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  )
}

export default Header
