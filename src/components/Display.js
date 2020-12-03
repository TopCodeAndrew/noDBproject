import React from 'react'
import DisplayedShape from './DisplayedShape'

let Display = (props) => {
    const { data } = props;
    const dataMapped = data.map((el) => {
        return (
            <DisplayedShape key={el.id} length={el.length} width={el.width} color={el.color} name={el.name} />
        )
    })
    return (
        <span className="display">
            <div>{dataMapped}</div>
        </span>
    )
}

export default Display