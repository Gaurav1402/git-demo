import React, { useContext } from "react";
import { AppContext } from "../../App";

const ContextD = () => {
    const { user, setData } = useContext(AppContext)
    const updateName = () => {
        setData({ user, name: "David" })
        console.log("Dff", user)
    }
    return (
        <>
            <div className="container border bg-info w-10 p-5">
                <h6> Component D</h6>
                <h6> Name :{user.name}</h6>
                <button type="button" onClick={updateName}>updateName</button>
            </div>
        </>
    )
}

export default ContextD