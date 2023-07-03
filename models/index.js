'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const modelsDirectory = path.resolve(__dirname, '../models');

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

console.log(`Dirname: ${__dirname}`)

const Users = require('./users')(sequelize, Sequelize.DataTypes);
db[Users.name] = Users;

fs
  .readdirSync(modelsDirectory)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(modelsDirectory, file))(sequelize, Sequelize.DataTypes);
    console.log(`Loading model: ${model.name}`);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log("Exporting models:", Object.keys(db));

module.exports = db;
