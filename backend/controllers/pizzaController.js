// pizzaController.js
const Pizza = require('../models/pizzaModels'); // Assuming you have a Pizza model

const getPizzas = async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.json(pizzas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPizza = async (req, res) => {
    try {
        const { name, price, toppings } = req.body;
        const pizza = new Pizza({
            name,
            price,
            toppings,
        });
        const createdPizza = await pizza.save();
        res.status(201).json(createdPizza);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getPizzas,
    createPizza,
};
