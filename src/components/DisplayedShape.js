import React from 'react'

let DisplayedShape = (props) => {
    const { length, width } = props;
    return (
        <div >
            <div style={{ backgroundColor: "black", height: length, width: width }} ></div>
        </div>
    )
}

export default DisplayedShape