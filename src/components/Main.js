import React, { Component } from 'react'
import ControlBoard from './ControlBoard'
import Display from './Display'
import axios from 'axios'

export default class Main extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }

        this.createNewShape = this.createNewShape.bind(this)
    }

    componentDidMount() {
        axios.get('/api').then((res) => {
            this.setState({
                data: res.data

            })
        })
    }

    // updateShape(width, length, shapeKey) {
    //     axios.put(`/api/${shapeKey}`).then((res) => {

    //     })
    // }

    createNewShape() {
        axios.post('/api').then((res) => [
            this.setState({ data: res.data })
        ]);
        console.log(this.state.data)
    }

    deleteAllShapes() { }

    render() {
        const { data } = this.state
        return (
            <div className="main">
                <ControlBoard data={data} createNewShape={this.createNewShape} />
                <Display data={data} />
            </div>
        )
    }
}