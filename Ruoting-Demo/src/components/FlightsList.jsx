import React from 'react'
import { useSearchParams } from 'react-router-dom'

function FlightsList() {
    const [searchParams] = useSearchParams();
    const source = searchParams.get('source');
    const dest = searchParams.get('dest');
    return (
        <>

            <h5>FlightsList components</h5>
            <p>Source : {source}   </p>
            <p>Source : {dest}   </p>
        </>
    )
}

export default FlightsList