const Sequelize = require('sequelize')

const connection = new Sequelize(
  process.env.DB_URI, {
    operatorsAliases: Sequelize.Op
  })

module.exports = connection
