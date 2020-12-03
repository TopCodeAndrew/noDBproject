import React, { Component } from 'react'

export default class ShapeControl extends Component {
    constructor() {
        super();

        this.state = {
            widthInput: 0,
            lengthInput: 0,
            colorInput: ''
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

    handleColorChange(val) {
        this.setState({
            colorInput: val
        })
    }

    render() {
        const { widthInput, lengthInput, colorInput } = this.state
        const { id } = this.props
        return (
            <div className="shape-control">
                <header>Shape #{id + 1}</header>
                <nav className='content'>
                    <p className='word'>Width:</p>
                    <input placeholder='type here' onChange={(e) => this.handleWidthChange(e.target.value)} />
                </nav>
                <nav className='content'>
                    <p className='word'>Length:</p>
                    <input placeholder='type here' onChange={(e) => this.handleLengthChange(e.target.value)} />
                </nav>
                <nav className='content'>
                    <p className='word'>Color:</p>
                    <input placeholder='type here' onChange={(e) => this.handleColorChange(e.target.value)} />
                    <button onClick={() => console.log(this.state.colorInput)} />
                </nav>

                <button className='content button' onClick={() => this.props.updateShape(widthInput, lengthInput, id, colorInput)}>UpdateShape</button>

            </div>
        )
    }
}