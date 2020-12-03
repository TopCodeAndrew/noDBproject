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
        this.deleteAllShapes = this.deleteAllShapes.bind(this)
        this.deleteOneShape = this.deleteOneShape.bind(this)
        this.updateShape = this.updateShape.bind(this)
    }

    componentDidMount() {
        axios.get('/api/shapes').then((res) => {
            this.setState({
                data: res.data

            })
        })
            .catch(error => {
                console.log(error)
            })
    }

    updateShape(width, length, shapeKey, color) {
        axios.put(`/api/shapes/individual${shapeKey}?shapeColor=${color}`, { "shapeWidth": width, "shapeLength": length }).then((res) => {
            this.setState({
                data: res.data

            })
        }).catch(error => {
            console.log(error)
        })
    }

    createNewShape() {
        axios.post('/api/shapes/individual').then((res) => {
            this.setState({ data: res.data })
        })
            .catch(error => {
                console.log(error)
            })
    }

    deleteOneShape(id, shapeNumber) {
        axios.delete(`/api/shapes/individual${shapeNumber}?id=${id}`).then((res) => {
            this.setState({
                data: res.data
            })
        })
            .catch(error => {
                console.log(error)
            })
        console.log(shapeNumber)
    }

    deleteAllShapes() {
        axios.delete('/api/shapes').then((res) => {
            this.setState({
                data: res.data
            })
        })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { data } = this.state
        return (
            <div className="main">
                <ControlBoard
                    data={data}
                    createNewShape={this.createNewShape}
                    deleteOneShape={this.deleteOneShape}
                    deleteAllShapes={this.deleteAllShapes}
                    updateShape={this.updateShape} />
                <Display data={data} />
            </div>
        )
    }
}