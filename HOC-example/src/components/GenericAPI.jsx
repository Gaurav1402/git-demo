import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GenericAPI(Component, url) {
    const HOC = (props) => {
        const [data, setData] = useState([])
        const [loading, setLoading] = useState(false)
        const [error, SetError] = useState("")
        const fetchData = async () => {
            setLoading(true)
            try {
                const responce = await axios.get(url);
                if (responce) {
                    console.log("data", responce.data);
                    setData(responce.data);
                    setLoading(false)
                }
            }
            catch (error) {
                console.error("Data fetching have error")
                setLoading(false)
            }
        }
        useEffect(() => {
            fetchData();
        }, [])
        return (
            <Component props={props} data={data} loading={loading} error={error}></Component>
        )
    }
    return HOC;
}

export default GenericAPI
