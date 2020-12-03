import React from 'react'

let DisplayedShape = (props) => {
    const { length, width, color, name } = props;
    return (
        <div className="displayed-shape">
            <p>{name} </p>
            <div
                onClick={() => console.log(name)}
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