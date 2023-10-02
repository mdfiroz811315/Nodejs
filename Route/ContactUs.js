const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('User Contact page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Contact')
})
// define the about route
router.post('/about', (req, res) => {
    res.send('About post Contact')
  }) 
  
module.exports = router