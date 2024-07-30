// // controllers/selectedSeatsController.js

// const { SelectedSeats } = require('../db/selectedSeats'); // Adjust the path as per your project structure
// const { Sequelize, DataTypes, Op } = require('sequelize');

// // Controller methods
// const createBooking = async (req, res) => {
//   try {
//     const { busId, from, to, selectedSeats, bookingDate,gender } = req.body;
//     const booking = await SelectedSeats.create({
//       busId,
//       from,
//       to,
//       selectedSeats,
//       bookingDate,
//       gender
//     });
//     res.status(201).json(booking);
//   } catch (error) {
//     console.error('Error creating booking:', error);
//     res.status(500).json({ error: 'Failed to create booking' });
//   }
// };

// const getBookingsByBusId = async (req, res) => {
//   const { busId } = req.params;
//   try {
//     const bookings = await SelectedSeats.findAll({
//       where: {
//         busId: busId,
//       },
//     });
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error('Error fetching bookings by busId:', error);
//     res.status(500).json({ error: 'Failed to fetch bookings' });
//   }
// };


// const getSelectedSeatsByBusId = async (req, res) => {
//     const { busId } = req.params;
//     try {
//       const selectedSeats = await SelectedSeats.findAll({
//         where: { busId },
//         attributes: ['from', 'to', 'selectedSeats', 'bookingDate'],
//       });
//       res.status(200).json(selectedSeats);
//     } catch (error) {
//       console.error('Error fetching selected seats by busId:', error);
//       res.status(500).json({ error: 'Failed to fetch selected seats' });
//     }
//   };
  

//   module.exports={
//   createBooking,
//   getBookingsByBusId,
//   getSelectedSeatsByBusId
// };

// const { SelectedSeats } = require('../db/selectedSeats'); // Adjust the path as per your project structure
// const { Sequelize, DataTypes, Op } = require('sequelize');
// // Controller methods
// const createBooking = async (req, res) => {
//   try {
//     const { busId, from, to, selectedSeats, bookingDate, gender } = req.body; // Include gender from req.body
//     const booking = await SelectedSeats.create({
//       busId,
//       from,
//       to,
//       selectedSeats,
//       bookingDate,
//       gender,
//     });
//     res.status(201).json(booking);
//   } catch (error) {
//     console.error('Error creating booking:', error);
//     res.status(500).json({ error: 'Failed to create booking' });
//   }
// };
 
// const getBookingsByBusId = async (req, res) => {
//   const { busId } = req.params;
//   try {
//     const bookings = await SelectedSeats.findAll({
//       where: {
//         busId: busId,
//       },
//     });
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error('Error fetching bookings by busId:', error);
//     res.status(500).json({ error: 'Failed to fetch bookings' });
//   }
// };
 
// const getSelectedSeatsByBusId = async (req, res) => {
//   const { busId } = req.params;
//   try {
//     const selectedSeats = await SelectedSeats.findAll({
//       where: { busId },
//       attributes: ['from', 'to', 'selectedSeats', 'bookingDate','gender'],
//     });
//     res.status(200).json(selectedSeats);
//   } catch (error) {
//     console.error('Error fetching selected seats by busId:', error);
//     res.status(500).json({ error: 'Failed to fetch selected seats' });
//   }
// };

// const deleteBookingsByBusIdAndSelectedSeat = async (req, res) => {
//   const { busId, selectedSeat } = req.params;
//   console.log(`Attempting to delete booking with busId: ${busId} and selectedSeat: ${selectedSeat}`);
 
//   try {
//     const deletedRows = await SelectedSeats.destroy({
//       where: {
//         busId,
//         selectedSeats: { [Op.contains]: [selectedSeat] }
//       }
//     });
 
//     if (deletedRows === 0) {
//       console.log(`No bookings found to delete for busId: ${busId} and selectedSeat: ${selectedSeat}`);
//       return res.status(404).json({ message: 'No bookings found to delete' });
//     }
   
//     console.log(`Successfully deleted ${deletedRows} bookings for busId: ${busId} and selectedSeat: ${selectedSeat}`);
//     res.status(200).json({ deletedRows });
//   } catch (error) {
//     console.error(`Error deleting bookings for busId ${busId} and selectedSeat ${selectedSeat}:`, error);
//     res.status(500).json({ error: 'Failed to delete bookings' });
//   }
// };
// // Controller method to get all bookings
// const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await SelectedSeats.findAll();
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error('Error fetching all bookings:', error);
//     res.status(500).json({ error: 'Failed to fetch all bookings' });
//   }
// };
 
// module.exports = {
//   createBooking,
//   getBookingsByBusId,
//   getSelectedSeatsByBusId,
//   deleteBookingsByBusIdAndSelectedSeat,
//   getAllBookings
// };
//CORRECTCODE ABOVE


const { SelectedSeats } = require('../db/selectedSeats'); // Adjust the path as per your project structure
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../db/dbConnectionsModel');
const cron = require('node-cron');
const io = require('../index').io;
 

const getBookingsByBusId = async (req, res) => {
  const { busId } = req.params;
  try {
    const bookings = await SelectedSeats.findAll({
      where: { busId }
    });

    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this busId' });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings by busId:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};



// const createBooking = async (req, res) => {
//   try {
//     const { busId, from, to, selectedSeats, bookingDate, gender,email } = req.body;

//     const defaultGender = gender || ['Male'];

   
//     if (!busId || !from || !to || !selectedSeats || !bookingDate || !defaultGender) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     if (!Array.isArray(selectedSeats) || !Array.isArray(defaultGender)) {
//       return res.status(400).json({ error: 'Invalid field types' });
//     }

//     if (isNaN(new Date(bookingDate).getTime())) {
//       return res.status(400).json({ error: 'Invalid date format' });
//     }

//     // Check if a booking with the same busId and selectedSeats already exists
//     const existingBooking = await SelectedSeats.findOne({
//       where: {
//         busId,
//         selectedSeats: { [Op.contains]: selectedSeats },
//         from,
//         to,
//         version: '1', // Check for active bookings
//       },
//     });

//     let booking;
//     if (existingBooking) {
     
//       booking = await existingBooking.update({
//         version: '1',
//         gender: defaultGender, 
//       });
//     } else {

//       const pendingBooking = await SelectedSeats.findOne({
//         where: {
//           busId,
//           selectedSeats: { [Op.contains]: selectedSeats },
//           from,
//           to,
//           version: '0', 
//           email
//         },
//       });

//       if (pendingBooking) {
//         // If a pending booking exists, update it to active
//         booking = await pendingBooking.update({
//           version: '1', // Mark as active
//           gender: defaultGender, // Update gender if provided
//         });
//       } else {
//         // If no existing booking, create a new booking with default version '0' (pending)
//         booking = await SelectedSeats.create({
//           busId,
//           from,
//           to,
//           selectedSeats,
//           bookingDate,
//           gender: defaultGender, // Default gender if not provided
//           version: '0', 
//           email
//         });
//       }
//     }

//     res.status(201).json(booking);
//   } catch (error) {
//     console.error('Error creating booking:', error);
//     res.status(500).json({ error: 'Failed to create booking' });
//   }
// };
const createBooking = async (req, res) => {
  try {
    const { busId, from, to, selectedSeats, bookingDate, gender, email } = req.body;
 
    console.log('Request Body:', { busId, from, to, selectedSeats, bookingDate, gender, email });
 
    const defaultGender = gender || 'Male';
 
    const existingBooking = await SelectedSeats.findOne({
      where: {
        busId,
        selectedSeats: { [Op.contains]: selectedSeats },
        from,
        to,
      },
    });
 
    console.log('Existing Booking:', existingBooking);
 
    let booking;
    if (existingBooking) {
      booking = await existingBooking.update({
        version: '1',
        gender: gender || existingBooking.gender,
      });
    } else {
      booking = await SelectedSeats.create({
        busId,
        from,
        to,
        selectedSeats,
        bookingDate,
        gender: gender || 'Male',
        version: '0',
        email,
      });
    }
 
    // Ensure io is defined and accessible here
    if (io) {
      io.emit('bookingUpdated', booking);
    } else {
      console.error('Socket.io is not initialized.');
    }
 
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};
 
cron.schedule('*/1 * * * *', async () => {
  const threeMinutesAgo = new Date(Date.now() - 3 * 60 * 1000);
 
  try {
    const result = await SelectedSeats.destroy({
      where: {
        version: '0',
        createdAt: {
          [Op.lt]: threeMinutesAgo,
        },
      },
    });
 
    if (result > 0) {
      console.log(`Deleted ${result} pending bookings older than 3 minutes.`);
    }
  } catch (error) {
    console.error('Error deleting old pending bookings:', error);
  }
});
 


const getSelectedSeatsByBusId = async (req, res) => {
  const { busId } = req.params;
  try {
    const selectedSeats = await SelectedSeats.findAll({
      where: { busId },
      attributes: ['from', 'to', 'selectedSeats', 'bookingDate', 'gender']
    });

    if (selectedSeats.length === 0) {
      return res.status(404).json({ message: 'No selected seats found for this busId' });
    }

    res.status(200).json(selectedSeats);
  } catch (error) {
    console.error('Error fetching selected seats by busId:', error);
    res.status(500).json({ error: 'Failed to fetch selected seats' });
  }
};

const deleteBookingsByBusIdAndSelectedSeat = async (req, res) => {
  const { busId, selectedSeat } = req.params;
  console.log(`Attempting to delete booking with busId: ${busId} and selectedSeat: ${selectedSeat}`);

  try {
    const deletedRows = await SelectedSeats.destroy({
      where: {
        busId,
        selectedSeats: { [Op.contains]: [selectedSeat] }
      }
    });

    if (deletedRows === 0) {
      console.log(`No bookings found to delete for busId: ${busId} and selectedSeat: ${selectedSeat}`);
      return res.status(404).json({ message: 'No bookings found to delete' });
    }

    console.log(`Successfully deleted ${deletedRows} bookings for busId: ${busId} and selectedSeat: ${selectedSeat}`);
    res.status(200).json({ deletedRows });
  } catch (error) {
    console.error(`Error deleting bookings for busId ${busId} and selectedSeat ${selectedSeat}:`, error);
    res.status(500).json({ error: 'Failed to delete bookings' });
  }
};

// Controller method to get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await SelectedSeats.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching all bookings:', error);
    res.status(500).json({ error: 'Failed to fetch all bookings' });
  }
};

const getBookingsByEmail = async (req, res) => {
  const { email } = req.query; // Retrieve email from query parameters
  // Validate email parameter
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Invalid email provided' });
  }
  try {
    // Fetch bookings based on email
    const bookings = await SelectedSeats.findAll({
      where: {
        email: email // Correctly use the email parameter
      }
    });
    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this email' });
    }
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings by email:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

module.exports = {
  createBooking,
  getBookingsByBusId,
  getSelectedSeatsByBusId,
  deleteBookingsByBusIdAndSelectedSeat,
  getAllBookings,
  getBookingsByEmail
};
