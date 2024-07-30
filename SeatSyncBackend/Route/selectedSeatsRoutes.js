// routes/selectedSeatsRoutes.js

const express = require('express');
const router = express.Router();
const selectedSeatsController = require('../controllers/SelectedSeatsController');
const { io } = require('../index');


// router.post('/', selectedSeatsController.createBooking);
router.post('/', (req, res) => {
    selectedSeatsController.createBooking(req, res, io);
  });

// // POST request to create a new booking
// router.post('/', selectedSeatsController.createBooking);

// GET request to retrieve bookings by busId
router.get('/:busId', selectedSeatsController.getBookingsByBusId);

router.get('/seats/:busId', selectedSeatsController.getSelectedSeatsByBusId);

router.delete('/:busId/:selectedSeat', selectedSeatsController.deleteBookingsByBusIdAndSelectedSeat);
 

router.get('/', selectedSeatsController.getAllBookings);

router.get('/emails/find', selectedSeatsController.getBookingsByEmail);

module.exports = router;
