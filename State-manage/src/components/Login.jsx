import React, {useState} from "react";

function Login(){
    const [isLogged,setisLogged]=useState(false);

// const [p1,setp1]=useState("");
// const [p2,setp2]=useState("Please login");

// function Change(){
//     setp1("Welcome Sam")
//     setp2("")
// }
// function Change1(){
//     setp2("Please login")
//     setp1("")
// }
// function login(){
//     setisLogged(true)
// }
// function logout(){
//     setisLogged(false)
// }
    return(
        <>
        {isLogged ? <p>Welcome Sam</p>: <p> Please Login</p>}
        {/* <p> {p1}</p>
        <p>{p2}</p> */}
        {isLogged ? <p><button className="btn btn-primary" onClick={()=>setisLogged(false)}>Logout</button> </p>: <p> <button className="btn btn-primary" style={{ marginRight: "10px" }} onClick={()=>setisLogged(true)} >Login</button></p>}
             <button className="btn btn-primary" style={{ marginRight: "10px" }} onClick={()=>setisLogged(true)} >Login</button>
             <button className="btn btn-primary" onClick={()=>setisLogged(false)}>Logout</button>                  
        </>
    )
}

export default Login