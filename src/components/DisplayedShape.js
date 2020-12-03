import React from 'react'

let DisplayedShape = (props) => {
    const { length, width, color, name, id, nameCheck, changeColorToYellow } = props;
    return (
        <div className="displayed-shape">

            <p onClick={() => changeColorToYellow(id)}>{name} </p>
            <div
                onClick={() => nameCheck(id)}
                style={{
                    backgroundColor: color,
                    height: length,
                    width: width,
                    boxShadow: "10px 10px 15px 9px rgba(0,0,0,0.78)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
            </div>
        </div>
    )
}

export default DisplayedShape