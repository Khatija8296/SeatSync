// // emailController.js

// const express = require('express');
// const router = express.Router();
// const { transporter, mailOptions } = require('./nodemailerConfig'); // Assuming emailConfig.js exports transporter and mailOptions

// // POST route to send email
// router.post('/', async (req, res) => {
//   const { recipientEmail, subject, text, html, attachments } = req.body;

//   // Override default mailOptions if provided in request body
//   const options = {
//     ...mailOptions,
//     to: recipientEmail,
//     subject: subject || mailOptions.subject,
//     text: text || mailOptions.text,
//     html: html || mailOptions.html,
//     attachments: attachments || mailOptions.attachments,
//   };

//   try {
//     // Send email using nodemailer transporter
//     const info = await transporter.sendMail(options);
//     console.log('Email sent:', info.response);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send email');
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { transporter, mailOptions } = require('./nodemailerConfig'); // Assuming emailConfig.js exports transporter and mailOptions

// // POST route to send email with PDF attachment
// router.post('/', async (req, res) => {
//   const { recipientEmail, subject, text, html, attachments } = req.body;

//   // Filter attachments to include only PDF files
//   const pdfAttachments = attachments.filter(attachment => attachment.contentType === 'application/pdf');

//   // Override default mailOptions if provided in request body
//   const options = {
//     ...mailOptions,
//     to: recipientEmail,
//     subject: subject || mailOptions.subject,
//     text: text || mailOptions.text,
//     html: html || mailOptions.html,
//     attachments: pdfAttachments || mailOptions.attachments, // Attach only PDF attachments
//   };

//   try {
//     // Send email using nodemailer transporter
//     const info = await transporter.sendMail(options);
//     console.log('Email sent:', info.response);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send email');
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { transporter, mailOptions } = require('./nodemailerConfig');

// router.post('/', async (req, res) => {
//   const { recipientEmail, pdfBase64 } = req.body;

//   if (!pdfBase64) {
//     return res.status(400).send('PDF data is required.');
//   }

//   const options = {
//     ...mailOptions,
//     to: recipientEmail,
//     subject: 'Your Booking Invoice',
//     text: 'Please find attached your booking invoice.',
//     attachments: [
//       {
//         filename: 'invoice.pdf',
//         content: pdfBase64.split('base64,')[1],
//         encoding: 'base64'
//       }
//     ]
//   };

//   try {
//     const info = await transporter.sendMail(options);
//     console.log('Email sent:', info.response);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send email');
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { transporter, mailOptions } = require('./nodemailerConfig');

// router.post('/', async (req, res) => {
//   const { recipientEmail, pdfBase64 } = req.body;

//   if (!pdfBase64) {
//     return res.status(400).send('PDF data is required.');
//   }

//   const options = {
//     ...mailOptions,
//     to: recipientEmail,
//     subject: 'Your Booking Invoice',
//     text: 'Please find attached your booking invoice.',
//     attachments: [
//       {
//         filename: 'invoice.pdf',
//         content: pdfBase64.split('base64,')[1],
//         encoding: 'base64'
//       }
//     ]
//   };

//   try {
//     const info = await transporter.sendMail(options);
//     console.log('Email sent:', info.response);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send email');
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { transporter, mailOptions } = require('./nodemailerConfig');

// router.post('/', async (req, res) => {
//   const { recipientEmail, pdfBase64 } = req.body;

//   if (!pdfBase64) {
//     return res.status(400).send('PDF data is required.');
//   }

//   const options = {
//     ...mailOptions,
//     to: recipientEmail,
//     subject: 'Your Booking Invoice',
//     text: 'Please find attached your booking invoice.',
//     attachments: [
//       {
//         filename: 'invoice.pdf',
//         content: pdfBase64.split('base64,')[1],
//         encoding: 'base64'
//       }
//     ]
//   };

//   try {
//     const info = await transporter.sendMail(options);
//     console.log('Email sent:', info.response);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send email: ' + error.message);
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { transporter, mailOptions } = require('./nodemailerConfig');
// const fs = require('fs');
// const { promisify } = require('util');
// const jsPDF = require('jspdf');
// require('jspdf-autotable');
// const writeFileAsync = promisify(fs.writeFile);

// router.post('/', async (req, res) => {
//   const { recipientEmail, bookingData } = req.body;

//   try {
//     // Generate PDF
//     const pdfBuffer = await generatePDF(bookingData);

//     // Convert PDF buffer to base64
//     const pdfBase64 = pdfBuffer.toString('base64');

//     // Save PDF to server (optional, if you want to save it)
//     // await writeFileAsync('invoice.pdf', pdfBuffer);

//     // Email options
//     const options = {
//       ...mailOptions,
//       to: recipientEmail,
//       subject: 'Your Booking Invoice',
//       text: 'Please find attached your booking invoice.',
//       attachments: [
//         {
//           filename: 'invoice.pdf',
//           content: pdfBase64,
//           encoding: 'base64',
//         },
//       ],
//     };

//     // Send email
//     const info = await transporter.sendMail(options);
//     console.log('Email sent:', info.response);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send email: ' + error.message);
//   }
// });

// async function generatePDF(bookingData) {
//   const jsPDF = require('jspdf');
//   require('jspdf-autotable');

//   // Create a new PDF document
//   const doc = new jsPDF();

//   // Add content to the PDF
//   doc.setFontSize(22);
//   doc.text('Journey - Jet', 105, 20, 'center');
//   doc.setFontSize(18);
//   doc.text('Invoice', 105, 35, 'center');

//   // Add booking details
//   doc.text(`Customer Name: ${bookingData.customerName}`, 20, 50);
//   doc.text(`Phone Number: ${bookingData.phoneNumber}`, 20, 60);
//   // Add more details as needed...

//   // Example: AutoTable for tabular data
//   doc.autoTable({
//     startY: 70,
//     head: [['Attribute', 'Value']],
//     body: [
//       ['Bus Name', bookingData.busName],
//       ['From', bookingData.from],
//       ['To', bookingData.to],
//       // Add more rows as needed...
//     ],
//     didDrawPage: function (data) {
//       // Footer
//       doc.setFontSize(12);
//       doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
//     },
//   });

//   // Return PDF buffer
//   return doc.output();
// }

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { jsPDF } = require('jspdf');
// require('jspdf-autotable');
// const nodemailer = require('nodemailer');

// router.post('/', async (req, res) => {
//   const { recipientEmail, bookingData, pdfFileName } = req.body;

//   try {
//     // Generate PDF
//     const pdfBuffer = await generatePDFBuffer(bookingData);

//     // Send email with attachment
//     await sendEmailWithAttachment(recipientEmail, pdfBuffer, pdfFileName);

//     res.status(200).json({ message: 'Email sent successfully.' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send email. Please try again.' });
//   }
// });

// // Function to generate PDF buffer
// async function generatePDFBuffer(bookingData) {
//   return new Promise((resolve, reject) => {
//     try {
//       const doc = new jsPDF();
//       doc.setFontSize(22);
//       doc.text('Journey - Jet', 105, 20, 'center');
//       doc.setFontSize(18);
//       doc.text('Invoice', 105, 35, 'center');

//       // Bus details section
//       doc.text('Bus Details:', 20, 100);
//       doc.autoTable({
//         startY: 105,
//         head: [['Attribute', 'Value']],
//         body: [
//           ['Bus Name', bookingData.busName],
//           ['Bus Number', bookingData.busNumber],
//           ['From', bookingData.from],
//           ['To', bookingData.to],
//           ['Type', bookingData.busType],
//           ['Departure', new Date(bookingData.departure).toLocaleString()],
//           ['Arrival', new Date(bookingData.arrival).toLocaleString()],
//           ['Fare', `₹ ${bookingData.fare.toLocaleString()}`],
//           ['Selected Seats', bookingData.selectedSeats.join(', ')],
//           ['Number of Passengers', bookingData.passenger_details.length.toString()],
//           ['Booking Date', new Date(bookingData.bookingDate).toLocaleDateString()],
//         ],
//         didDrawPage: (data) => {
//           doc.setFontSize(12);
//           doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
//         },
//       });

//       doc.setFontSize(16);
//       doc.text(`Discount: ₹ ${bookingData.discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
//       doc.text(`GST (5%): ₹ ${bookingData.GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
//       doc.text(`Total: ₹ ${bookingData.cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

//       const pdfBuffer = doc.output('arraybuffer');
//       resolve(pdfBuffer);
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       reject('Failed to generate PDF.');
//     }
//   });
// }

// // Function to send email with attachment
// async function sendEmailWithAttachment(recipientEmail, pdfBuffer, pdfFileName) {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: 'nayareentabassum@gmail.com', // Replace with your Gmail email address
//         pass: 'cmalbsmnxnocscvd' // Replace with your Gmail password
//       }
//     });

//     const mailOptions = {
//       from: 'nayareentabassum@gmail.com',
//       to: recipientEmail,
//       subject: 'SeatSync Booking Invoice',
//       text: 'Please find your booking invoice attached.',
//       attachments: [
//         {
//           filename: pdfFileName,
//           content: pdfBuffer,
//           encoding: 'base64'
//         }
//       ]
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully.');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw new Error('Failed to send email.');
//   }
// }

const express = require('express');
const router = express.Router();
const { jsPDF } = require('jspdf');
require('jspdf-autotable');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { recipientEmail, bookingData, pdfFileName } = req.body;

  try {
    // Generate PDF buffer
    const pdfBuffer = await generatePDFBuffer(bookingData);

    // Send email with attachment
    await sendEmailWithAttachment(recipientEmail, pdfBuffer, pdfFileName);

    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// Function to generate PDF buffer
async function generatePDFBuffer(bookingData) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(22);
      doc.text('SeatSync', 105, 20, 'center');
      doc.setFontSize(18);
      doc.text('Invoice', 105, 35, 'center');

      // Bus details section
      doc.text('Bus Details:', 20, 100);
      doc.autoTable({
        startY: 105,
        head: [['Attribute', 'Value']],
        body: [
          ['Bus Name', bookingData.busName],
          ['Bus Number', bookingData.busNumber],
          ['From', bookingData.from],
          ['To', bookingData.to],
          ['Type', bookingData.busType],
          ['Departure', new Date(bookingData.departure).toLocaleString()],
          ['Arrival', new Date(bookingData.arrival).toLocaleString()],
          ['Fare', `₹ ${bookingData.fare.toLocaleString()}`],
          ['Selected Seats', bookingData.selectedSeats.join(', ')],
          ['Number of Passengers', bookingData.passenger_details.length.toString()],
          ['Booking Date', new Date(bookingData.bookingDate).toLocaleDateString()],
        ],
        didDrawPage: (data) => {
          doc.setFontSize(12);
          doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
        },
      });

      doc.setFontSize(16);
      doc.text(`Discount: ₹ ${bookingData.discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
      doc.text(`GST (5%): ₹ ${bookingData.GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
      doc.text(`Total: ₹ ${bookingData.cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

      // Output PDF as ArrayBuffer
      const pdfBuffer = doc.output('arraybuffer');
      resolve(Buffer.from(pdfBuffer)); // Convert ArrayBuffer to Buffer
    } catch (error) {
      console.error('Error generating PDF:', error);
      reject('Failed to generate PDF.');
    }
  });
}

// Function to send email with attachment
async function sendEmailWithAttachment(recipientEmail, pdfBuffer, pdfFileName) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'nayareentabassum@gmail.com', // Replace with your Gmail email address
        pass: 'cmalbsmnxnocscvd' // Replace with your Gmail password
      }
    });

    const mailOptions = {
      from: 'nayareentabassum@gmail.com',
      to: recipientEmail,
      subject: 'SeatSync Booking Invoice',
      text: 'Please find your booking invoice attached.',
      attachments: [
        {filename: pdfFileName,
          content: pdfBuffer, // Corrected to use pdfBuffer
          encoding: 'base64',
          contentType: 'application/pdf'
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email.');
  }
}

module.exports = router;



