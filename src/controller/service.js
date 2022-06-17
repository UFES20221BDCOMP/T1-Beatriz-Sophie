const express = require('express')
const router = express.Router()

const Service = require('../model/service')

// Returns a specific service from database
router.get('/service/:id', Service.get)

// Returns all services from database
router.get('/service', Service.getAll)

module.exports = router
