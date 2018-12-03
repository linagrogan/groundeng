const Sequelize = require('sequelize')
const dbConnection = require('../dbconnection')
const path = require('path')

const schema = {
  eng: {
    type: Sequelize.STRING,
    unique: true,
    primaryKey: true
  },
  rus: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  details: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}

const Cache = dbConnection.define(path.parse(__filename).name, schema)

module.exports = Cache
