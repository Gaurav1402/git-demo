import React from "react";
import ContextC from "./ContextC";
const ContextB = () => {
    return (
        <>
            <div className="container border bg-secondary w-10 p-5">
                <h6> Component B</h6>
            </div>
            <ContextC />
        </>
    )
}

export default ContextB