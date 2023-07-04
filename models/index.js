'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(appRoot.path, '/config/config.json'))[env];
const db = {};
const modelsDirectory = path.join(appRoot.path, '/models');

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

console.log(`App root: ${appRoot.path}`)
console.log(`Models directory: ${modelsDirectory}`)

fs
  .readdirSync(modelsDirectory)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== 'index.js' &&  // Exclude the index.js file
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
