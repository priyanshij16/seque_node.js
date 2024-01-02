 var db = require('../models/')
 const Users = db.Users
 const { response } = require("express")

 var addUser = async(req, res) => {

     let data = await Users.build({ name: 'Test', last_name: '', email: 'test2@gmail.com' })
     await data.save()
     let response = {
         data: 'ok'
     }
     response.status(200).json(response);
 }
 module.exports = {
     addUser
 }