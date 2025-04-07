import React, {useState} from "react";
function Product(){
const obj={
    name:"Titan",price:20000,img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS79JFzgiXBrDq4Teyfn-K0v7Fr2NErucEIysQlg7vpzoncODMJGMJTjPPWkhjg2BT6CeJUWrTPSQZg0-H_2UNJ0v-wC-DKXDOy2oUSYjJs3l27MX2BK8Nk&usqp=CAE",
        desc:"For the stylish men who love to stay atop their style game, this analog watch from the Maritime collection by Titan is crafted to suit their needs. Safeguarded by a minera",
        qty:1
}
const [Prd,setPrd]=useState(obj);
const Increment=()=>{
    let q=Prd.qty+1;
    setPrd({...Prd,qty:q})
        }
        const Decrement=()=>{
            let q=Prd.qty-1;
            q==0? setPrd({...Prd,qty:1}): setPrd({...Prd,qty:q})
        }       
    return(
        <> 
           <div className="container">
            <div className="row">
             <div className="col-md-6">
             <div style={{ width: '18rem', margin: '1rem' }}>
            <img className="card-img-top" src={Prd.img} style={{ width: '15rem', height :"18rem", margin: '1rem' }} alt={Prd.name} />
            <h5 class="card-title">{Prd.name}</h5>
            <b><p class="card-text">₹{Prd.price}</p></b>
            <p class="card-text">{Prd.desc}</p>
            <b><p class="card-text">{Prd.qty}</p></b>
            <b><p class="card-text">Total : {Prd.price * Prd.qty}</p></b>
             <button class="btn btn-primary" style={{ marginRight: "10px" }} onClick={Increment}>Increment</button>
             <button class="btn btn-primary"onClick={Decrement}>Decrement</button>
            </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Product