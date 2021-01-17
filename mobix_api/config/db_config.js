require("dotenv").config({path:'../.env'})

const { Sequelize } = require('sequelize');

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.USER_NAME,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        port: process.env.PORT_NO,
        dialect: 'mysql'
    }
  );

module.exports = db;