import React from "react";
import ContextD from "./ContextD";
const ContextC = () => {

    return (
        <>
            <div className="container border bg-warning w-10 p-5">
                <h6> Component C</h6>
            </div>
            <ContextD />
        </>
    )
}

export default ContextC