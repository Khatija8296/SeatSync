// const {Count} = require('../db/CountModel');

// // Controller methods
// const createCount = async (req, res) => {
//   try {
//     const { counts,busId } = req.body;
//     const count = await Count.create({
//         counts,
//       busId,
     
//     });
//     res.status(201).json(count);
//   } catch (error) {
//     console.error('Error creating counts:', error);
//     res.status(500).json({ error: 'Failed to create counts' });
//   }
// };

// const getCountByBusId = async (req, res) => {
//     const { busId } = req.params;
//     try {
//       const count = await Count.findAll({
//         where: { busId },
//         attributes: ['counts'],
//       });
//       res.status(200).json(count);
//     } catch (error) {
//       console.error('Error fetching selected counts by busId:', error);
//       res.status(500).json({ error: 'Failed to fetch selected count' });
//     }
//   };

//   module.exports = {

//     createCount,
//     getCountByBusId
//   };
  
  
const { Count } = require('../db/CountModel');

// Controller methods
const createCount = async (req, res) => {
  try {
    const { counts, busId } = req.body;
    const count = await Count.create({
      counts,
      busId,
    });
    res.status(201).json(count);
  } catch (error) {
    console.error('Error creating counts:', error);
    res.status(500).json({ error: 'Failed to create counts' });
  }
};

const getCountByBusId = async (req, res) => {
  const { busId } = req.params;
  try {
    const count = await Count.findAll({
      where: { busId },
      attributes: ['counts'],
    });
    res.status(200).json(count);
  } catch (error) {
    console.error('Error fetching selected counts by busId:', error);
    res.status(500).json({ error: 'Failed to fetch selected count' });
  }
};

const getCount = async (req, res) => {
  try {
    const counts = await Count.findAll({
      attributes: ['busId', 'counts'], // Specify attributes to retrieve
    });
    res.status(200).json(counts);
  } catch (error) {
    console.error('Error fetching all counts:', error);
    res.status(500).json({ error: 'Failed to fetch counts' });
  }
};


const updateCountByBusId = async (req, res) => {
  const { busId } = req.params;
  const { counts } = req.body;
  try {
    const count = await Count.findOne({ where: { busId } });
    if (count) {
      count.counts = counts;
      await count.save();
      res.status(200).json(count);
    } else {
      res.status(404).json({ error: 'Count not found for the specified busId' });
    }
  } catch (error) {
    console.error('Error updating counts:', error);
    res.status(500).json({ error: 'Failed to update counts' });
  }
};

module.exports = {
  createCount,
  getCountByBusId,
  updateCountByBusId,
  getCount
};
