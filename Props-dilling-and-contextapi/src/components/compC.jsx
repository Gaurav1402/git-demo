import React from "react";
import CompD from "./compD";

const CompC = (props) => {
    const { user, update } = props;
    console.log("C", user);
    return (
        <>
            <div className="container shadow bg-warning w-10 p-5">
                <h6> Component C</h6>
            </div>
            <CompD user={user} and update={update} />
        </>
    )
}

export default CompC