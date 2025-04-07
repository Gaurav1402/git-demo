import React from "react";
import CompB from "./compB";

const CompA = (props) => {
    const { user, update } = props;
    console.log("A", user);


    return (
        <>
            <div className="container border bg-primary w-10 p-5">
                <h6> Component A</h6>
            </div>

            <CompB user={user} and update={update} />
        </>
    )
}

export default CompA