import React, { Component } from 'react'
import ImageItem from './image-item.js';

export default class ImageList extends Component {
    render() {
        console.log(this.props.animal);
        return (
            <div>
                {/* <ImageItem animal={this.props.animal} /> */}
                {this.props.animal.map(item => <ImageItem booger={item} />)}
            </div>
        )
    }
}
