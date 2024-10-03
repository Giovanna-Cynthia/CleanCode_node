require('dotenv').config();
const { Sequilize } = require('sequelize');

const sequelize = new Sequilize(
    process.env.DB_NAME, 
    process.DB_USER, 
    process. DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
}); 

module.exports = sequelize;