import React from 'react'
import { Link, NavLink } from 'react-router-dom';
function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link text-white ms-2" to="home">Home</Link> */}
                            {/* <NavLink to="/" className="nav-link text-white">
                                {({ isActive }) => (<span className={isActive ? "bg-secondary" : ""}>NavBar</span>
                                )}
                            </NavLink> */}
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link text-white ms-2" to="home">Home</Link> */}
                            <NavLink to="home" className="nav-link text-white">
                                {({ isActive }) => (<span className={isActive ? "bg-secondary" : ""}>Home</span>
                                )}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link text-white ms-2" to="aboutUs">About Us</Link> */}
                            <NavLink to="aboutUs" className="nav-link text-white">
                                {({ isActive }) => (<span className={isActive ? "bg-secondary" : ""}>About Us</span>
                                )}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link text-white ms-2" to="contactUs">Contact Us</Link> */}
                            <NavLink to="contactUs" className="nav-link text-white">
                                {({ isActive }) => (<span className={isActive ? "bg-secondary" : ""}>Contact Us</span>
                                )}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link text-white ms-2" to="users">Users</Link> */}
                            <NavLink to="/users" className="nav-link text-white">
                                {({ isActive }) => (<span className={isActive ? "bg-secondary" : ""}>Users</span>
                                )}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link text-white ms-2" to="users">Users</Link> */}
                            <NavLink to="/flights" className="nav-link text-white">
                                {({ isActive }) => (<span className={isActive ? "bg-secondary" : ""}>Flights</span>
                                )}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link text-white ms-2" to="users">Users</Link> */}
                            <NavLink to="/flightslist" className="nav-link text-white">
                                {({ isActive }) => (<span className={isActive ? "bg-secondary" : ""}>Flights List</span>
                                )}
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>


            {/* <div className="container-fluid navbar bg-primary ">
                <div className="navbar bg-primary ">
                    <Link className="navbar-brand" to="#">NavBar</Link>
                    <Link className="nav-link text-white ms-2" to="home">Home</Link>
                    <Link className="nav-link text-white ms-2" to="aboutUs">AboutUs</Link>
                    <Link className="nav-link text-white ms-2" to="contactUs">contactUs</Link>
                    <Link className="nav-link text-white ms-2" to="users">Users</Link>
                </div>
            </div> */}

        </>
    )
}

export default Header