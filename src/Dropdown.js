import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        console.log(this.props.option);
        return (
            <div>
                <label>
                    <select onChange={this.props.handleChange}>
                        <option value="">
                        Lalala
                        </option>
                        {this.props.poop.map(item => <option value={item}>{item}</option>)}
                    </select>
                </label>
            </div>
        )
    }
}

//handleChange is the prop...so is option