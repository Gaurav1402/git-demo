import React from "react";

const Product=(props)=>{
console.log(props)
    return(
        <>

        <h2>Categories</h2>
        <u>
            {props.catArr.map((el,index)=>(
                <li >{el}</li>
            ))
            }
            {/* <li>{props.catArr[0]}</li> */}
        </u>
        </>
    )
}

export default Product;