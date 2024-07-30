// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();

// // Create Express app
// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Import routes
// const registerRoute = require('./routes/register');
// const loginRoute = require('./routes/login');
// const forgotPasswordRoute = require('./routes/forgotPassword');
// const verifyOtpRoute = require('./routes/verifyOtp');
// const bus=require('./Route/busRoute');
// const booking=require('./Route/bookingRoutes');
// const seat=require('./Route/selectedSeatsRoutes');
// const count=require('./Route/countRoute');
// const email=require('./routes/emailController')
// const trendingBusesRoute = require('./Route/trendingBusesRoute'); // Import the new route
// const selectedSeats=require('./Route/selectedSeatsRoutes')
// const route=require('./Route/finder');
// const driver=require('./Route/driverRoutes')
// const paymentRoutes = require('./routes/paymentRoutes');

// // Use routes
// app.use('/register', registerRoute);
// app.use('/login', loginRoute);
// app.use('/forgotPassword', forgotPasswordRoute);
// app.use('/verifyOtp', verifyOtpRoute);
// app.use('/bus',bus);
// app.use('/booking',booking);
// app.use('/seat',seat);
// app.use('/count',count)
// app.use('/email',email);
// app.use('/trending-buses', trendingBusesRoute);
// app.use('/selectedSeats',selectedSeats)
// app.use('/routesfinder',route)
// app.use('/paymentRoutes', paymentRoutes); // Correct prefix
// app.use('/driver',driver);
// // Default route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Bus Booking Application');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');
 
dotenv.config();
 
const app = express();
const port = process.env.PORT || 3000;
 
// Create an HTTP server with the express app
const server = http.createServer(app);
 
// Set up Socket.io with the HTTP server
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173', // Replace with your frontend origin
    methods: ['GET', 'POST'],
  },
});
 
// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Allow frontend origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
 
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const forgotPasswordRoute = require('./routes/forgotPassword');
const verifyOtpRoute = require('./routes/verifyOtp');
const bus=require('./Route/busRoute');
const booking=require('./Route/bookingRoutes');
const seat=require('./Route/selectedSeatsRoutes');
const count=require('./Route/countRoute');
const email=require('./routes/emailController')
const trendingBusesRoute = require('./Route/trendingBusesRoute'); // Import the new route
const selectedSeats=require('./Route/selectedSeatsRoutes')
const route=require('./Route/finder');
const driver=require('./Route/driverRoutes')
const paymentRoutes = require('./routes/paymentRoutes');



// Use routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/forgotPassword', forgotPasswordRoute);
app.use('/verifyOtp', verifyOtpRoute);
app.use('/bus',bus);
app.use('/booking',booking);
app.use('/seat',seat);
app.use('/count',count)
app.use('/email',email);
app.use('/trending-buses', trendingBusesRoute);
app.use('/selectedSeats',selectedSeats)
app.use('/routesfinder',route)
app.use('/paymentRoutes', paymentRoutes); // Correct prefix
app.use('/driver',driver);
// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Bus Booking Application');
});
 
// Add Socket.io event listeners
io.on('connection', (socket) => {
  console.log('New client connected');
 
  // Example event listener
  socket.on('exampleEvent', (data) => {
    console.log('Received exampleEvent:', data);
  });
 
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
 
  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});
 
// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});