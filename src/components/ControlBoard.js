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
            <ShapeControl />
        </div>
    )
}

export default ControlBoard