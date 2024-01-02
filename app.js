// import { Sequelize } from "sequelize";

// // new Sequelize('database', 'username', 'password',
// const sequelize = new Sequelize('mysql', 'postgres', 'rgbXYZ@9182', {
//     host: 'localhost',
//     dialect: 'postgres'
// });


// // test the database connection :
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');

// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

// // define a model 


// // synchronization the model with database:
// sequelize.sync()
//     .then(() => {
//         console.log('Database synchronized');
//     })
//     .catch((err) => {
//         console.log('Error synch ', err);
//     })
const express = require('express');
const app = express();
const PORT = 8080;

var userCtrl = require('./userController/')
app.get("/", (req, res) => {
    res.send(`WOKING `)
})

app.get("/add", (req, res) => {
    res.send(`WOKING `)
})
app.listen(PORT, () => {
    console.log(`server is runnung on  http://localhost:${PORT}`);
})