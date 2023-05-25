// Handles initial GET and POST request
const express = require('express')
const router = express.Router()
const editController = require('../controls/editController')

router.get('/:id', editController.getEdit) // read

module.exports = router