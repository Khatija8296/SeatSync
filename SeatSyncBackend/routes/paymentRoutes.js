// paymentRoutes.js
const express = require('express');
const { UserPayments } = require('../db/UserPayments');

const router = express.Router();

router.post('/check-user', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserPayments.findOne({ where: { email } });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(200).json({ message: 'New user' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




// GET: Retrieve user payment details
router.get('/get-payment/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await UserPayments.findOne({ where: { email } });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/save-payment', async (req, res) => {
  const { email, paymentDetails } = req.body;
  try {
    const [user, created] = await UserPayments.findOrCreate({
      where: { email },
      defaults: paymentDetails,
    });

    if (!created) {
      await user.update(paymentDetails);
    }

    res.status(200).json({ message: 'Payment details saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
