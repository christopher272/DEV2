import axios from 'axios';


export const getBounties = () => axios.get('/bounty');
export const createBounty = (bounty) => axios.post('/bounty', bounty);
export const updateBounty = (id, updatedBounty) => axios.put(`/bounty/${_id}`, updatedBounty);
export const deleteBounty = (id) => axios.delete(`/bounty/${_id}`);
