import React, { useEffect, useState } from "react";

function AutoIncrement() {
    const [counter, setCounter] = useState(0)
    let interval;
    useEffect(() => {
        if (counter < 30) {
            interval = setInterval(() => {
                setCounter(counter + 1)
                // setCounter((prevcount) => prevcount + 1)
            }, 1000);
            return () => {
                clearInterval(interval)
            }
        }
    }, [counter])
    return (
        <>
            <div>
                <h5>Count : {counter}</h5>
            </div></>
    )
}
export default AutoIncrement