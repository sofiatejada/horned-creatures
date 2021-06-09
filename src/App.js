import './App.css';
import animalData from './data.js';
import Header from './header.js';
import ImageList from './image-list.js';
import React, { Component } from 'react'
import Dropdown from './Dropdown';

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
    
    let filteredAnimals = animalData;
    
    if (this.state.filterHorn) {
      filteredAnimals = filteredAnimals.filter(item => item.horns === + this.state.filterHorn)
    }
    
    if (this.state.filterKeyword) {
      filteredAnimals = filteredAnimals.filter(item => item.keyword === this.state.filterKeyword)
    }

    const hornOptions = Array.from(new Set(animalData.map(item => item.horns)));
    const creatureOptions = Array.from(new Set(animalData.map(item => item.keyword)));

  return (
    <div>
      <Header />
      <Dropdown poop={hornOptions} handleChange={this.handleHornChange} />
      <Dropdown poop={creatureOptions} handleChange={this.handleKeywordChange} />
      <ImageList animal={filteredAnimals} />


    </div>
  );
};
};

//handleChange is the prop...so is option