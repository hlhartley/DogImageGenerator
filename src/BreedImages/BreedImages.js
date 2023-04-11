import React, { Component } from 'react';
import './BreedImages.css';

export default class BreedImages extends Component {

  render() {
    const { breedImages, selectedBreed } = this.props;
    return (
      <div>
        <h2>{selectedBreed}</h2>
        <div className="BreedImages-container">
          {
            breedImages.map((image, index) => {
              return <img key={index} alt={`dog ${index}`} src={image} height="100" width="100"></img>
            })
          }
        </div>
      </div>
    )
  }
}