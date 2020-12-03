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
                color={el.color}
                updateShape={props.updateShape} />
        )
    })

    return (
        <span className="control-board">
            <div>{dataMapped}</div>

            <nav className="create-reset">
                <button onClick={props.createNewShape}>Create new Shape</button>
                <button onClick={props.deleteAllShapes}>reset</button>
            </nav>
        </span>
    )
}

export default ControlBoard