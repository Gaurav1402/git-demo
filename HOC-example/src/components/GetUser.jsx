import React, { useEffect, useState } from 'react'
import axios from "axios"

function GetUser(Component) {

    const HOC = (props) => {
        const [UserList, setUserList] = useState([])
        const [loading, setLoading] = useState(false)
        const [error, SetError] = useState("")

        async function fetchUserList() {
            const url = "https://jsonplaceholder.typicode.com/users";
            setLoading(true)
            try {
                const responce = await axios.get(url);
                if (responce) {
                    setLoading(false)
                    console.log("user data", responce.data);
                    setUserList(responce.data);
                }

            }
            catch (error) {
                console.error("Error fetching users");
                setLoading(false)
                SetError(error?.message);
            }
        }

        useEffect(() => {
            fetchUserList();

        }, [])
        return (
            <div>
                <Component {...props} UserList={UserList} loading={loading} error={error} />
            </div>
        )
    }
    return HOC;
}

export default GetUser
