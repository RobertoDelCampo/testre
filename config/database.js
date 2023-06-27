const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables from .env.local
const { parse } = require('dotenv');
const fs = require('fs');
const config = parse(fs.readFileSync('config/config.json'));

const sequelize = new Sequelize(config[process.env.NODE_ENV || 'development'].database, config[process.env.NODE_ENV || 'development'].username, config[process.env.NODE_ENV || 'development'].password, {
  host: config[process.env.NODE_ENV || 'development'].host,
  dialect: config[process.env.NODE_ENV || 'development'].dialect,
});


/*
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  cause_error(500, "DB connection failed")
}
*/

module.exports = sequelize;
