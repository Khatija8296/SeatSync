const { Count } = require('./db/CountModel');
const { Booking } = require('./db/bookingModel');

const fetchTrendingBusesFromAnalytics = async () => {
    try {
        // Fetch counts for all buses
        const counts = await Count.findAll({
            attributes: ['busId', 'counts']
        });

        // You may also fetch additional bus details from Booking or Bus model to display in frontend
        const trendingBuses = counts.map(count => ({
            busId: count.busId,
            count: count.counts
            // Add more details as needed
        }));

        // Example: Sort buses by count to determine trending
        const sortedTrendingBuses = trendingBuses.sort((a, b) => b.count - a.count);

        return sortedTrendingBuses;
    } catch (error) {
        console.error('Error fetching trending buses:', error);
        throw new Error('Failed to fetch trending buses');
    }
};

module.exports = {
    fetchTrendingBusesFromAnalytics
    
};
