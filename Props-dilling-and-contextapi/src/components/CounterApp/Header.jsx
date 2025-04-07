import React from "react";
import { AppContext } from "../../App";

const Header = () => {
    const { count } = React.useContext(AppContext);
    return (
        <>
            <div className="container shadow">
                <h6>  Header</h6>
                <p>Count :{count}</p>
            </div>

        </>
    )
}

export default Header