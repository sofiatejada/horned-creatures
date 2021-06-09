import './App.css';
import animalData from './data.js';
import Header from './header.js';
import ImageList from './image-list.js';
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    filterHorn: '',
    filterKeyword: '',
  }
  
  handleHornChange = (e) => {
    this.setState({ filterHorn: e.target.value })
  
  }
  handleKeywordChange = (e) => {
    this.setState({ filterKeyword: e.target.value })
  }
  
  render() {
    
    let filteredHornedAnimals = animalData;
    
    let filteredKeywordAnimals = animalData;
    
    if (this.state.filterHorn) {
      filteredHornedAnimals = animalData.filter(item => item.horns === + this.state.filterHorn)
    }
    
    if (this.state.filterKeyword) {
      filteredKeywordAnimals = animalData.filter(item => item.keyword === this.state.filterKeyword)
    }

  return (
    <div>
      <Header />
      <label>
        Choose the horns
      <select onChange={this.handleHornChange}>
        <option value="">
          Lalala
        </option>
        <option value="1">
          1 horn
        </option>
        <option value="2">
          2 horns
        </option>
        <option value="3">
          3 horns
        </option>
        <option value="100">
          Too many horns
        </option>
      </select>
      <label>
        Choose the creature
      </label>
      <select onChange={this.handleKeywordChange}>
        <option value="">
          Lalala
        </option>
        <option value="narwhal">
          Narwhal
        </option>
        <option value="rhino">
          Rhino
        </option>
        <option value="unicorn">
          Unicorn
        </option>
        <option value="unilego">
          Unilego
        </option>
        <option value="triceratops">
          Triceratops
        </option>
        <option value="markhor">
          Markhor
        </option>
        <option value="mouflon">
          Mouflon
        </option>
        <option value="addax">
          Addax
        </option>
        <option value="chameleon">
          Chameleon
        </option>
        <option value="lizard">
          Lizard
        </option>
        <option value="dragon">
          Dragon
        </option>
      </select>
      </label>
      {/* {filteredAnimals.map(item => <p>{item.title} has {item.horns} horn(s)</p>)} */}
      
      <ImageList animal={filteredHornedAnimals} />
      <ImageList animal={filteredKeywordAnimals} />


    </div>
  );
};
};