import React, { useEffect, useRef } from 'react'
import TextField from '@mui/material/TextField';

function Search() {
    const refElement = useRef("");
    useEffect(() => {
        refElement.current.focus();
    }, []);
    return (
        <div>
            <TextField inputRef={refElement} label="Name" />
        </div>
    )
}

export default Search
