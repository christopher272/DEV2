import React, { useState, useEffect } from "react";
import { getBounties, deleteBounty, updateBounty } from "./api";

function BountyList() {
    const [bounties, setBounties] = useState([]);
    const [editingBountyId, setEditingBountyId] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        living: true,
        bountyAmount: '',
        type: 'Sith'
    }); 
    console.log(bounties._id);

    useEffect(() => {
        fetchBounties();
    }, []);

    const fetchBounties = () => {
        getBounties()
        .then((res) => setBounties(res.data))
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };

    const handleDelete = (_id) => {
        deleteBounty(_id).then(() => fetchBounties());
    };

    const handleEdit = (bounty) => {
        setEditingBountyId(bounty._id);
        setFormData({
            firstName: bounty.firstName,
            lastName: bounty.lastName,
            living: bounty.living,
            bountyAmount: bounty.bountyAmount,
            type: bounty.type
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = () => {
        updateBounty(editingBountyId, formData).then(() => {
            console.log(setEditingBountyId);
            setEditingBountyId(null);
            fetchBounties();
        });
    };

        return (
            <div>
                <h2>All Bounties</h2>
                <ul>
                    {bounties.map(bounty => (
                        <li key={bounty._id}>
                            {bounty._id === editingBountyId ? (
                                <div>
                                    <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                                    <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                                    <input name="bountyAmount" value={formData.bountyAmount} onChange={handleChange} placeholder="Bounty Amount" type="number" />
                                    <select name="type" value={formData.type} onChange={handleChange}>
                                        <option value="Sith">Sith</option>
                                        <option value="Jedi">Jedi</option>
                                    </select>
                                    <label>
                                        <input type="checkbox" name="living" checked={formData.living} onChange={(e) => handleChange({ target: { name: 'living', value: e.target.checked } })} />
                                        Living
                                    </label>
                                    <button onClick={handleUpdate}>Save</button>
                                </div>
                            ) : (
                                <div>
                                    {bounty.firstName} {bounty.lastName} - ${bounty.bountyAmount} - {bounty.type} - {bounty.living ? 'Alive' : 'Dead'}
                                    <button onClick={() => handleEdit(bounty._id)}>Edit</button>
                                    <button onClick={() => handleDelete(bounty._id)}>Delete</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    export default BountyList;