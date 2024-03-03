const Sequelize = require('sequelize')
const sequelize = new Sequelize('inventory_management', 'root', 'user', { dialect: 'mysql', host: 'localhost' })
module.exports = sequelize