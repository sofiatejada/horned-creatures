import React, { Component } from 'react'
import images from './data.js';
import ImageItem from './image-item.js';

export default class ImageList extends Component {
    render() {
        return (
            <div>
                <select>
                    {images.map((item) => <ImageItem animal={item.title} />)}
                </select>
            </div>
        )
    }
}

{/* <option>{images.map((item) => <ImageItem animal={item.title} />)}</option> */}