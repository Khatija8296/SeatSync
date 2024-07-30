const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');
const { Bus } = require('./bus');


const Count=sequelize.define('Count',{
    countId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    counts:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    busId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      }
    
});

Count.sync()
  .then(() => console.log('CCC table synced'))
  .catch(err => console.error('Failed to syncfff table:', err));

module.exports = { Count };
