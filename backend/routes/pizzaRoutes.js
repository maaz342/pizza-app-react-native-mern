const express = require('express');
const { getPizzas, createPizza } = require('../controllers/pizzaController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getPizzas).post(protect, admin, createPizza);

module.exports = router;
