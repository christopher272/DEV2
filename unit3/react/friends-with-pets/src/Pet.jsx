import exp from 'constants';
import React from'react';
import './component.css';

function Pet(props) {
    const { pet } = props;
    return (
        <div className="pet-card">
            <h4>{pet.name}</h4>
            <p>Breed: {pet.breed}</p>
        </div>
    );
}

export default Pet;