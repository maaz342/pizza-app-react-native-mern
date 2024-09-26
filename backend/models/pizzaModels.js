const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    toppings: [String]
}, { timestamps: true });

const Pizza = mongoose.model('Pizza', pizzaSchema);
module.exports = Pizza;
