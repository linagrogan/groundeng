const Sequelize = require('sequelize')
const dbConnection = require('../dbconnection')
const Word = require('./word')
const Session = require('./session')
const path = require('path')

const schema = {
  login: {
    type: Sequelize.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}

const User = dbConnection.define(path.parse(__filename).name, schema)

User.hasMany(Word, {
  foreignKey: {
    name: 'addedBy',
    primaryKey: true,
    allowNull: false
  },
  onDelete: 'CASCADE'
})

User.hasMany(Session, {
  foreignKey: {
    name: 'owner',
    primaryKey: true,
    allowNull: false
  },
  onDelete: 'CASCADE'
})

module.exports = User
