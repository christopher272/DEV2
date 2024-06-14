import React from'react';
import Pet from './Pet';
import './component.css';

function Friend(props) {
    const { friend } = props;
    return (
        <div className="friend-card">
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <h3>Pets</h3>
            <div className="pets-container">
                    {friend.pets.map((pet => (
                <Pet key={pet.name} pet={pet} />
                )))}
        </div>
        </div>
    );
}

export default Friend;