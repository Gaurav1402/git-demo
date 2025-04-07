import React, {useState} from "react";

function UseNameUpdate(){
const [userName,setuserName]=useState("");
 function change(event){
    setuserName(event.target.value)
}
    return(
        <>
        <div className="container mb-3">
            <label  className="form-label">User Name:</label >
            <input type="text"  placeholder="username" value={userName} onChange={change} />  </div>
            <div className="mb-3">
                <p>Enter User Name : {userName}</p>
            </div>
   
        </>
    )
}

export default UseNameUpdate;