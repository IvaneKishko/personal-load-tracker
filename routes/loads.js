// Handles initial GET and POST request
const express = require('express')
const router = express.Router()
const loadsController = require('../controls/loadsController')

router.get('/', loadsController.getIndex) // read
router.post('/new', loadsController.createItem) // create
router.delete('/remove/:id', loadsController.removeItem) // create 

module.exports = router