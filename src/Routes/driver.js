const express = require('express')
const router = express.Router()
const {
  getDrivers,
  createDriver,
} = require('../Controllers/driver')

router
  .get('/getDrivers', getDrivers)
  .put('/createDrivers', createDriver)

module.exports = router