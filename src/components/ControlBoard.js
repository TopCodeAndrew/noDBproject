import React from 'react'
import ShapeControl from './ShapeControl'

let ControlBoard = (props) => {
    const { data } = props;
    const dataMapped = data.map((el) => {
        return (
            <ShapeControl key={el.id} length={el.length} width={el.width} />
        )
    })

    return (
        <div className="control-board">
            <ShapeControl createNewShape={props.createNewShape} />
            <button onClick={props.deleteAllShapes}>reset</button>
        </div>
    )
}

export default ControlBoard