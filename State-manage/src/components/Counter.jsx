import React, {useState} from "react";

function Counter(){
const [count,setCount]=useState(0);
    const Increment=()=>{
setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }
    return(
        <>
        <div className="container" styele={{width : "180px", margin : "10px"}}>
        <p>Counter : {count}</p>
        <button type="button" class="btn btn-success" style={{ marginRight: "10px" }} onClick={Increment}>Increment</button>

        <button type="button" class="btn btn-primary" onClick={Decrement}>Decrement</button>
        </div>
        </>
    )
}

export default Counter;