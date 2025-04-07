import React from 'react'

function DisplayCount(props) {
    console.log("Display component rendred..")
    const { value } = props;
    return (
        <div>
            <span>{value}</span>
        </div>
    )
}

export default React.memo(DisplayCount)
