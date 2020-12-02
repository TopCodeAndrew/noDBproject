import React from 'react'
import DisplayedShape from './DisplayedShape'

let Display = (props) => {
    const { data } = props;
    return (
        <div className="display">
            <div>{data} in Display</div>
            <DisplayedShape data={data} />
        </div>
    )
}

export default Display