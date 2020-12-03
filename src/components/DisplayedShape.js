import React from 'react'

let DisplayedShape = (props) => {
    const { length, width, color } = props;
    return (
        <div className="displayed-shape">
            <div
                style={{ backgroundColor: color, height: length, width: width, boxShadow: "10px 10px 15px 9px rgba(0,0,0,0.78)" }} hover ></div>
        </div>
    )
}

export default DisplayedShape