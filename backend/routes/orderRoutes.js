const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, async (req, res) => {
    const { pizzas, total, address, phone } = req.body;
    const userId = req.user._id;  

    try {
        const newOrder = new Order({
            userId,
            pizzas,
            total,
            address,
            phone,
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
