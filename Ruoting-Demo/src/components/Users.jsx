import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    function fetchData() {
        const url = "https://jsonplaceholder.typicode.com/users";
        setLoading(true)
        axios.get(url).then((response) => {
            console.log("Responce", response.data)
            setUsers(response.data)
            setLoading(false)
        }).catch((error) => {
            console.log("errors", error.meaasage)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {loading && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            }

            <h5>User List</h5>
            <div>
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No. </th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((el) => (
                            <tr key={el.id}>
                                <td>
                                    <Link to={`/users/${el.id}`} className="text-decoration-none">
                                        {el.id}
                                    </Link>
                                </td>
                                <td>{el.name}</td>
                                <td>{el.username}</td>
                                <td>{el.email}</td>
                                <td>{el.address.city}</td>
                            </tr>))}
                    </tbody>

                </table>

            </div>
        </>
    )
}

export default Users