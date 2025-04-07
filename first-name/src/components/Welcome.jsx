import React from "react";

import './Welcome.css'
function Welcome(props)
{
    const {name,city}=props;
    return(
        <div>
        <h1> Welcome to react</h1>
        <p> Name is {name}</p>
        <p> City is {city}</p>
        </div>
       
    )
}

export default Welcome;