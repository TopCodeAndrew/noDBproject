import React from 'react'
import DisplayedShape from './DisplayedShape'

let Display = (props) => {
    const { data } = props;
    const dataMapped = data.map((el) => {
        return (
            <DisplayedShape key={el.id} length={el.length} width={el.width} />
        )
    })
    return (
        <div className="display">
            <div>{dataMapped}</div>
        </div>
    )
}

export default Display