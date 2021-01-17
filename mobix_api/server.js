// Obtain port No from .env file
require("dotenv").config({path:'../.env'})

const db = require('./config/db_config')

//Accquire Express Middleware
const express = require('express')
const app = express()

const PORT_NO = parseInt(process.env.BACKEND_PORT);


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Start Server
app.listen(PORT_NO, async() => {
    try{
        await db.authenticate();
        console.log('Connection with database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    console.log(`Example app listening at http://localhost:${PORT_NO}`)
})