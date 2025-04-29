const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cart = sequelize.define('Cart', {
  status: {
    type: DataTypes.ENUM('pending', 'complete'), 
    allowNull: false,
    defaultValue: 'pending', 
  }
});

module.exports = Cart;

