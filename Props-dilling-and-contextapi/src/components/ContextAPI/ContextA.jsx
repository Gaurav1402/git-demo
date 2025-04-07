import React from "react";
import ContextB from "./ContextB";
const ContextA = () => {

    return (
        <>
            <div className="container border bg-primary w-10 p-5">
                <h6> Component A</h6>
            </div>
            <ContextB />
        </>
    )
}

export default ContextA