import React from "react";
function ProductDetails(props)
{console.log(props);
    return(
        <>
        {/* <div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={props.prdObj.img}/>
  <div className="card-body">
    <p className="card-text">
        <p>Product Name: {props.prdObj.name}</p>
        <p>Product Price: {props.prdObj.price}</p>
        <p>Product Description: {props.prdObj.desc}</p></p>
  </div>
</div> */}

{/* <div style={{ width: '18rem', margin: '1rem' }}>
            <img className="card-img-top" src={props.prdObj.img} style={{ width: '15rem', height :"18rem", margin: '1rem' }} alt={props.prdObj.name} />
            <h5 class="card-title">{props.prdObj.name}</h5>
            <b><p class="card-text">₹{props.prdObj.price}</p></b>
            <p class="card-text">{props.prdObj.desc}</p>
             <button class="btn btn-primary" onClick={()=>props.addToCart(props.prdObj.name)}>Add to cart</button>
            </div> */}

           <div className="container">
            <div className="row">
                {props.prdObj.map(product => (
                    <div className="col-md-6">
                       <div style={{ width: '18rem', margin: '1rem' }}>
            <img className="card-img-top" src={product.img} style={{ width: '15rem', height :"18rem", margin: '1rem' }} alt={product.name} />
            <h5 class="card-title">{product.name}</h5>
            <b><p class="card-text">₹{product.price}</p></b>
            <p class="card-text">{product.desc}</p>
             <button class="btn btn-primary" onClick={()=>props.addToCart(product.name)}>Add to cart</button>
            </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default ProductDetails 