import React, { Component } from 'react'
// import images from './data.js'

export default class imageItem extends Component {
    render() {
        return (
            <option>
                {this.props.animal}
            </option>
        )
    }
}
