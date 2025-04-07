import { Button } from '@mui/material';
import React from 'react'

function IncreaseBtn(props) {
    const { onBtnClick, msg } = props;
    console.log("Increase component rendred..", msg)
    return (
        <div>
            <Button onClick={onBtnClick}>Increase</Button>
        </div>
    )
}

export default React.memo(IncreaseBtn)
