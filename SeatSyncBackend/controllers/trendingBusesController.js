// controllers/trendingBusesController.js
const { Count } = require('../db/CountModel'); // Adjust the path according to your project structure

const getTrendingBuses = async (req, res) => {
    try {
        const trendingBuses = await Count.findAll({
            attributes: ['busId', 'counts'],
            order: [['counts', 'DESC']],
            limit: 10 // Adjust the limit as needed
        });
        res.status(200).json(trendingBuses);
    } catch (error) {
        console.error('Error fetching trending buses:', error);
        res.status(500).json({ error: 'Failed to fetch trending buses' });
    }
};

module.exports = { getTrendingBuses };
