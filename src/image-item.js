import React, { Component } from 'react'
// import images from './data.js'

export default class ImageItem extends Component {
    render() {
        console.log(this.props.booger);
        return (
            <div>
                <img width="50px" src={this.props.booger.url} alt="an animal" />
                <h4>{this.props.booger.title}</h4>
                <h6>{this.props.booger.horns}</h6>
                <p>{this.props.booger.description}</p>
            </div>
        )
    }
}

