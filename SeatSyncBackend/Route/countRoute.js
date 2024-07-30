const express = require('express');
const router = express.Router();
const {
    createCount,
    getCountByBusId,
    updateCountByBusId,
    getCount
} = require('../controllers/countController');

// Create a new booking
router.post('/', createCount);

// Get all bookings
router.get('/', getCountByBusId);

router.get('/all', getCount);
// Get a single booking by ID
router.put('/:busId', updateCountByBusId);

module.exports = router;