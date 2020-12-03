import React from 'react'
import ShapeControl from './ShapeControl'

let ControlBoard = (props) => {
    const { data } = props;
    const dataMapped = data.map((el) => {
        return (
            <ShapeControl
                key={el.id}
                id={el.id}
                length={el.length}
                width={el.width}
                updateShape={props.updateShape} />
        )
    })

    return (
        <span className="control-board">
            <div>{dataMapped}</div>

            <button onClick={props.createNewShape}>Create new Shape</button>

            <button onClick={props.deleteAllShapes}>reset</button>
        </span>
    )
}

export default ControlBoard