const express = require('express');
const bountyRouter = express.Router();
const Bounty = require('../models/bounty');

bountyRouter.get('/',async (req, res, next) => {
    try {
        const foundBounties = await Bounty.find()
        return res.status(200).send(foundBounties);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.post('/', async (req, res, next) => {
    try {
        const newBounty = new Bounty(req.body);
        const savedBounty = await newBounty.save();
        return res.status(201).send(savedBounty);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.delete('/:bountyId', async (req, res, next) => {
    try {
        const bountyId = req.params.bountyId;
        const deletedBounty = await Bounty.findByIdAndDelete(bountyId);
        return res.status(200).send(`you have successfully removed the bounty for ${deletedBounty.firstName} ${deletedBounty.lastName}`);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.put('/:bountyId', async (req, res, next) => {
    try {
        const bountyId = req.params.bountyId;
        const updatedBounty = await Bounty.findByIdAndUpdate(bountyId, req.body, {new: true});
        return res.status(201).send(updatedBounty);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.get('/bounty', async (req, res, next) => {
    try {
        const foundBounties = await Bounty.find()
        return res.status(200).send(foundBounties);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.post('/bounty', async (req, res, next) => {
    try {
        const newBounty = new Bounty(req.body);
        const savedBounty = await newBounty.save();
        return res.status(201).send(savedBounty);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.put('/bounty/:bountyId', async (req, res, next) => {
    try {
        const bountyId = req.params.bountyId;
        const updatedBounty = await Bounty.findByIdAndUpdate(bountyId, req.body, {new: true});
        return res.status(201).send(updatedBounty);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})


module.exports = bountyRouter
