import React, { Component } from 'react'

export default class ShapeControl extends Component {
    constructor() {
        super();

        this.state = {
            widthInput: 0,
            lengthInput: 0
        }

        this.handleWidthChange = this.handleWidthChange.bind(this)
    }

    handleWidthChange(val) {
        this.setState({
            widthInput: val
        });
    }

    handleLengthChange(val) {
        this.setState({
            lengthInput: val
        })
    }

    render() {
        const { widthInput, lengthInput } = this.state
        const { id } = this.props
        return (
            <div>
                <p>Width</p>
                {/* <input onChange={(e) => this.handleWidthChange(e.target.value)} /> */}

                <button onClick={this.props.updateShape(widthInput, lengthInput, id)}>UpdateShape</button>



            </div>
        )
    }
}