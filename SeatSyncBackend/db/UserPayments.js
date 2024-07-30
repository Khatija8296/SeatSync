const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:Khatija@2001@localhost:5432/06-07-2024');

const UserPayments = sequelize.define('UserPayments', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  creditCardDetails: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  debitCardDetails: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  netBankingDetails: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  upiDetails: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
});

sequelize.sync();

module.exports = { UserPayments };
