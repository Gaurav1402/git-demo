import React from "react";

function Product({fillprod}){

    console.log("Product",fillprod)
    
    return(
        <>
        <div className="row conatiner">
        {fillprod.map((el,index)=>
        <div key={index} className="col-3 card ms-4 "  style={{width: "18rem"}}>
        <img className="card-img-top" src={el.image} style={{ width: '15rem', height :"18rem", margin: '1rem' }} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{el.title}</h5>
          <p className="card-text">₹{el.price}</p>
          <p className="card-text">{el.description}</p>
          <p className="card-text">{el.rating.rate}</p>
          <p className="card-text">{el.rating.count}</p>

          <a href="#" className="btn btn-primary">Add To Cart</a>
        </div>
      </div>
  
        )}
            </div>
        </>
    )
}

export default Product