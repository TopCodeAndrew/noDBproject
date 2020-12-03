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
        const { id, color, updateShape, deleteOneShape } = this.props
        const shapeNumber = id + 1
        return (
            <div className="shape-control" style={{ boxShadow: `0px 0px 30px 15px ${color}` }}>
                <header>Shape #{shapeNumber}</header>
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
                </nav>

                <div className='button-box'>
                    <button className='content button' onClick={() => updateShape(widthInput, lengthInput, id, colorInput)}>Update</button>

                    <button className='content button' onClick={() => deleteOneShape(id, shapeNumber)}>Delete</button>
                </div>


            </div>
        )
    }
}