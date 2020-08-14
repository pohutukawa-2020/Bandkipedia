const express = require('express')
const utils = require('./utils')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.send('bandkpedia')
})

router.get('/bands', (req, res) => { // router to server page??
  utils.getBandsData((err, bandsData) => {
    if (err) {
      res.status(500).send('Ohh!' + err.message)
    } else {
      res.render('bands/index', bandsData)
    }
  })
})
router.get('/bands/:id', (req, res) => { // navigating to individual band page

  const id = parseInt(req.params.id) // grab the object
  
  utils.getBandsData((err, bandsData) => {
    if (err) {
      res.status(500).send('There is an error: ' + err.message)
    } else {
      const grabTheBand = bandsData.bands.find(band => band.id === id) // get the id of the band
      res.render('bands/view', grabTheBand) // get the data of the band anf render it to the views page
    }
  })
})