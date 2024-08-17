const express = require('express');
const inventoryRouter = express.Router();
const Item = require('../models/item');


inventoryRouter.get('/', async (req, res, next) => {
    try {
        const items = await Item.find()
        return res.status(200).send(items);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

inventoryRouter.get('/:itemId', async (req, res, next) => {
    try {
        const foundItem = await Item.findById(req.params.itemId)
        return res.status(200).send(foundItem);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

inventoryRouter.post('/', async (req, res, next) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        return res.status(201).send(savedItem);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

inventoryRouter.delete('/:itemId', async (req, res, next) => {
    try {
        const itemId = req.params.itemId;
        const deletedItem = await Item.findByIdAndDelete(itemId);
        return res.status(200).send(`you have successfully removed ${deletedItem.name}`);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

inventoryRouter.put('/:itemId', async (req, res, next) => {
    try {
        const itemId = req.params.itemId;
        const updatedItem = await Item.findByIdAndUpdate(itemId, req.body, {new: true});
        return res.status(201).send(updatedItem);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

module.exports = inventoryRouter