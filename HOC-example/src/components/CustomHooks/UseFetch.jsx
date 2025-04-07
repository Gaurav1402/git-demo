import React, { useEffect, useState } from 'react'
import axios from "axios"

function useFetch(URL) {
    const [resp, setResp] = useState({
        error: "", loading: false, data: []
    });
    const fetchData = async () => {
        setResp({ ...resp, loading: true })
        try {
            const responce = await axios.get(URL);
            if (responce) {
                setResp({ ...resp, loading: false, data: responce.data })
                console.log("Responce", resp)
            }
        }
        catch (er) {
            setResp({ ...resp, error: er, loading: false })
            // alert("Unable to fetch data from server")
        }
    }
    useEffect(() => {
        fetchData();
    }, [URL]);
    return resp;
}

export default useFetch;
