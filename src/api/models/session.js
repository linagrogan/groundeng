const Sequelize = require('sequelize')
const dbConnection = require('../dbconnection')
const path = require('path')
const chance = new require('chance')()

const schema = {
  id: {
    type: Sequelize.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false
  }
}

const hooks = {
  beforeValidate: session => {
    session.id = chance.hash({ length: 32 })
  }
}

const Session = dbConnection.define(path.parse(__filename).name, schema, { hooks })

module.exports = Session
