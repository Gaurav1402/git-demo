import React, { useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom';
function Flights() {
    const [source, setSource] = useState('')
    const [dest, setDest] = useState('')
    const navigate = useNavigate();
    function search() {
        navigate(`/flightslist?source=${source}&dest=${dest}`)
    }

    return (
        <>
            <h5>Flight components</h5>
            <form className="p-4 border rounded shadow bg-light" style={{ width: "450px", height: "450px" }}>
                <div className="mb-3">
                    <label className="form-label" >Source : </label>
                    <input type="text" className="form-control" id="id1" name="source" value={source} onChange={(e) => setSource(e.target.value)} placeholder="Enter User Name " />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Destination :</label>
                    <input type="text" className="form-control" name="dest" onChange={(e) => setDest(e.target.value)} value={dest} id="id2" placeholder="Enter email" />
                </div>
                {/* <Link to={`/flightslist?source=${source}&dest=${dest}`} className="nav-link  ms-2" >Search</Link> */}
                <button type="button" onClick={search}>Search</button>
            </form>
        </>
    )
}

export default Flights