import React, { Component } from 'react'

export default class ShapeControl extends Component {
    constructor() {
        super();

        this.state = {
            widthInput: 0,
            lengthInput: 0
        }
    }

    handleWidthChange(val) {
        this.setState({
            widthInput: val
        })
    }

    handleLengthChange(val) {
        this.setState({
            lengthInput: val
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.createNewShape}>Create new Shape</button>
            </div>
        )
    }
}