import { Button } from '@mui/material'
import React, { useState, useMemo } from 'react'

function Age() {
    const [age, setAge] = useState(0)
    const [number, setNumber] = useState(0)
    const incrAge = () => {
        setAge(age + 1)
    }
    const incrNumber = () => {
        setNumber(number + 1)
    }
    const findEligibility = (age) => {
        for (let i = 0; i < 1000000; i++) {
        }
        console.log("Process Completed")
        return age > 18 ? "Eligible" : "Not eligible";
    }
    const eligibleMsg = useMemo(() => findEligibility(age), [age])
    // const eligibleMsg = findEligibility(age)
    return (
        <div>
            <h1> useMemo Example</h1>
            <h5> {eligibleMsg}</h5>
            <p> Age : {age}</p>
            <Button onClick={incrAge}>Increase Age</Button>
            <p> Number : {number}</p>
            <Button onClick={incrNumber}>Increase Number</Button>
        </div>
    )
}

export default Age
