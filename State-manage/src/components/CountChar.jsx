import React, {useState} from "react";

function CountChar(){
const [userName,setuserName]=useState("");
 function change(event){
    setuserName(event.target.value)
}
    return(
        <>
        <div className="container mb-3">
            <label  className="form-label">User Name:</label >
            <input type="text" maxLength={3000} placeholder="username" value={userName} onChange={change} />  </div>
            <div className="mb-3">
                <p>Count of length : {userName.length}/300</p>
            </div>
   
        </>
    )
}

export default CountChar;