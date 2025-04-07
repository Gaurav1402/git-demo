import React from "react";
import CompC from "./compC";

const CompB = (props) => {
    const { user, update } = props;
    console.log("B", user);
    return (
        <>
            <div className="container shadow bg-secondary w-10 p-5">
                <h6> Component B</h6>
            </div>
            <CompC user={user} and update={update} />
        </>
    )
}

export default CompB