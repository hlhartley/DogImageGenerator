import './App.css';
import React, { Component } from 'react';
import Breeds from './Breeds/Breeds';
import BreedImages from './BreedImages/BreedImages';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      breeds: [],
      breedImages: [],
      selectedBreed: ''
    }
  }

  componentDidMount = async() => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const result = await response.json();
      this.setState({ breeds: Object.keys(result.message)});
    } catch (error){
      this.setState({ errors: [...this.state.errors, error]});
    }
  }

  fetchBreedImages = async(selectedBreed) => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`);
      const result = await response.json();
      this.setState({ breedImages: result.message});
    } catch(error) {
      this.setState({ errors: [...this.state.errors, error]});
    }
  }

  selectBreed = (breed) => {
    this.setState({ selectedBreed: breed });
    this.fetchBreedImages(breed);
  }

  render() {
    const { breeds, selectedBreed, breedImages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Breeds
            breeds={breeds}
            fetchBreedImages={this.fetchBreedImages}
            selectBreed={this.selectBreed}
          />
          {this.state.selectedBreed &&
          <BreedImages
            selectedBreed={selectedBreed}
            breedImages={breedImages}
          />}
        </header>
      </div>
    );
  }
}