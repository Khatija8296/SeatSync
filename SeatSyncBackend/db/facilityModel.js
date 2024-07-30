const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');
const { Bus } = require('./bus');

const Facility = sequelize.define('Facility', {
  facilityId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  facilities: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  }
});

Facility.belongsTo(Bus, { foreignKey: 'busId' });
Bus.hasOne(Facility, { foreignKey: 'busId' });

module.exports = { Facility };
