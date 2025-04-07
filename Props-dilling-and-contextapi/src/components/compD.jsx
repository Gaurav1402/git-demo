import React from "react";

const CompD = (props) => {
    const { user, update } = props;
    console.log("D", user);
    function updateName() {
        update({ ...user, name: "Ganesh" })
    }
    return (
        <>
            <div className="container shadow bg-info w-10 p-5">
                <h6> Component D</h6>
                <h6> Name : {user.name}</h6>
                <button onClick={updateName}>Update</button>
            </div>
        </>
    )
}

export default CompD