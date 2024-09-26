const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    pizzas: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            toppings: [{ type: String }],
        },
    ],
    total: { type: Number, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
