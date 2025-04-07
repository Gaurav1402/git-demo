import React from "react";
import { AppContext } from "../../App";

const CounterControl = () => {
    const { incr, decr, reset } = React.useContext(AppContext);
    return (
        <>
            <div className="container ">
                <h6> Counter Control</h6>
                <button type="button" className="btn btn-success ms-2" onClick={incr}>Increment</button>
                <button type="button" className="btn btn-danger ms-2" onClick={decr}>Decrement</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={reset}>Reset</button>
            </div>

        </>
    )
}

export default CounterControl