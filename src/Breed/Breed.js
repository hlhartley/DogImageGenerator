import React, { Component } from 'react';
import './Breed.css';

export default class Breed extends Component {
  render() {
    const { index, breed, selectBreed } = this.props;
    return (
      <div key={index}>
        <div onClick={() => selectBreed(breed)}>
          <p className="Breed-container">{breed}</p>
        </div>
      </div>
    )
  }
}