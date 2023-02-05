const router = require('express').Router();

const todoItemsModel = require('../models/todoItems');


// add item
router.post('/api/item', async (req, res) => {
    try {
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        const addItem = await newItem.save()
        res.status(200).json('Item Added Successfully.')
    } catch (err) {
        res.json(err);
    }
})


// get item
router.get('/api/items/', async (req, res) => {
    try {
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems);
    } catch (err) {
        res.json(err);
    }
})


//update item
router.put('/api/items/:id', async (req, res) => {
    try {
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item Updated');
    } catch (err) {
        res.json(err);
    }
})


//delete item
router.delete('/api/items/:id', async (req, res) => {
    try {
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;