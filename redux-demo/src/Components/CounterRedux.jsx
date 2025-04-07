import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { counterFeatureKey } from './CounterSlice';


function CounterRedux() {
    const dispatch = useDispatch();
    const data = useSelector((store) => {
        return store[counterFeatureKey]
    })
    console.log("Counter", data);

    function Incr() {
        dispatch({
            type: `${CounterActions.incrementCountAction}`
        })
    }
    function Decr() {
        dispatch({
            type: `${CounterActions.decrementCountAction}`
        })
    }
    function Reset() {
        dispatch({
            type: `${CounterActions.resetCountAction}`
        })
    }
    return (
        <div>
            <p> Counter : {data.count}</p>
            <Button variant="contained" color="primary" sx={{ margin: '5px' }} onClick={Incr}>Incr</Button>
            <Button variant="contained" color="error" sx={{ margin: '5px' }} onClick={Decr}>Decr</Button>
            <Button variant="contained" color="secondary" sx={{ margin: '5px' }} onClick={Reset}>Reset</Button>
        </div>
    )
}

export default CounterRedux
