// routes/trendingBusesRoute.js
const express = require('express');
const router = express.Router();
const { getTrendingBuses } = require('../controllers/trendingBusesController');

router.get('/', getTrendingBuses);

module.exports = router;
