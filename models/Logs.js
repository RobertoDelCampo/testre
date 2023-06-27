const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('Logs', {
  log: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    reportOn: DataTypes.TIME,
  },
  password: {
    reportOn: DataTypes.TIME,
  },
  // Add more fields as needed
});

module.exports = User;
