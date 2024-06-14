import React from 'react';

const Badge  = ({ formData }) => {
    return (
        <div className="badge">
            <div className="badge__header">
        <h2>Badge:</h2>
        </div>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Birth Place: {formData.birthPlace}</p>
        <p>Phone Number: {formData.phoneNumber}</p>
        <p>Favorite Food: {formData.favoriteFood}</p>
        <p>Info: {formData.info}</p>
    </div>
    );
}

export default Badge;



