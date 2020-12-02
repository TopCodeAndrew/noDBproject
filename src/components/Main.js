import React, { Component } from 'react'
import ControlBoard from './ControlBoard'
import Display from './Display'
import axios from 'axios'

export default class Main extends Component {
    constructor() {
        super();

        this.state = {
            data: ["this is state"]
        }
    }

    componentDidMount() {
        axios.get('/api').then((res) => {
            this.setState({
                data: res.data

            })
        })
    }

    updateShape(width, length, shapeKey) { }

    createNewShape() { }

    deleteAllShapes() { }

    render() {
        const { data } = this.state
        return (
            <div className="main">
                <ControlBoard data={data} />
                <Display data={data} />
            </div>
        )
    }
}