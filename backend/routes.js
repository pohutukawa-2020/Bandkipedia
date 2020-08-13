const express = require('express')
const utils = require('./utils')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.send('pupparazzi')
})

router.get('/puppies', (req, res) => {
  utils.getPuppiesData((err, puppiesData) => {
    if (err) {
      res.status(500).send('Ohh!' + err.message)
    } else {
      res.render('puppies/index', puppiesData)
    }
  })
})

router.get('/puppies/:id', (req, res) => {

  const id = parseInt(req.params.id)
  
  utils.getPuppiesData((err, puppiesData) => {
    if (err) {
      res.status(500).send('There is an error: ' + err.message)
    } else {
      const grabThePuppy = puppiesData.puppies.find(dog => dog.id === id)
      res.render('puppies/view', grabThePuppy)
    }
  })
})