const express = require('express')
const router = express.Router();
const userController = require("../Controller/userController")

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
    userController.userHome(req,res);
})
// define Params In route
router.get('/about/:details', (req, res) => {
    userController.about(req,res);
})
// define the about route
router.post('/about', (req, res) => {
    userController.aboutPost(req,res);
}) 
router.get('/header', (req, res) => {
    userController.header(req,res);
})  
module.exports = router