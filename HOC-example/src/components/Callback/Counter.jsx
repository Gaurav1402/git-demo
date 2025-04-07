import { Button } from '@mui/material'
import React, { useCallback, useState } from 'react'
import Title from './Title';
import DisplayCount from './DisplayCount';
import IncreaseBtn from './IncreaseBtn';
function Counter() {
    const [amount, setAmount] = useState(0)
    const [tenure, setTenure] = useState(0)
    const incrAmount = useCallback(
        () => {
            setAmount(amount + 1);
        }, [amount])

    const incrTenure = useCallback(
        () => {
            setTenure(tenure + 1);
        }, [tenure])
    return (
        <>
            <Title />
            <span> Amount : <DisplayCount value={amount}></DisplayCount></span>
            <IncreaseBtn onBtnClick={incrAmount} msg="Increase Amount"></IncreaseBtn>
            <br></br>
            <span> Tenure : <DisplayCount value={tenure}></DisplayCount></span>
            <IncreaseBtn onBtnClick={incrTenure} msg="Increase Tenture"></IncreaseBtn>
            <div>
                {/* <p>Counter : {count}</p>
                <Button onClick={incr}>INCR</Button>
                <Button onClick={decr}>DECR</Button> */}
            </div>
        </>
    )
}

export default Counter
