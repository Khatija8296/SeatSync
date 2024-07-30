const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');
const { Bus } = require('./bus');

const Review = sequelize.define('Review', {
  reviewId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  reviews: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  }
});

Review.belongsTo(Bus, { foreignKey: 'busId' });
Bus.hasOne(Review, { foreignKey: 'busId' });

module.exports = { Review };
