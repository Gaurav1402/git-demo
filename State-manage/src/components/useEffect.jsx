import React from "react";
import { useState, useEffect } from "react";

function UseEffect() {

    const [counter, setCounter] = useState(0)
    const Increment = () => {
        setCounter(counter + 1)
        console.log("conuter Increment")
    }
    const Decrement = () => {
        setCounter(counter - 1)
        console.log("conuter Decrement")
    }

    useEffect(() => {
        console.log("Inside useEffect")
        return () => {
            //clean up logic
        }
    }, [])

    console.log("Page rendered")
    return (
        <>
            <div className="container" styele={{ width: "180px", margin: "10px" }}>
                <p>Counter : {counter}</p>
                <button type="button" className="btn btn-success" style={{ marginRight: "10px" }} onClick={Increment}>Increment</button>
                <button type="button" className="btn btn-primary" onClick={Decrement}>Decrement</button>
            </div>
        </>
    )
}
export default UseEffect;