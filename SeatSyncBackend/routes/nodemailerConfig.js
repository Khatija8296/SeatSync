
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  subject: 'OTP for Account Verification ok khadhar',
};

module.exports = { transporter, mailOptions };
