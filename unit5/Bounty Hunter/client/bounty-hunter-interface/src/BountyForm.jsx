import React, { useState } from 'react';
import { createBounty, getBounties } from './api';

function BountyForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        living: true,
        bountyAmount: '',
        type: 'Sith'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createBounty(formData);
            setFormData({
                firstName: '',
                lastName: '',
                living: true,
                bountyAmount: '',
                type: 'Sith'
            })
            getBounties();
            // Handle the response, e.g., clear the form, refresh the list, etc.
        } catch (error) {
            console.error('Error creating bounty:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Bounty</h2>
            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
            <input name="bountyAmount" value={formData.bountyAmount} onChange={handleChange} placeholder="Bounty Amount" type="number" />
            <select name="type" value={formData.type} onChange={handleChange}>
                <option value="Sith">Sith</option>
                <option value="Jedi">Jedi</option>
            </select>
            <button type="submit">Add Bounty</button>
        </form>
    );
}

export default BountyForm;
