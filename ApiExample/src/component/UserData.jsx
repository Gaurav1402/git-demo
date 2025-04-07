import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function UserData() {
    const [users, setUsers] = useState([])
    const [originalUsers, setOriginalUsers] = useState([])
    const [searchtext, setSearchText] = useState("")

    function handlesearch(event) {
        let search = event.target.value;
        setSearchText(search)
        if (search) {
            let filterList = users.filter((el) =>
                el.name.includes(search));
            setUsers(filterList);
        }
        else {
            setUsers(originalUsers);
            console.log(originalUsers)
        }
    }
    const descData = () => {
        const sorteduser = [...users].sort((a, b) =>
            b.name.localeCompare(a.name))
        console.log(sorteduser)
        setUsers(sorteduser)
    }
    const ascData = () => {
        const sorteduser = [...users].sort((a, b) => a.name.localeCompare(b.name))
        console.log(sorteduser)
        setUsers(sorteduser)
    }
    function fetchData() {
        const url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url).then((response) => {
            console.log("Responce", response.data)
            setUsers(response.data)
            setOriginalUsers(response.data)
        }).catch((error) => {
            console.log("errors", error.meaasage)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="mb-3">
                <label  >Search</label>
                <input type="text" className="ms-2" name="name" id="search" onChange={(e) => handlesearch(e)} />
                <button type="button" class="btn btn-primary ms-2" onClick={ascData}>ascData</button>
                <button type="button" class="btn btn-secondary ms-2" onClick={descData}>descData</button>
            </div>
            <h5>User List</h5>
            <div>
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((el, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
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

export default UserData 