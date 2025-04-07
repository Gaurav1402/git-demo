import React from 'react'
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Userdetail() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    function fetchData() {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        setLoading(true)
        axios.get(url).then((response) => {
            console.log("Responce details", response.data)
            setUser(response.data)
            console.log("Responce detailsdfdd", user)
            setLoading(false)
        }).catch((error) => {
            console.log("errors", error.meaasage)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
    }, [id])


    return (
        <div>
            <h5>User details</h5>
            {loading && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            }
            <div className="card" >
                <div className="card-body">

                    <p>Name : {user.name}</p>
                    <p>User Name : {user.username}</p>
                    <p>User Email : {user.email}</p>
                    <p>User City : {user?.address?.city}</p>
                </div>
            </div>
            <h5> <Link className="navbar-brand st-5" to="/users">Back to Users</Link></h5>
        </div>

    )
}

export default Userdetail
