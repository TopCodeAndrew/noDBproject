import React from 'react'

let DisplayedShape = (props) => {
    const { length, width } = props;
    return (
        <div >
            <div style={{ backgroundColor: "red", height: length, width: width }} ></div>
        </div>
    )
}

export default DisplayedShape