import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
function Home() {

    return (
        <>

            <h5>Home components</h5>
            <nav className="navbar navbar-expand-lg bg-info">
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
                            <NavLink to="/home/profile" className="nav-link text-white">
                                {({ isActive }) => (<span className={isActive ? "bg-secondary" : ""}>Profile</span>
                                )}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link text-white ms-2" to="aboutUs">About Us</Link> */}
                            <NavLink to="/home/dashboard" className="nav-link text-white">
                                {({ isActive }) => (<span className={isActive ? "bg-secondary" : ""}>DashBoard</span>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Home