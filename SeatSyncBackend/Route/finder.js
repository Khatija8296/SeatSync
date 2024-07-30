const express = require('express');
const { getRoutes } = require('../controllers/routeFinder'); // Adjust the path as necessary

const router = express.Router();

router.get('/', getRoutes);

module.exports = router;
