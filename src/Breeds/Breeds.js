import './Breeds.css';
import React, { Component } from 'react';
import Breed from '../Breed/Breed';

export default class Breeds extends Component {

  render() {
    const { breeds, breedImages, selectBreed } = this.props;
    return(
      <div>
        <h2>Dog Breeds</h2>
        <div className="Breeds-container">
          {breeds.map((breed, index) => {
            return (
              <Breed
                index={index}
                breed={breed}
                breedImages={breedImages}
                selectBreed={selectBreed}
              />
            )
          })}
        </div>
      </div>
    )
  }
}